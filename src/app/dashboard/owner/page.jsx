import MonthlyEarningsChart from '@/components/dashboard/owner/MonthlyEarningsChart';
import SummeryCard from '@/components/dashboard/owner/SummeryCard';
import PageHeader from '@/components/dashboard/shared/PageHeader';
import { getBookingRequestById, getOwnerMonthlyEarnings, getOwnerTotalIncome } from '@/lib/api/bookings';
import { getOwenerProperties } from '@/lib/api/properties';
import { getCurrentUser } from '@/lib/session';
import React from 'react';
import { FaBuilding, FaClipboardList, FaWallet } from 'react-icons/fa';

const OwnerDashboardPage = async () => {
  const user = await getCurrentUser();
  const properties = await getOwenerProperties(user?.id);
  const bookings = await getBookingRequestById(user?.id);

  const confirmdBookings = bookings.filter(booking => booking?.bookingStatus === 'Approved');

  const { totalIncome } = await getOwnerTotalIncome(user?.id);

  const monthlyEarnings = await getOwnerMonthlyEarnings(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={`Welcome Back, ${user?.name}`}
        subtitle={'Monitor your properties, tenants, and rental performance.'}
      />

      <section className='grid lg:grid-cols-3 gap-6'>
        <SummeryCard
          icon={FaWallet}
          title={'Total Earnings'}
          value={`৳${totalIncome}`}
        />

        <SummeryCard
          icon={FaBuilding}
          title={'Total Properties'}
          value={properties.length}
        />

        <SummeryCard
          icon={FaClipboardList}
          title={'Total Bookings'}
          value={confirmdBookings.length}
        />
      </section>

      <MonthlyEarningsChart
        monthlyEarnings={monthlyEarnings}
      />
    </div>
  );
};

export default OwnerDashboardPage;
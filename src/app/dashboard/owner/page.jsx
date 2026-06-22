import SummeryCard from '@/components/dashboard/owner/SummeryCard';
import PageHeader from '@/components/dashboard/shared/PageHeader';
import { getOwenerProperties } from '@/lib/api/properties';
import { getCurrentUser } from '@/lib/session';
import React from 'react';
import { FaBuilding, FaClipboardList, FaWallet } from 'react-icons/fa';

const OwnerDashboardPage = async () => {
  const user = await getCurrentUser();
  const properties = await getOwenerProperties(user?.id);

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
          value={10}
        />

        <SummeryCard
          icon={FaBuilding}
          title={'Total Properties'}
          value={properties.length}
        />

        <SummeryCard
          icon={FaClipboardList}
          title={'Total Bookings'}
          value={10}
        />
      </section>
    </div>
  );
};

export default OwnerDashboardPage;
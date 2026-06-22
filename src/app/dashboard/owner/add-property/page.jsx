import AddPropertyForm from '@/components/dashboard/owner/AddPropertyForm';
import PageHeader from '@/components/dashboard/shared/PageHeader';
import { getCurrentUser } from '@/lib/session';
import React from 'react';

const AddPropertyPage = async () => {
  const user = await getCurrentUser();

  return (
    <div className='space-y-10 '>
      <PageHeader
        title={'List Your Property'}
        subtitle={'Provide accurate information to help tenants find the right home.'}
      />

      <AddPropertyForm
        user={user} 
      />
    </div>
  );
};

export default AddPropertyPage;
import AddPropertyForm from '@/components/dashboard/AddPropertyForm';
import { getCurrentUser } from '@/lib/session';
import React from 'react';

const AddPropertyPage = async () => {
  const user = await getCurrentUser();

  return (
    <div className='space-y-10 '>
      <header>
        <h2 className='text-3xl lg:text-4xl font-bold'>List Your Property</h2>
        <p>Provide accurate information to help tenants find the right home.</p>
      </header>

      <AddPropertyForm
        user={user} 
      />
    </div>
  );
};

export default AddPropertyPage;
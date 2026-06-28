import { Suspense } from 'react';
import PublicAllPropertiesPage from './PublicAllPropertiesPage';

const page = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <PublicAllPropertiesPage />
    </Suspense>
  );
};

export default page;
import { Button } from '@heroui/react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen p-6'>
      <div 
        className='flex flex-col items-center p-6 rounded-2xl space-y-6 text-center'
      >
        <h3 
          className='text-emerald-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'
        >
          404
        </h3>

        <div>
          <p className='text-2xl sm:text-3xl font-bold'>
            Oops! We couldn't find that page.
          </p>

          <p className='text-sm sm:text-base md:text-lg'>
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <Link href={'/'}>
          <Button className='bg-emerald-600 hover:bg-emerald-700 rounded-lg'>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
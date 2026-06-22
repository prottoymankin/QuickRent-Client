import Profile from '@/components/dashboard/shared/Profile';
import { getCurrentUser } from '@/lib/session';

const OwnerProfilePage = async () => {
  const user = await getCurrentUser();

  return (
    <div className="h-full flex items-center justify-center">
      <Profile user={user} />
    </div>
  );
};

export default OwnerProfilePage;
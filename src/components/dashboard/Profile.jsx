import { Chip } from "@heroui/react";
import Image from "next/image";

const Profile = ({ user }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    <div className='space-y-6 w-full'>
      
      <div 
        className='border border-zinc-300 flex items-center gap-6 max-w-3xl p-6 mx-auto rounded-2xl w-full'
      >
        <div className="h-30 overflow-hidden relative rounded-4xl w-30">
          <Image
            alt={user?.name}
            className='object-cover'
            fill
            src={user?.image}
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <h3 className='font-bold text-2xl'>{user?.name}</h3>
            <Chip>{user?.role}</Chip>
          </div>

          <p className="text-muted">{user?.email}</p>
        </div>
      </div>


      <div 
        className='border border-zinc-300 max-w-3xl mx-auto p-6 rounded-2xl space-y-6'
      >
        <h4 className='font-medium text-lg'>
          Account Information
        </h4>

        <div className="text-sm space-y-6">
          <div className='font-medium space-y-1'>
            <p className="text-muted">USER ID</p>
            <p className='border border-zinc-300 p-3 rounded-xl'>
              {user?.id}
            </p>
          </div>

          <div className='flex'>
            <div className='flex-1 font-medium space-y-1'>
              <p className="text-muted">ACCOUNT TYPE</p>
              <p>{user?.role} Account</p>
            </div>

            <div className='flex-1 font-medium space-y-1'>
              <p className="text-muted">JOINED ON</p>
              <p>{formatDate(user?.createdAt)}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
import { formatDate } from "@/utils/formatDate";
import { Chip } from "@heroui/react";
import Image from "next/image";

const Profile = ({ user }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="absolute inset-x-0 top-0 h-1 bg-emerald-600" />

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-emerald-100">
            <Image
              src={user?.image}
              alt={user?.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div>
              <h2 className="text-2xl font-bold">
                {user?.name}
              </h2>

              <p className=" text-zinc-500">
                {user?.email}
              </p>
            </div>

            <Chip
              className='mt-2'
              color="success"
              variant="flat"
            >
              {user?.role}
            </Chip>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-zinc-950">
          Account Information
        </h3>

        <div className="mt-6 space-y-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              User ID
            </p>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm break-all text-zinc-700">
              {user?.id}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Account Type
              </p>

              <h4 className="mt-2 text-lg font-semibold text-zinc-950">
                {user?.role}
              </h4>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Joined On
              </p>

              <h4 className="mt-2 text-lg font-semibold text-zinc-950">
                {formatDate(user?.createdAt)}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
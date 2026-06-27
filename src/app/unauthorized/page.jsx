import Link from "next/link";
import { ShieldExclamation } from "@gravity-ui/icons";
import { getCurrentUser } from "@/lib/session";

const UnauthorizedPage = async () => {
  const user = await getCurrentUser();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div 
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100"
        >
          <ShieldExclamation className="h-12 w-12 text-red-600" />
        </div>

        <span 
          className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700"
        >
          403 Forbidden
        </span>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Access Denied
        </h1>

        <p className="mt-4 text-default-500">
          Sorry, you don't have permission to access this page.
          If you believe this is a mistake, please contact the administrator
          or return to your dashboard.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg border px-6 py-3 font-medium transition hover:bg-default-100"
          >
            Go Home
          </Link>

          <Link
            href={`/dashboard/${user?.role.toLowerCase()}`}
            className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
import { requireRole } from "@/lib/session";

const TenantDashboard = async ({ children }) => {
  await requireRole('Tenant');

  return children;
};

export default TenantDashboard;
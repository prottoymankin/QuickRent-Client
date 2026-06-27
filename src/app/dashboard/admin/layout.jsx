import { requireRole } from "@/lib/session";

const AdminLayout = async ({ children }) => {
  await requireRole('Admin');

  return children;
};

export default AdminLayout;
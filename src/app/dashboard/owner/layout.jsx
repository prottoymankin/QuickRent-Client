import { requireRole } from "@/lib/session";

const OwnerLayout = async ({ children }) => {
  await requireRole('Owner');

  return children;
};

export default OwnerLayout;
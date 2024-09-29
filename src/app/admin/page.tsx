import { Admin } from "@/pages/admin/admin.index";
import { useUser } from "@/utils/supabase/user";

export default async function AdminPage() {
  useUser();

  return <Admin />;
}

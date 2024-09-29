import { Admin } from "@/@pages/admin/admin.index";
import { useUser } from "@/@shared/utils/supabase/user";

export default async function AdminPage() {
  useUser();

  return <Admin />;
}

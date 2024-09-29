import { useUser } from "@/utils/supabase/user";

export async function Admin() {
  const user = await useUser();

  return <div>admin : {user.email}</div>;
}

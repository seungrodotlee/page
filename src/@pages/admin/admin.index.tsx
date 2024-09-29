import { useUser } from "@/@shared/utils/supabase/user";

export async function Admin() {
  const user = await useUser();

  return <div>admin : {user.email}</div>;
}

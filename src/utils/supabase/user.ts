import { redirect } from "next/navigation";
import { createClient } from "./server";

export async function useUser() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/admin/login");
  }

  return data.user;
}
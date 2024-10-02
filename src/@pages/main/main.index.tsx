import { select } from "@/@shared/utils/supabase/select";
import { main } from "./main.style";

export async function Main() {
  const data = await select("about", "*, contact( * )");
  
  return <div className={main.root}>seungrodotlee</div>;
}

import { select } from "@/@shared/supabase/select";

export default async function BlogPage() {
  const blogs = await select("blogs", "*, tags( * )");
  return <div>blog</div>;
}

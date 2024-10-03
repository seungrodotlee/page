import { format } from "date-fns";

import { select } from "@/@shared/supabase/select";
import { getQuery } from "@/@shared/supabase/get-query";

import { blogContext } from "./blog.context";

export async function Blog() {
  const { search } = blogContext.get();
  const baseQuery = getQuery("articles", "*, tags( * )");
  const query =
    search != null && search.length > 0
      ? baseQuery.or(
          `title.like(any).{*${search}*},content.like(any).{*${search}*}`
        )
      : baseQuery;
  const articles = await select.fromQuery(query);

  return (
    <div>
      <p>search: {search}</p>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{format(new Date(article.created_at), "yyyy.MM.dd")}</p>
        </div>
      ))}
    </div>
  );
}

import { blogContext } from "@/@pages/blog/blog.context";
import { Blog } from "@/@pages/blog/blog.index";

type BlogPageProps = {
  searchParams: {
    search?: string;
  };
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  console.log(searchParams);
  blogContext.set({ search: searchParams.search ?? null });

  return <Blog />;
}

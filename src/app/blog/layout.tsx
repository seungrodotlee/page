import { BlogSearch } from "@/@pages/blog/blog.search";
import { Header } from "@/@shared/components/header/header.index";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header current="blog">
        <Header.Accessory>
          <BlogSearch />
        </Header.Accessory>
      </Header>
      {children}
    </>
  );
}

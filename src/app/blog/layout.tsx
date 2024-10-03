import { Header } from "@/@shared/components/header/header.index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header current="blog">
        <Header.Accessory>
          <input />
          검색
        </Header.Accessory>
      </Header>
      {children}
    </>
  );
}

import { Header } from "@/@shared/components/header/header.index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header current="about" />
      {children}
    </>
  );
}

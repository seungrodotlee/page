import { Header } from "@/@shared/components/header/header.index";

import { logout } from "../auth/login/actions";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <Header.Accessory>
          <form>
            <button formAction={logout}>로그아웃</button>
          </form>
        </Header.Accessory>
      </Header>
      {children}
    </>
  );
}

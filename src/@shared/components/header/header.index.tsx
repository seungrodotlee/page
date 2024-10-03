import { ReactNode } from "react";
import { HeaderAccessory } from "./header.accessory";
import { getNestedComponent } from "@/@shared/utils/react/get-child";
import Link from "next/link";

const menus = [
  {
    label: "about",
    link: "/",
  },
  {
    label: "blog",
    link: "/blog",
  },
];

export function Header({
  children,
  current,
}: {
  children?: ReactNode;
  current?: "about" | "blog";
}) {
  const accessory = getNestedComponent(children, Header.Accessory, {
    multiple: true,
  });

  return (
    <div>
      <div>seungrodotlee</div>
      <div>
        <form>
          {menus.map((menu) => (
            <Link key={menu.label} href={menu.link}>
              {menu.label.toUpperCase()} {menu.label === current ? "(*)" : ""}
            </Link>
          ))}
        </form>
      </div>
      <div id="header-accessory">{accessory}</div>
    </div>
  );
}

Header.Accessory = HeaderAccessory;

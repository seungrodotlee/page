import { ReactNode } from "react";
import { HeaderAccessory } from "./header.accessory";
import { getNestedComponent } from "@/@shared/utils/react/get-child";

export function Header({ children }: { children?: ReactNode }) {
  const accessory = getNestedComponent(children, Header.Accessory, {
    multiple: true,
  });

  return (
    <div>
      <div>seungrodotlee</div>
      <div id="header-accessory">{accessory}</div>
    </div>
  );
}

Header.Accessory = HeaderAccessory;

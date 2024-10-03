import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import { _varianted } from "./style.varianted";
import { c, C } from "./style.c";

export function style(classNameGetter: (c: C) => string[]): string;
export function style(className: ClassValue): string;
export function style(
  classNameOrClassNameGetter: ClassValue | ((c: C) => string[])
): string {
  if (typeof classNameOrClassNameGetter === "function") {
    const classNames = classNameOrClassNameGetter(c);

    return twMerge(clsx(...classNames));
  }

  return twMerge(clsx(classNameOrClassNameGetter));
}

style.varianted = _varianted;

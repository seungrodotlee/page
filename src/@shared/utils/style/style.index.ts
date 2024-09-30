import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { _varianted } from "./style.varianted";

export function style(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}

style.varianted = _varianted;
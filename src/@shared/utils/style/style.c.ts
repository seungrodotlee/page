import { ClassValue } from "clsx";

export type C = (className: ClassValue) => string;

export function c(className: ClassValue) {
  return className as string;
}

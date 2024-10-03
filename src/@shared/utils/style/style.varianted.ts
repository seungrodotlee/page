import { cva } from "class-variance-authority";
import {
  ClassProp,
  ClassValue,
  StringToBoolean,
} from "class-variance-authority/types";

import { style } from "./style.index";
import { c, C } from "./style.c";

type ConfigSchema = Record<string, Record<string, ClassValue>>;

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
    | undefined;
};

type Config<T> = T extends ConfigSchema
  ? {
      variants?: T;
      defaultVariants?: ConfigVariants<T>;
      compoundVariants?: (T extends ConfigSchema
        ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
        : ClassProp)[];
    }
  : never;

type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & ClassProp
  : ClassProp;

export function _varianted<T>(
  className?: ClassValue,
  config?: (c: C) => Config<T>
) {
  return (variant?: Props<T>) => style(cva(className, config?.(c))(variant));
}

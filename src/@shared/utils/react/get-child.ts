import {
  Children,
  isValidElement,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";

export function getNestedComponent<M extends boolean = false>(
  children: ReactNode,
  type: JSXElementConstructor<any>,
  options?: {
    multiple?: M;
  }
): M extends true ? ReactElement[] : ReactElement {
  return Children.toArray(children)[options?.multiple ? "filter" : "find"](
    (child) => isValidElement(child) && child.type === type
  ) as any;
}

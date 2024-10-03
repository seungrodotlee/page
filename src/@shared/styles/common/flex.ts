import { style } from "@/@shared/utils/style/style.index";

export type FlexProps = {
  direction?: "row" | "column";
  center?: boolean | "x" | "y";
  wrap?: boolean | "reverse";
}

export function flex(props: FlexProps) {
  return style.varianted(`flex`, c => ({
    variants: {
      direction: {
        row: "",
        column: c`flex-col`
      },
      center: {
        true: c`justify-center items-center`,
        x: "",
        y: ""
      },
      wrap: {
        true: c`flex-wrap`,
        reverse: c`flex-wrap-reverse`,
      }
    },
    compoundVariants: [
      {
        direction: "row",
        center: "x",
        class: c`justify-center`,
      },
      {
        direction: "row",
        center: "y",
        class: c`items-center`,
      },
      {
        direction: "column",
        center: "x",
        class: c`items-center`,
      },
      {
        direction: "column",
        center: "y",
        class: c`justify-center`,
      },
    ],
    defaultVariants: {
      direction: "row",
    }
  }))(props);
}
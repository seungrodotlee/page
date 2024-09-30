import { style } from "@/@shared/utils/style/style.index";

export type FlexProps = {
  direction?: "row" | "column";
  center?: boolean | "x" | "y";
  wrap?: boolean | "reverse";
}

export function flex(props: FlexProps) {
  return style.varianted(`flex`, {
    variants: {
      direction: {
        row: "",
        column: "flex-col"
      },
      center: {
        true: "justify-center items-center",
        x: "",
        y: ""
      },
      wrap: {
        true: "flex-wrap",
        reverse: "flex-wrap-reverse"
      }
    },
    compoundVariants: [
      {
        direction: "row",
        center: "x",
        class: "justify-center",
      },
      {
        direction: "row",
        center: "y",
        class: "items-center",
      },
      {
        direction: "column",
        center: "x",
        class: "items-center",
      },
      {
        direction: "column",
        center: "y",
        class: "justify-center",
      },
    ],
    defaultVariants: {
      direction: "row",
    }
  })(props);
}
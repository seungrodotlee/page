import { style } from "@/@shared/utils/style/style.index";
import { flex } from "@/@styles/common/flex";

const root = style(
  flex({ direction: "column", center: true }),
  `min-h-screen p-8 pb-20 sm:p-20` 
);

export const main = {
  root
}
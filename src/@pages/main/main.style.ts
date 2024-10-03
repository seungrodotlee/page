import { style } from "@/@shared/utils/style/style.index";
import { flex } from "@/@shared/styles/common/flex";

const root = style((c) => [
  flex({ direction: "column" }),
  c`min-h-screen p-8 pb-20 sm:p-20`,
]);

export const main = {
  root,
};

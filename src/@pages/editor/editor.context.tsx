import { serverContext } from "@/@shared/utils/server/server-context";

export const editorContext = serverContext<Record<string, string>>();

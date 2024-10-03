import { serverContext } from "@/@shared/utils/server/server-context";

export const blogContext = serverContext<Record<string, string | null>>();

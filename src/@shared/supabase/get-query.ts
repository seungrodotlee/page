import { createClient } from "./client";
import { Database } from "./types/database.type";

export function getQuery<
  T extends keyof Database["public"]["Tables"],
  Q extends string = "*"
>(table: T, columns: Q) {
  const supabase = createClient();

  return supabase.from(table).select(columns);
}

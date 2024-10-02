import { QueryData } from "@supabase/supabase-js";
import { createClient } from "./client";
import { Database } from "./database";
import { getUser } from "./user";

export async function select<T extends keyof Database['public']['Tables'], Q extends string = '*'>(table: T, columns: Q) {
  const supabase = createClient();
  await getUser();

  const query = supabase.from(table).select(columns);

  const queryResult = await query;

  if (queryResult.error) throw queryResult.error;

  return queryResult.data as QueryData<typeof query>;
}
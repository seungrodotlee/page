import { QueryData } from "@supabase/supabase-js";
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from "@supabase/supabase-js/dist/module/lib/types";

import { Database } from "./types/database.type";
import { getQuery } from "./get-query";

export async function select<
  T extends keyof Database["public"]["Tables"],
  Q extends string = "*"
>(table: T, columns: Q) {
  const query = getQuery(table, columns);

  const queryResult = await query;

  if (queryResult.error) throw queryResult.error;

  return queryResult.data as QueryData<typeof query>;
}

async function selectFromQuery<Q>(query: Q) {
  const queryResult = await (query as PostgrestFilterBuilder<
    GenericSchema,
    Record<string, unknown>,
    unknown
  >);

  if (queryResult.error) throw queryResult.error;

  return queryResult.data as QueryData<typeof query>;
}

select.fromQuery = selectFromQuery;

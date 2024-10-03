import { useCallback } from "react";

import { useSearchParams } from "next/navigation";

export function useQs() {
  const searchParams = useSearchParams();

  const getParams = useCallback(() => {
    return new URLSearchParams(searchParams.toString());
  }, [searchParams]);

  const get = useCallback(
    (key: string) => {
      const params = getParams();

      return params.get(key);
    },
    [getParams]
  );

  const update = useCallback(
    (queryObject: Record<string, unknown>) => {
      const params = getParams();
      Object.entries(queryObject).forEach(([key, value]) => {
        if (String(value).length === 0) {
          params.delete(key);
        }

        params.set(key, String(value));
      });

      return params.toString();
    },
    [getParams]
  );

  return {
    searchParams,
    get,
    update,
  };
}

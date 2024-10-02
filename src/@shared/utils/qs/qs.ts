import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQs() {
  const searchParams = useSearchParams();

  return {
    searchParams,
    qs: useCallback(
      (queryObject: Record<string, unknown>) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(queryObject).forEach(([key, value]) => {
          params.set(key, String(value));
        });

        return params.toString();
      },
      [searchParams]
    ),
  };
}

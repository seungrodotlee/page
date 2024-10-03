import { ChangeEvent, useCallback, useState } from "react";

export function useInput(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue ?? "");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return {
    value,
    onChange,
  };
}

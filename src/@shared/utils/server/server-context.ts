import 'server-only';
import { cache } from 'react';

export const serverContenxt = <T>(defaultValue?: T): { get: () => T, set: (v: T) => void } => {
  const getRef = cache(() => ({ current: defaultValue }));

  const get = <N extends boolean = false>(options?: { nullable?: N }): N extends true ? (T | undefined) : T  => {
    if(options?.nullable) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return getRef().current as any;
    }
    
    const value = getRef().current;

    if(!value) {
      throw Error("`serverContext.get` without nullable option must used after `serverContext.set` called.");
    }

    return value;
  };

  const set = (value: T) => {
    getRef().current = value;
  };

  return {
    get,
    set
  };
};
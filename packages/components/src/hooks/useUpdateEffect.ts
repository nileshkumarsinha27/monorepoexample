/**
 * @internal
 */
import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
/* eslint-disable */

export const useUpdateEffect = (effect: EffectCallback, dependencies: DependencyList) => {
  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

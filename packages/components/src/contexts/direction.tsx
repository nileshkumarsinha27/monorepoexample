import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState
} from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
// import { Plugin as StylisPlugin } from '@emotion/stylis';

// TODO: add cssjanus to package.json when enabling again
// import cssjanus from 'cssjanus';
import Directions from '../tokens/Directions';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

// import { Context } from '@emotion/stylis'; isn't available...
// const STYLIS_PROPS_CONTEXTS = 1;

// const stylisRTL: StylisPlugin = (context: number, content: string) => {
//   if (context === STYLIS_PROPS_CONTEXTS) {
//     return cssjanus.transform(content);
//   }
// };

export interface DirectionContextProps {
  isRTL: boolean;
  isLTR: boolean;
  direction: Directions;
  toggleDirection: () => void;
  setDirection: Dispatch<SetStateAction<Directions>>;
}

export const DirectionContext = createContext<DirectionContextProps>({
  isRTL: false,
  isLTR: true,
  direction: Directions.leftToRight,
  toggleDirection: () => null,
  setDirection: () => null
});

const RTLCache = createCache({
  key: 'rtl'
  // TODO: disabled for now, but emotion expects a different approach!
  // stylisPlugins: [stylisRTL],
});

const LTRCache = createCache({
  key: 'ltr'
});

const DirectionProvider: React.FC<{
  initialDirection?: Directions;
  forcedDirection?: Directions;
}> = ({ children, forcedDirection, initialDirection }) => {
  const [direction, setDirection] = useState<Directions>(
    forcedDirection || initialDirection || Directions.leftToRight
  );

  const { isRTL: parentIsRTL } = useDirection();

  useUpdateEffect(() => {
    if (forcedDirection) {
      setDirection(forcedDirection);
    }
  }, [forcedDirection]);

  const isRTL = direction === Directions.rightToLeft;
  const cache = isRTL ? RTLCache : parentIsRTL ? LTRCache : null;

  const handleToggle = useCallback(() => {
    setDirection((previousDirection) =>
      previousDirection === Directions.rightToLeft ? Directions.leftToRight : Directions.rightToLeft
    );
  }, []);

  const isLTR = !isRTL;

  const directionContext = (
    <DirectionContext.Provider
      value={{
        isRTL,
        isLTR,
        toggleDirection: handleToggle,
        direction,
        setDirection
      }}
    >
      {children}
    </DirectionContext.Provider>
  );

  if (cache) {
    return <CacheProvider value={cache}>{directionContext}</CacheProvider>;
  }

  return directionContext;
};

export default DirectionProvider;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDirection = () => {
  return useContext(DirectionContext);
};

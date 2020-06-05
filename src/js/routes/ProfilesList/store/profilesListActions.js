import { PROFILES_PLUS, PROFILES_MINUS } from 'Store/types';

export const plus = () => {
  return { type: PROFILES_PLUS };
};

export const minus = () => {
  return { type: PROFILES_MINUS };
};

import { PLUS, MINUS } from 'Store/types';

export const plus = () => {
  return { type: PLUS };
};

export const minus = () => {
  return { type: MINUS };
};

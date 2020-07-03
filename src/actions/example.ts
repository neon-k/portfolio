import { IAction } from '../types/store';
import * as types from '../constants/store/example';

export const addCount: (num: number) => IAction = (num: number) => {
  return {
    type: types.ADD_COUNT,
    payload: { num }
  };
};

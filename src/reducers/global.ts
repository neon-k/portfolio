import { IAction } from '../types/store';
import { IGlobal } from '../types/store/global';
import * as types from '../constants/store/global';

/**
 * State の初期値
 */
const initialState: IGlobal = {
  data: null
};

export default (state: IGlobal = initialState, action: IAction): any => {
  switch (action.type) {
    case types.SET_CONTNTFULL:
      return {
        ...state,
        data: action.payload.res
      };
      break;

    default:
      return state;
      break;
  }
};

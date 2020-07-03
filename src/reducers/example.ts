import { IAction } from '../types/store';
import { IExample } from '../types/store/example';
import * as types from '../constants/store/example';

/**
 * State の初期値
 */
const initialState: IExample = {
  count: 0
};

export default (state: IExample = initialState, action: IAction): any => {
  switch (action.type) {
    case types.ADD_COUNT:
      return {
        ...state,
        count: state.count + action.payload.num
      };
      break;

    default:
      return state;
      break;
  }
};

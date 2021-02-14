import { useReducer, Reducer, Dispatch } from 'react';

type TState = {
  isHeader: boolean;
  isKv: boolean;
  scroll: number;
};

export interface IAction {
  type: string;
  payload: Partial<TState>;
}

export const types = {
  SET_IS_HEADER: 'SET_IS_HEADER',
  SET_IS_KV: 'SET_IS_KV',
  SET_SCROLL: 'SET_SCROLL'
};

const initialState: TState = {
  isHeader: false,
  isKv: true,
  scroll: 0
};

export const useHook: () => {
  state: TState;
  dispatch: Dispatch<IAction>;
} = () => {
  const reducer: Reducer<TState, IAction> = (state: TState, action: IAction) => {
    switch (action.type) {
      case types.SET_IS_HEADER:
        return {
          ...state,
          isHeader: action.payload.isHeader
        };
        break;

      case types.SET_IS_KV:
        return {
          ...state,
          isKv: action.payload.isKv
        };
        break;

      case types.SET_SCROLL:
        return {
          ...state,
          scroll: action.payload.scroll
        };
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

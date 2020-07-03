import { combineReducers } from 'redux';

import ExampleReducer from './example';

import { IStore } from '../types/store';

const reducers = combineReducers<IStore>({
  example: ExampleReducer
});

export default reducers;

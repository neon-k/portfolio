import { IExample } from './example';
import { IGlobal } from './global';

export interface IAction {
  type: string;
  payload: { [key: string]: any };
}

export interface IStore {
  example: IExample;
  global: IGlobal;
}

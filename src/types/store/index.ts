import { IExample } from './example';

export interface IAction {
  type: string;
  payload: { [key: string]: any };
}

export interface IStore {
  example: IExample;
}

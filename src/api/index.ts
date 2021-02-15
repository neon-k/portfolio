import { AxiosResponse } from 'axios';
import { Repository } from './Repositorys';

export type TArray<T> = {
  contents: T;
  limit: number;
  offset: number;
  totalCount: number;
};

export type TImage = {
  height: number;
  width: number;
  url: string;
};

export type TWork = {
  id: string;
  title: string;
  image: TImage;
  type: string;
  description: string;
  skill: string;
  link?: string;
};

export type TAllData = {
  work: TArray<TWork[]>;
};

export default {
  workGet(): Promise<AxiosResponse<TArray<TWork[]>>> {
    return Repository.get('/works');
  }
};

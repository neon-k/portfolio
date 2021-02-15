import Repositorys, { TAllData } from '../index';

export const getAllData: () => Promise<TAllData> = async () => {
  const result: TAllData = {
    work: null
  };

  const getWork = async () => {
    const { data } = await Repositorys.workGet();

    result.work = data;
  };

  await Promise.all([getWork()]);

  return result;
};

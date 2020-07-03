import { Dispatch, AnyAction } from 'redux';
import { createClient } from 'contentful';

import { ACCESS_TOKEN, SPACE_ID } from '../constants/contentfull';
import * as types from '../constants/store/global';

export const setCmsData: () => (dispatch: Dispatch<AnyAction>) => void = () => async (
  dispatch: Dispatch
) => {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  const defaultType = {
    content_type: 'posts', // 投稿のtype
    order: '-fields.postDate' // 投稿が新しい順にソート
  };

  try {
    const res = await client.getEntries(defaultType);

    dispatch({
      type: types.SET_CONTNTFULL,
      payload: { res }
    });
  } catch (e) {
    console.error(e);
  }
};

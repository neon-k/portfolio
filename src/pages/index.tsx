import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCmsData } from '../actions/global';

import { IStore } from '../types/store';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  const sceneState = useSelector((state: IStore) => state.global.data);

  console.log(sceneState);

  const onClick = () => {
    dispatch(setCmsData());
  };

  return (
    <div className="container">
      <button onClick={onClick}>ddddddd</button>
    </div>
  );
}

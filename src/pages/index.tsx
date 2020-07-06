import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCmsData } from '../actions/global';

import { IStore } from '../types/store';

const Home: FC = (): ReactElement => {
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
};

export default Home;

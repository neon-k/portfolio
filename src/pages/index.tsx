import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../actions/example';

import { IStore } from '../types/store';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  const sceneState = useSelector((state: IStore) => state.example.count);

  const onClick = () => {
    dispatch(addCount(1));
  };

  return (
    <div className="container">
      <button onClick={onClick}>ddddddd</button>
      <p>{sceneState}</p>
    </div>
  );
}

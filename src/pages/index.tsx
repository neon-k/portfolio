import React, { FC, ReactElement } from 'react';
import { css } from '@emotion/react';

const hello = css`
  color: red;
`;

const Home: FC = (): ReactElement => {
  return (
    <div className="container">
      <button css={hello}>ddddddd</button>
    </div>
  );
};

export default Home;

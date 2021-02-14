import React, { FC, ReactElement, useState } from 'react';
import { css } from '@emotion/react';

import Contents from '~/components/contnets';
import Header from '~/components/header';

const Wrap = css`
  width: 100%;
  padding: 60px 10px;
`;

const Inner = css`
  max-width: 800px;
  margin: 0 auto;
`;

const Home: FC = (): ReactElement => {
  const [focusIndex, setFocusIndex] = useState<boolean>(false);

  return (
    <div css={Wrap}>
      <div css={Inner}>
        <div
          css={css`
            width: 100%;
            margin-bottom: 80px;

            &:last-child {
              margin-bottom: 0;
            }
          `}
        >
          <Header isOpen={true} />
          <Contents
            onClick={() => {
              setFocusIndex(!focusIndex);
            }}
            isFocus={focusIndex}
            data={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

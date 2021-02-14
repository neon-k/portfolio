import React, { FC, ReactElement, useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/react';

import { useHook, types } from '~/useHooks';

import Contents from '~/components/work';
import Header from '~/components/header';
import Kv from '~/components/kv';
import About from '~/components/about';

const Wrap = css`
  width: 100%;
  padding: 0 10px 40px;
`;

const Inner = css`
  max-width: 800px;
  margin: 0 auto;
`;

const Home: FC = (): ReactElement => {
  const [focusIndex, setFocusIndex] = useState<boolean>(false);

  const { state, dispatch } = useHook();

  const { isHeader, isKv, scroll } = state;

  const onScroll = useCallback(() => {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    dispatch({
      type: types.SET_SCROLL,
      payload: {
        scroll: top + window.innerHeight
      }
    });

    if (top <= 100) {
      dispatch({
        type: types.SET_IS_HEADER,
        payload: {
          isHeader: false
        }
      });

      dispatch({
        type: types.SET_IS_KV,
        payload: {
          isKv: true
        }
      });
    } else {
      dispatch({
        type: types.SET_IS_HEADER,
        payload: {
          isHeader: true
        }
      });

      dispatch({
        type: types.SET_IS_KV,
        payload: {
          isKv: false
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div css={Wrap}>
      <Header isOpen={isHeader} />
      <Kv isOpen={isKv} />
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
          <Contents
            onClick={() => {
              setFocusIndex(!focusIndex);
            }}
            isFocus={focusIndex}
            data={null}
          />
        </div>
        <About scroll={scroll} />
      </div>
    </div>
  );
};

export default Home;

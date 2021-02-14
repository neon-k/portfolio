import React, { FC, ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import { css } from '@emotion/react';

import { useHook, types } from '~/useHooks';

import { offsetTop } from '~/utils/offset';

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
  const [isTitle, setIsTitle] = useState<boolean>(false);

  const { state, dispatch } = useHook();

  const { isHeader, isKv, scroll } = state;

  const titleRef = useRef(null);

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
    onScroll();
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (offsetTop(titleRef.current) < scroll && !isTitle) {
      setIsTitle(true);
    }
  }, [scroll]);

  return (
    <div css={Wrap}>
      <Header isOpen={isHeader} />
      <Kv isOpen={isKv} />
      <div css={Inner}>
        <div
          css={css`
            padding-top: 40px;
          `}
        >
          <h2
            className={
              titleRef.current
                ? !isTitle
                  ? offsetTop(titleRef.current) < scroll
                    ? 'open'
                    : ''
                  : 'open'
                : ''
            }
            ref={titleRef}
            css={css`
              font-size: 40px;
              color: #73787b;
              margin-bottom: 40px;
              letter-spacing: 0.05em;
              font-weight: 200;
              font-style: italic;
              text-transform: uppercase;

              &.open {
                .text {
                  transform: translate3d(0, 0, 0);
                }
              }
            `}
          >
            <span
              css={css`
                display: inline-block;
                overflow: hidden;
              `}
            >
              <span
                className="text"
                css={css`
                  display: inline-block;
                  transform: translate3d(-100%, 0, 0);
                  transition: transform 0.4s ease-out;
                `}
              >
                w
              </span>
            </span>
            <span
              css={css`
                display: inline-block;
                overflow: hidden;
              `}
            >
              <span
                className="text"
                css={css`
                  display: inline-block;
                  transform: translate3d(-100%, 0, 0);
                  transition: transform 0.4s 0.05s ease-out;
                `}
              >
                o
              </span>
            </span>
            <span
              css={css`
                display: inline-block;
                overflow: hidden;
              `}
            >
              <span
                className="text"
                css={css`
                  display: inline-block;
                  transform: translate3d(-100%, 0, 0);
                  transition: transform 0.4s 0.1s ease-out;
                `}
              >
                r
              </span>
            </span>
            <span
              css={css`
                display: inline-block;
                overflow: hidden;
              `}
            >
              <span
                className="text"
                css={css`
                  display: inline-block;
                  transform: translate3d(-100%, 0, 0);
                  transition: transform 0.4s 0.15s ease-out;
                `}
              >
                k
              </span>
            </span>
          </h2>
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
        </div>
        <About scroll={scroll} />
      </div>
    </div>
  );
};

export default Home;

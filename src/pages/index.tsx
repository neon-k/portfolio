import React, { FC, ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { useHook, types } from '~/useHooks';

import { offsetTop } from '~/utils/offset';
import { gsapTo } from '~/utils/gsap';
import { smoothscroll } from '~/utils/smooth-scroll';
import { sleep } from '~/utils/sleep';

import Contents from '~/components/work';
import Header from '~/components/header';
import Kv from '~/components/kv';
import About from '~/components/about';
import Loader from '~/components/loader';

import { getAllData } from '~/api/connection';

import { largeScreenWidthLess } from '~/utils/media';
import { getVw } from '~/utils/size';
import { fontVw } from '~/utils/font';
import gsap from 'gsap';
import { TWork } from '~/api';

const Wrap = css`
  width: 100%;
  padding: 0 10px 40px;
`;

const Inner = css`
  max-width: 800px;
  margin: 0 auto;
`;

const Loading = css`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #1d1d1d;
  top: 0;
  left: 0;
  z-index: 99999;
`;

const LoadingInner = css`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Home: FC = (): ReactElement => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const [isTitle, setIsTitle] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(true);

  const { state, dispatch } = useHook();

  const { isHeader, isKv, scroll } = state;

  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const loadingRef = useRef(null);
  const loadingInnerRef = useRef(null);

  const onScroll = useCallback(() => {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    dispatch({
      type: types.SET_SCROLL,
      payload: {
        scroll: top + window.innerHeight
      }
    });
  }, []);

  // ファーストビュー
  useEffect(() => {
    if (loadingRef.current) {
      disableBodyScroll(loadingRef.current);
    }

    const init = async () => {
      await sleep(100);

      window.scrollTo(0, 0);

      const result = await getAllData();

      // データをセット
      dispatch({
        type: types.SET_DATA,
        payload: {
          data: result
        }
      });

      // ローディング解除
      setIsReady(true);

      // スクロールイベント発火
      onScroll();
      window.addEventListener('scroll', onScroll);
    };

    init();
  }, []);

  // ローディング解除のアニメーション
  useEffect(() => {
    if (loadingRef.current && isReady) {
      const func = async () => {
        await sleep(1000);

        await gsapTo(loadingInnerRef.current, {
          opacity: 0,
          duration: 1
        });

        await gsapTo(loadingRef.current, {
          scaleX: 0,
          delay: 0.4,
          transformOrigin: 'right',
          duration: 0.8,
          ease: 'expo.out'
        });

        gsap.set(loadingRef.current, {
          display: 'none'
        });

        clearAllBodyScrollLocks();
      };

      func();
    }
  }, [isReady]);

  // スクロールのイベント
  useEffect(() => {
    if (offsetTop(titleRef.current) < scroll && !isTitle) {
      setIsTitle(true);
    }

    if (scroll - window.innerHeight <= 100) {
      if (state.isHeader) {
        dispatch({
          type: types.SET_IS_HEADER,
          payload: {
            isHeader: false
          }
        });
      }

      if (!state.isKv) {
        dispatch({
          type: types.SET_IS_KV,
          payload: {
            isKv: true
          }
        });
      }
    } else {
      if (!state.isHeader) {
        dispatch({
          type: types.SET_IS_HEADER,
          payload: {
            isHeader: true
          }
        });
      }

      if (state.isKv) {
        dispatch({
          type: types.SET_IS_KV,
          payload: {
            isKv: false
          }
        });
      }
    }
  }, [state, scroll]);

  const onClickWork = () => {
    if (!workRef.current) {
      return;
    }

    smoothscroll(offsetTop(workRef.current), 0.6);
  };

  const onClickAbout = () => {
    if (!aboutRef.current) {
      return;
    }

    smoothscroll(offsetTop(aboutRef.current), 0.6);
  };

  const contnets = () => {
    if (!state.data) {
      return null;
    }

    const { work } = state.data;

    return work.contents.map((r: TWork, i: number) => {
      return (
        <div
          key={i}
          css={css`
            width: 100%;
            margin-bottom: 120px;

            &:last-child {
              margin-bottom: 0;
            }
          `}
        >
          <Contents
            onClick={() => {
              setFocusIndex(i !== focusIndex ? i : -1);
            }}
            scroll={scroll}
            isFocus={!!(focusIndex === i)}
            data={r}
          />
        </div>
      );
    });
  };

  return (
    <div css={Wrap}>
      <div css={Loading} ref={loadingRef}>
        <div css={LoadingInner} ref={loadingInnerRef}>
          <Loader />
        </div>
      </div>
      <Header isOpen={isHeader} onClickWork={onClickWork} onClickAbout={onClickAbout} />
      <Kv isOpen={isKv} />
      <div css={Inner}>
        <div
          ref={workRef}
          css={css`
            padding-top: 40px;
            margin-bottom: 60px;

            ${largeScreenWidthLess(css`
              padding-top: ${getVw(30)};
              margin-bottom: ${getVw(20)};
            `)}
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

              ${largeScreenWidthLess(css`
                ${fontVw(28)}

                margin-bottom: ${getVw(20)};
              `)}
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
                  transition: transform 0.4s 0.5s ease-out;
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
                  transition: transform 0.4s 0.55s ease-out;
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
                  transition: transform 0.4s 0.6s ease-out;
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
                  transition: transform 0.4s 0.65s ease-out;
                `}
              >
                k
              </span>
            </span>
          </h2>
          {contnets()}
        </div>
        <div ref={aboutRef}>
          <About scroll={scroll} />
        </div>
      </div>
    </div>
  );
};

export default Home;

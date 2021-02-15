import React, { FC, ReactElement, useRef, useEffect, useState } from 'react';
import { css } from '@emotion/react';

import gsap from 'gsap';

import { offsetTop } from '~/utils/offset';

import { TWork } from '~/api';

import { smoothscroll } from '~/utils/smooth-scroll';
import { largeScreenWidthLess, mediumScreenWidthOver } from '~/utils/media';
import { getVw } from '~/utils/size';
import { fontVw } from '~/utils/font';
import { nl2br } from '~/utils/nl2br';

// ==========================================
// Type
// ==========================================

type TProps = {
  onClick: () => void;
  data: TWork;
  isFocus: boolean;
  scroll: number;
};

// ==========================================
// View
// ==========================================

// このコンポーネントはpropsをもらう場合のコンポーネント

const Contents: FC<TProps> = ({ data, isFocus, scroll, onClick }: TProps): ReactElement => {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const contentsChildRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentsRef.current || !contentsChildRef.current || !wrapRef.current) {
      return;
    }

    if (isFocus) {
      gsap.to(contentsRef.current, {
        height: `${contentsChildRef.current.clientHeight}px`,
        duration: 0.4,
        ease: 'sine.out'
      });

      gsap.to(contentsRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'sine.out'
      });

      smoothscroll(offsetTop(wrapRef.current), 0.6);
    } else {
      gsap.to(contentsRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.4,
        ease: 'sine.out'
      });
    }
  }, [isFocus]);

  useEffect(() => {
    if (!wrapRef.current) {
      return;
    }

    if (offsetTop(wrapRef.current) < scroll && !isAnimation) {
      setIsAnimation(true);
    }
  }, [scroll]);

  return (
    <div
      ref={wrapRef}
      className={isAnimation ? 'open' : ''}
      css={css`
        width: 100%;
        position: relative;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.4s 0.4s ease-out;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          padding-top: 56.25%;
          background-color: #2e2e2e;
        }

        &.open {
          transform: scaleX(1);

          .image-wrap {
            opacity: 1;
          }
        }
      `}
    >
      {/* コンテンツ 見出し */}
      <div
        className={`image-wrap ${isFocus ? 'focus' : ''}`}
        onClick={onClick}
        css={css`
          width: 100%;
          position: relative;
          cursor: pointer;
          transition: opacity 0.4s 0.8s linear;
          opacity: 0;

          &::before {
            content: '';
            padding-top: 56.25%;
            display: block;
          }

          ${mediumScreenWidthOver(css`
            &:hover {
              .hover {
                opacity: 1;
              }
            }

            &.focus {
              .hover {
                opacity: 1;
              }
            }
          `)}
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          `}
          style={{ backgroundImage: `url(${data.image.url})` }}
        />
        <div
          className="hover"
          css={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 0;
            transition: opacity 0.2s linear;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              padding: 60px;

              ${largeScreenWidthLess(css`
                padding: ${getVw(60)};
              `)}
            `}
          >
            <h3
              css={css`
                font-size: 24px;
                letter-spacing: 0.01em;
                font-weight: 200;
                color: #fff;
                margin-bottom: 10px;
                font-style: italic;

                ${largeScreenWidthLess(css`
                  ${fontVw(24)};

                  margin-bottom: ${getVw(10)};
                `)}
              `}
            >
              {data.title}
            </h3>
            <p
              css={css`
                font-family: 'Benne', serif;
                font-size: 12px;
                letter-spacing: 0.01em;
                color: #fbff14;
                text-transform: uppercase;
                font-style: italic;

                ${largeScreenWidthLess(css`
                  ${fontVw(12)};
                `)}
              `}
            >
              {data.type}
            </p>
          </div>
        </div>
      </div>
      {/* コンテンツ 見出し ここまで */}

      {/* コンテンツ 内容 */}
      <div
        ref={contentsRef}
        css={css`
          height: 0;
          color: #73787b;
          opacity: 0;
          overflow: hidden;
        `}
      >
        <div
          ref={contentsChildRef}
          css={css`
            width: 100%;
            padding-top: 20px;

            ${largeScreenWidthLess(css`
              padding-top: ${getVw(20)};
            `)}
          `}
        >
          <div
            css={css`
              margin-bottom: 32px;

              &:last-child {
                margin-bottom: 0;
              }

              ${largeScreenWidthLess(css`
                margin-bottom: ${getVw(32)};
              `)}
            `}
          >
            <h3
              css={css`
                font-size: 18px;
                letter-spacing: 0.1em;
                margin-bottom: 12px;
                text-transform: uppercase;
                font-weight: 400;
                font-style: italic;

                ${largeScreenWidthLess(css`
                  ${fontVw(18)};

                  margin-bottom: ${getVw(12)};
                `)}
              `}
            >
              description
            </h3>

            <p
              css={css`
                font-size: 12px;
                letter-spacing: 0.1em;
                line-height: 1.4;
                text-transform: uppercase;
                font-weight: 200;

                ${largeScreenWidthLess(css`
                  ${fontVw(12)};
                `)}
              `}
            >
              {nl2br(data.description)}
            </p>
          </div>

          <div
            css={css`
              margin-bottom: 32px;

              &:last-child {
                margin-bottom: 0;
              }

              ${largeScreenWidthLess(css`
                margin-bottom: ${getVw(32)};
              `)}
            `}
          >
            <h3
              css={css`
                font-size: 18px;
                letter-spacing: 0.1em;
                margin-bottom: 12px;
                text-transform: uppercase;
                font-weight: 400;
                font-style: italic;

                ${largeScreenWidthLess(css`
                  ${fontVw(18)}

                  margin-bottom: ${getVw(12)};
                `)}
              `}
            >
              skills
            </h3>

            <p
              css={css`
                font-size: 12px;
                letter-spacing: 0.1em;
                font-weight: 400;
                line-height: 1.4;

                ${largeScreenWidthLess(css`
                  ${fontVw(12)}
                `)}
              `}
            >
              {data.skill}
            </p>
          </div>

          {data.link ? (
            <div
              css={css`
                margin-bottom: 32px;

                &:last-child {
                  margin-bottom: 0;
                }

                ${largeScreenWidthLess(css`
                  margin-bottom: ${getVw(32)};
                `)}
              `}
            >
              <h3
                css={css`
                  font-size: 18px;
                  letter-spacing: 0.1em;
                  margin-bottom: 12px;
                  text-transform: uppercase;
                  font-weight: 400;
                  font-style: italic;

                  ${largeScreenWidthLess(css`
                    ${fontVw(18)};

                    margin-bottom: ${getVw(12)};
                  `)}
                `}
              >
                link
              </h3>

              <a
                target="_blank"
                rel="noreferrer"
                css={css`
                  font-size: 12px;
                  letter-spacing: 0.1em;
                  font-weight: 400;
                  line-height: 1.4;
                  color: #73787b;

                  ${largeScreenWidthLess(css`
                    ${fontVw(12)}
                  `)}
                `}
                href="http://www.htmq.com/style/font-style.shtml"
              >
                http://www.htmq.com/style/font-style.shtml
              </a>
            </div>
          ) : null}
        </div>
      </div>
      {/* コンテンツ 内容 ここまで */}
    </div>
  );
};

export default Contents;

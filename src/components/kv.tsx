import React, { FC, ReactElement, Fragment } from 'react';
import { css, keyframes } from '@emotion/react';

import { largeScreenWidthLess } from '~/utils/media';
import { getVw } from '~/utils/size';
import { fontVw } from '~/utils/font';

// ==========================================
// Type
// ==========================================

type TProps = {
  isOpen: boolean;
};

// ==========================================
// View
// ==========================================

const Kv: FC<TProps> = ({ isOpen }: TProps): ReactElement => {
  const guide = keyframes`
    0% {
      transform: scaleY(1);
        transform-origin: bottom;
    }
    50% {
      transform: scaleY(0);
        transform-origin: bottom;
    }
    51% {
      transform: scaleY(0);
        transform-origin: top;
    }
    100% {
      transform: scaleY(1);
        transform-origin: top;
    }
`;

  return (
    <Fragment>
      <div
        css={css`
          width: 100%;
          height: 100vh;
          margin-bottom: 180px;

          ${largeScreenWidthLess(css`
            margin-bottom: ${getVw(40)};
          `)}
        `}
      />
      <div
        className={isOpen ? 'open' : ''}
        css={css`
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.2s linear;

          &.open {
            opacity: 1;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: relative;
          `}
        >
          <div
            css={css`
              width: 100%;
              position: absolute;
              top: 50%;
              left: 50%;
              color: #73787b;
              font-weight: 200;
              transform: translate(-50%, -50%);
            `}
          >
            <h1
              className={isOpen ? 'open' : ''}
              css={css`
                font-size: 40px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #73787b;
                font-weight: 200;
                margin-bottom: 10px;
                text-align: center;
                transform: translate3d(0, -40px, 0);
                transition: transform 0.4s ease;

                &.open {
                  transform: translate3d(0, 0, 0);
                  transition: transform 0.6s ease;
                }

                ${largeScreenWidthLess(css`
                  ${fontVw(30)};

                  margin-bottom: ${getVw(10)};
                `)}
              `}
            >
              kota ichikawa
            </h1>
            <p
              className={isOpen ? 'open' : ''}
              css={css`
                font-size: 20px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #73787b;
                font-weight: 200;
                text-align: center;
                transform: translate3d(0, -40px, 0);
                transition: transform 0.4s ease;

                &.open {
                  transform: translate3d(0, 0, 0);
                  transition: transform 0.6s ease;
                }

                ${largeScreenWidthLess(css`
                  ${fontVw(18)};
                `)}
              `}
            >
              web engineer
            </p>
          </div>

          <div
            className={isOpen ? 'open' : ''}
            css={css`
              position: absolute;
              bottom: 0;
              left: 50%;
              color: #73787b;
              font-weight: 200;
              transform: translate3d(-50%, 20px, 0);
              transition: transform 0.4s ease;

              &.open {
                opacity: 1;
                transform: translate3d(-50%, 0, 0);
              }
            `}
          >
            <p
              css={css`
                font-size: 10px;
                letter-spacing: 0.2em;
                color: #73787b;
                font-weight: 200;
                text-align: center;
                margin-bottom: 10px;

                ${largeScreenWidthLess(css`
                  ${fontVw(10)};

                  margin-bottom: ${getVw(10)};
                `)}
              `}
            >
              Scroll Down
            </p>
            <div
              css={css`
                width: 1px;
                display: block;
                height: 40px;
                margin: 0 auto;
                background-color: rgba(115, 120, 123, 0.2);
                text-align: center;
                overflow: hidden;
                position: relative;

                ${largeScreenWidthLess(css`
                  height: ${getVw(40)};
                `)}
              `}
            >
              <span
                css={css`
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  transform: scaleY(1);
                  transform-origin: bottom;
                  background-color: rgb(115, 120, 123);
                  z-index: 1;
                  animation: ${guide} 1s linear infinite;
                `}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Kv;

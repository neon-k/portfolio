import React, { FC, ReactElement, Fragment } from 'react';
import { css, keyframes } from '@emotion/react';

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
              position: absolute;
              top: 50%;
              left: 50%;
              color: #73787b;
              font-weight: 200;
              transform: translate(-50%, -50%);
            `}
          >
            <h1
              css={css`
                font-size: 40px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #73787b;
                font-weight: 200;
                margin-bottom: 10px;
                text-align: center;
              `}
            >
              kota ichikawa
            </h1>
            <p
              css={css`
                font-size: 20px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #73787b;
                font-weight: 200;
                text-align: center;
              `}
            >
              web engineer
            </p>
          </div>

          <div
            css={css`
              position: absolute;
              bottom: 0;
              left: 50%;
              color: #73787b;
              font-weight: 200;
              transform: translateX(-50%);
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

import React, { FC, ReactElement } from 'react';
import { css, keyframes } from '@emotion/react';

// ==========================================
// Type
// ==========================================

// ==========================================
// Style
// ==========================================

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrap = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const loader = css`
  border-radius: 50%;
  width: 10em;
  height: 10em;

  margin: 0 auto 10px;
  font-size: 4px;
  position: relative;
  border-top: 0.6em solid rgba(255, 255, 255, 0.2);
  border-right: 0.6em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.6em solid rgba(255, 255, 255, 0.2);
  border-left: 0.6em solid #fff;
  transform: translateZ(0);
  animation: ${load8} 1.1s infinite linear;

  &::before {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

const LoaderText = css`
  font-size: 12px;
  color: #fff;
  letter-spacing: 0.3em;
  text-align: center;
  margin-right: -0.4em;
`;

// ==========================================
// View
// ==========================================

const Loader: FC = (): ReactElement => {
  return (
    <div css={LoaderWrap}>
      <div css={loader} />
      <p css={LoaderText}>Loading</p>
    </div>
  );
};

export default Loader;

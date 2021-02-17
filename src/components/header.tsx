import React, { FC, ReactElement } from 'react';
import { css } from '@emotion/react';
import { HEADER_ZINDEX } from '~/constants/style';

import { largeScreenWidthLess } from '~/utils/media';

// ==========================================
// Type
// ==========================================

type TProps = {
  isOpen: boolean;
  onClickWork: () => void;
  onClickAbout: () => void;
};

// ==========================================
// View
// ==========================================

const list = css`
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 200;
  line-height: 1;
  color: #73787b;
  margin-right: 40px;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -1px;
    left: 0;
    background-color: #73787b;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.2s linear;
  }

  &:hover {
    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

const Header: FC<TProps> = ({ isOpen, onClickAbout, onClickWork }: TProps): ReactElement => {
  return (
    <header
      className={isOpen ? 'open' : ''}
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s linear;
        z-index: ${HEADER_ZINDEX};

        &.open {
          opacity: 1;
          pointer-events: auto;
        }

        ${largeScreenWidthLess(css`
          display: none;
        `)}
      `}
    >
      <div
        css={css`
          width: 100%;
          display: inline-flex;
          padding: 80px 60px;
          justify-content: flex-end;
        `}
      >
        <ul
          css={css`
            display: inline-flex;
          `}
        >
          <li css={list} onClick={() => onClickWork()}>
            work
          </li>
          <li css={list} onClick={() => onClickAbout()}>
            about
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

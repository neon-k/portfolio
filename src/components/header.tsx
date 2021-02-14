import React, { FC, ReactElement } from 'react';
import { css } from '@emotion/react';
import { HEADER_ZINDEX } from '~/constants/style';

// ==========================================
// Type
// ==========================================

type TProps = {
  isOpen: boolean;
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

const Header: FC<TProps> = ({ isOpen }: TProps): ReactElement => {
  return (
    <header
      className={isOpen ? 'open' : ''}
      css={css`
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.2 linear;
        z-index: ${HEADER_ZINDEX};

        &.open {
          opacity: 1;
          pointer-events: auto;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          display: flex;
          padding: 80px 60px;
          justify-content: flex-end;
        `}
      >
        <ul
          css={css`
            display: flex;
          `}
        >
          <li css={list}>contents</li>
          <li css={list}>about</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import { generateMedia } from 'emotion-media-query';

import { css, SerializedStyles } from '@emotion/react';

import {
  X_LARGE_SCREEN_WIDTH,
  LARGE_SCREEN_WIDTH,
  MEDIUM_SCREEN_WIDTH,
  SMALL_SCREEN_WIDTH
} from '~/constants/style';

export const media = generateMedia({
  sm: `${SMALL_SCREEN_WIDTH}px`,
  md: `${MEDIUM_SCREEN_WIDTH}px`,
  lg: `${LARGE_SCREEN_WIDTH}px`,
  xl: `${X_LARGE_SCREEN_WIDTH}px`
});

export const xLargeScreenWidthOver: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (max-width: ${X_LARGE_SCREEN_WIDTH + 1 + 'px'}) {
      ${args}
    }
  `;
};

export const xLargeScreenWidth: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (min-width: ${LARGE_SCREEN_WIDTH + 'px'}) and (max-width: ${X_LARGE_SCREEN_WIDTH +
      'px'}) {
      ${args}
    }
  `;
};

export const xLargeScreenWidthLess: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (max-width: ${LARGE_SCREEN_WIDTH - 1 + 'px'}) {
      ${args}
    }
  `;
};

export const largeScreenWidthOver: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (min-width: ${LARGE_SCREEN_WIDTH + 1 + 'px'}) {
      ${args}
    }
  `;
};

export const largeScreenWidth: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (min-width: ${MEDIUM_SCREEN_WIDTH + 'px'}) and (max-width: ${LARGE_SCREEN_WIDTH +
      'px'}) {
      ${args}
    }
  `;
};

export const largeScreenWidthLess: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (max-width: ${MEDIUM_SCREEN_WIDTH - 1 + 'px'}) {
      ${args}
    }
  `;
};

export const mediumScreenWidthOver: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (min-width: ${MEDIUM_SCREEN_WIDTH + 1 + 'px'}) {
      ${args}
    }
  `;
};

export const mediumScreenWidth: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (min-width: ${SMALL_SCREEN_WIDTH + 'px'}) and (max-width: ${MEDIUM_SCREEN_WIDTH +
      'px'}) {
      ${args}
    }
  `;
};

export const mediumScreenWidthLess: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (max-width: ${SMALL_SCREEN_WIDTH - 1 + 'px'}) {
      ${args}
    }
  `;
};

export const smallScreenWidthOver: (args: SerializedStyles) => SerializedStyles = (args) => {
  return css`
    @media (min-width: ${SMALL_SCREEN_WIDTH + 'px'}) {
      ${args}
    }
  `;
};

export const md: (args: SerializedStyles) => SerializedStyles = (...args) => {
  return css`
    @media (max-width: ${MEDIUM_SCREEN_WIDTH + 'px'}) {
      ${args}
    }
  `;
};

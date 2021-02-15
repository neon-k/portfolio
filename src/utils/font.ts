import { css, SerializedStyles } from '@emotion/react';

export const getRem: (size: number) => string = (size: number): string => {
  return `${size / 10}rem`;
};

export const fontVw: (size: number, viewPort?: number) => SerializedStyles = (
  size: number,
  viewPort?: number
): SerializedStyles => {
  console.log(viewPort);

  const v = viewPort ? viewPort : 375;

  return css`
    font-size: ${size}px;
    font-size: ${(size / v) * 100}vw;
  `;
};

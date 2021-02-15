export const getVw: (size: number, viewPort?: number) => string = (
  size: number,
  viewPort?: number
): string => {
  return `${(size / (viewPort ? viewPort : 375)) * 100}vw`;
};

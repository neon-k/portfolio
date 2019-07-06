import { TweenLite, Expo } from 'gsap';
import { isNumber } from './get-type-of';

/**
 * スムーススクロールでy座標まで
 * @param {number} y 移動する高さ
 */
const smoothscroll = (y = 0) => {
  if (!isNumber(y)) {
    return;
  }

  const HTML = document.getElementsByTagName('html')[0];
  const BODY = document.getElementsByTagName('body')[0];

  TweenLite.to([HTML, BODY], 0.6, {
    scrollTop: y,
    ease: Expo.easeInOut
  });
};

export default smoothscroll;

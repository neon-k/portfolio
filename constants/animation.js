import { TweenLite } from 'gsap';

// コールバックのデフォルトの関数
const defaultFunc = () => null;

// ローディング時に使うアニメーションを格納
export const loading = {
  leave: (el, done, complete = defaultFunc) => {
    TweenLite.to(el, 1, {
      opacity: 0,
      delay: 1,
      ease: Power2.easeOut,
      onComplete: () => {
        done();
        complete();
      }
    });
  }
};

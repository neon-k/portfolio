import { TweenMax } from 'gsap';

const defaultFunc = () => console.log('cale back'); // コールバックのデフォルトの関数

// ローディング時に使うアニメーションを格納
export const loading = {
  leave: (el, done, complete = defaultFunc()) => {
    TweenMax.to(el, 1, {
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: () => {
        done;
        complete;
      }
    });
  }
};

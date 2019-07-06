/**
 * debounce
 * @param {Function} func - 実行したい関数
 * @param {number} delay - 遅延させる時間
 * @returns {Function}
 */

let timer = -1;

const debounce = (func, delay = 100) => {
  if (delay <= 0) {
    return func();
  }

  if (timer) {
    window.clearTimeout(timer);
  }
  timer = window.setTimeout(func, delay);
};

export default debounce;

/**
 * 获取offsetTop
 * @param {*} el
 * @returns
 */
export function getOffsetTop(el) {
  let offsetTop = el.offsetTop;
  let offsetParent = el;
  while (offsetParent.offsetParent) {
    offsetParent = offsetParent.offsetParent;
    offsetTop += offsetParent.offsetTop;
  }
  return offsetTop;
}

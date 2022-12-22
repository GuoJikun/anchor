/**
 * 获取offsetTop
 * @param {*} el
 * @returns
 */
export function getOffsetTop(el) {
  let nodeName = el.nodeName.toLowerCase();
  let offsetTop = el.offsetTop;
  let offsetParent = el;
  while (nodeName !== "body") {
    console.log(nodeName, "nodeName");
    offsetParent = offsetParent.offsetParent;
    nodeName = offsetParent.nodeName.toLowerCase();
    offsetTop += offsetParent.offsetTop;
  }
  return offsetTop;
}

import utils from "./utils";

const generator = (type, ...args) => utils.generator("tabs", type, ...args);

/**
 * 获取当前活动的标签
 */
export const getCurrent = () => generator("getCurrent");

/**
 *
 * @param {Object} selector 查找的指定属性
 * @param {boolean} selector.active 标签页在窗口中是否为活动标签页
 * @param {boolean} selector.pinned 标签页是否固定。
 * @param {boolean} selector.highlighted 标签页是否高亮突出。
 * @param {boolean} selector.currentWindow 标签页是否在当前窗口中。
 * @param {boolean} selector.lastFocusedWindow 标签页是否在前一个具有焦点的窗口中。
 * @param {enum} selector.status 标签页是否已经加载完成。 'loading' or 'complete'
 * @param {string} selector.title 匹配页面标题的表达式。
 * @param {string} selector.url 匹配标签页的 URL 表达式。注意：片段标识符不会匹配。
 * @param {number} selector.windowId 父窗口标识符，或者为 windows.WINDOW_ID_CURRENT，表示当前窗口。
 * @param {enum} selector.windowType 标签页所在窗口的类型。 "normal", "popup", "panel", or "app"
 * @param {number} selector.index 标签页在窗口中的位置。
 */
export const query = selector => generator("query", selector);

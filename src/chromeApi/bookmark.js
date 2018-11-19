import utils from "./utils";

const generator = (type, ...args) =>
  utils.generator("bookmarks", type, ...args);

/**
 * 搜索书签树节点，找出匹配的结果。如果以对象方式指定查询，得到的 BookmarkTreeNodes 匹配所有指定的属性。
 * @param {string | object} query - 可以指定字符串，包含单词和加上引号的短语，用于匹配书签 URL 和标题。也可以指定对象，其中可以指定 query、url 和 title 属性，返回匹配所有指定属性的书签。
 */
export const search = query => generator("search", query);

/**
 * 获得指定的书签树节点。
 * @param {string | string[]} ids - 一个字符串或多个字符串组成的数组，指定节点的标识符。
 */
export const get = ids => generator("get", ids);

/**
 * 获取指定书签树节点的所有子节点
 *
 * @param {string} id - 指定书签节点的id
 */
export const getChildren = id => generator("getChildren", id);

/**
 * 获取整个书签树
 */
export const getTree = () => generator("getTree");

/**
 * 在指定的上一级文件夹下创建新的书签或文件夹。如果 url 为 null 或者省略，则创建文件夹。
 * @param {object} bookmark
 * @param {string} bookmark.parentId 默认为‘其他书签’ 指定的根目录
 * @param {number} bookmark.index
 * @param {string} bookmark.title
 * @param {string} bookmark.url
 */
export const create = bookmark => generator("create", bookmark);

/**
 * 将指定的书签树节点移到指定位置
 * @param {string} from 指定书签的id
 * @param {Object} to 目的地
 * @param {string} to.parentId 目标文件夹id
 * @param {number} to.index
 */
export const move = (from, to) => generator("move", from, to);

/**
 * 更新书签或文件夹的属性。只需要指定您需要更改的属性，未指定的属性不会更改。注意：目前只支持“title”和“url”属性。
 * @param {string} id 要更新的书签或文件夹id
 * @param {object} changes 要更新的内容
 * @param {string} changes.title
 * @param {string} changes.url
 */
export const update = (id, changes) => generator("update", id, changes);

/**
 * 删除书签或者空文件夹。
 * @param {string} id 要删除的书签或文件夹id
 */
export const remove = id => generator("remove", id);

/**
 * 删除整个书签。
 */
export const removeTree = () => generator("removeTree");

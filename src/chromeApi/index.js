import * as bookmark from "./bookmark";
import * as connect from "./connect";
import * as tabs from "./tabs";

export const tabsApi = tabs;
export const msgApi = connect;
export const bookmarkApi = bookmark;
export default {
  bookmarkApi: bookmark,
  msgApi: connect,
  tabsApi: tabs,
};

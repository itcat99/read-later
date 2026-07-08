> ⚠️ 本文件由 /loop-adopt 自动生成。请审阅并调整模块划分、功能点和验收标准。
> 确认无误后删除本提示行。

# GOAL — Read Later

## 项目概述
Chrome 扩展，用于保存链接供稍后阅读。以 Chrome Bookmark API 为存储后端，React + Redux + Redux-Saga 架构的 popup 面板。

技术栈: React 16.5, Redux 4, Redux-Saga 0.16, styled-components 3.4, Webpack 4, Babel 7

---

## M1: 书签管理（Posts CRUD）

核心模块：通过 Chrome Bookmark API 管理"稍后阅读"链接的增删查清。

- [x] **F1.1 添加链接** — 通过右键菜单"read later"或快捷键 `Ctrl+Shift+L` 将当前标签页保存为书签
  - 验收标准: 右键菜单出现"read later"选项，点击后当前页面添加到书签文件夹；快捷键可触发相同行为
  - 验收标准: 重复 URL 不重复添加，弹出"you has the same post."通知
  - 验收标准: 添加成功后弹出"add a read later post."通知

- [x] **F1.2 查看链接列表** — popup 面板展示所有已保存的链接（标题 + favicon + URL）
  - 验收标准: 打开 popup 后自动加载书签列表，每项显示网站图标、标题（可点击跳转）
  - 验收标准: 空列表时显示 Empty 占位提示
  - 验收标准: Badge 数字正确显示当前已保存链接数量（超过 99 显示 +99）

- [x] **F1.3 删除单个链接** — 点击链接项的删除按钮移除
  - 验收标准: 点击删除按钮后链接从列表中消失，Badge 数字减 1
  - 验收标准: 弹出"remove post."通知

- [x] **F1.4 清空全部链接** — 点击 Clear 按钮弹出确认弹窗，确认后清空所有链接
  - 验收标准: 点击 Clear → 弹出 Mask 确认框（"Are you sure?"）
  - 验收标准: 点击 Sure 清空全部，点击 Cancel 取消操作
  - 验收标准: 清空后列表为空，Badge 归零

- [x] **F1.5 搜索/过滤链接** — 在搜索框输入关键词实时过滤列表
  - 验收标准: 输入关键词后列表只显示标题匹配的项（不区分大小写）
  - 验收标准: 清空搜索框恢复全部列表
  - 验收标准: 搜索有 300ms 防抖

---

## M2: 设置面板（Settings）

配置扩展的运行参数，包括书签文件夹名称、favicon API、图片超时等。

- [x] **F2.1 打开/关闭设置面板** — 点击 Header 中的齿轮图标切换设置面板
  - 验收标准: 点击齿轮图标打开 Settings 面板（从侧边滑入）
  - 验收标准: 面板显示所有可配置项及当前值

- [x] **F2.2 修改并保存设置** — 编辑配置项并保存
  - 验收标准: 修改任意字段后点击 Save，设置生效并关闭面板
  - 验收标准: 书签文件夹名称随 title 配置同步更新

- [x] **F2.3 重置为默认设置** — 点击 Reset 恢复出厂配置
  - 验收标准: 点击 Reset 后所有字段恢复为 config.js 中的默认值

- [x] **F2.4 取消修改** — 点击 Cancel 放弃修改并关闭面板
  - 验收标准: 修改字段后点击 Cancel，面板关闭且修改不生效

---

## M3: Popup 面板 UI（视图层）

React 组件树构成的 popup 窗口界面。

- [x] **F3.1 Header 区域** — 显示扩展名称、版本号、设置入口、外部链接、搜索框
  - 验收标准: 显示"Read Later"标题 + 版本号（从 manifest 读取）
  - 验收标准: GitHub 和 Email 图标可点击跳转
  - 验收标准: 设置齿轮图标存在且可点击

- [x] **F3.2 Main 区域** — 链接列表或空状态展示
  - 验收标准: 有数据时渲染 Post 列表，无数据时渲染 Empty 组件
  - 验收标准: 每个 Post 项包含 favicon 图片（带超时兜底）、可点击标题链接、删除按钮

- [x] **F3.3 Footer 区域** — Clear 和 Download 操作入口
  - 验收标准: Clear 按钮触发确认 Mask
  - 验收标准: Download 按钮存在（功能待完善）

- [x] **F3.4 Mask 确认弹窗** — 清空操作前的二次确认
  - 验收标准: 通过 Redux mask 状态控制显隐
  - 验收标准: Sure 执行清空，Cancel 关闭弹窗

---

## M4: 后台服务（Background Script）

Chrome Extension 的 background script，负责书签的实际 CRUD 操作和消息路由。

- [x] **F4.1 书签文件夹初始化** — 首次运行时创建 `__read_later__` 书签文件夹
  - 验收标准: 首次安装后自动创建命名文件夹
  - 验收标准: 如果存在多个同名文件夹，自动合并

- [x] **F4.2 消息路由** — 监听 popup 发来的消息并执行对应操作
  - 验收标准: 支持 REMOVE_POST / CLEAR / GET_POSTS / GET_SETTINGS / UPDATE_SETTINGS / RESET_SETTINGS 六种消息类型
  - 验收标准: 操作完成后通过 sendMsg 返回结果

- [x] **F4.3 Badge 更新** — 同步更新扩展图标的 Badge 数字
  - 验收标准: 添加/删除/清空后 Badge 实时更新
  - 验收标准: Badge 背景色为 #4779ED

- [x] **F4.4 右键菜单注册** — 创建 Chrome Context Menu
  - 验收标准: 在任意页面右键出现"read later"选项
  - 验收标准: 点击后调用 addPost 流程

- [x] **F4.5 快捷键支持** — 通过 Chrome Commands API 注册快捷键
  - 验收标准: `Ctrl+Shift+L` 触发添加当前页面

---

## M5: 数据流层（Redux + Saga）

Redux 状态管理 + Redux-Saga 副作用处理。

- [x] **F5.1 Posts State** — 管理链接列表的 Redux 状态
  - 验收标准: UPDATE_POSTS 更新列表，REMOVE_POST 移除单项并通知 background，SEARCH 过滤显隐，CLEAR 清空
  - 验收标准: State 结构为 `[{id, title, url, show, ...}]`

- [x] **F5.2 Settings State** — 管理设置面板的 Redux 状态
  - 验收标准: UPDATE_SETTINGS_PANEL 控制面板开/关，UPDATE_SETTINGS 更新配置并通知 background

- [x] **F5.3 Mask State** — 管理确认弹窗的显隐
  - 验收标准: update_mask action 控制 mask 布尔值

- [x] **F5.4 Saga 副作用** — 异步获取 posts 和 settings
  - 验收标准: GET_POSTS saga 监听 action → 发送消息给 background → 等待 RETURN_POSTS → dispatch UPDATE_POSTS
  - 验收标准: GET_SETTINGS saga 监听 action → 发送消息给 background → 等待 RETURN_SETTINGS → dispatch UPDATE_SETTINGS

---

## M6: 待实现功能（来自 README TODO）

从 README.md 的 ToDoList 中提取的未完成项。

- [ ] **F6.1 键盘快捷键增强** — README 标记为未完成的 keyboard support
  - 验收标准: 在 popup 内支持键盘导航（方向键选择链接，Enter 打开，Delete 删除）

- [ ] **F6.2 Tag 标签功能** — 为链接添加自定义标签
  - 验收标准: 可为每个链接添加/编辑标签，按标签筛选链接

- [ ] **F6.3 Star 收藏功能** — 为链接添加星标
  - 验收标准: 可为链接添加/取消星标，支持按星标筛选

---

## M7: 构建与工程化

项目构建、代码质量工具链。

- [x] **F7.1 Webpack 构建** — 开发/生产环境打包
  - 验收标准: `yarn dev` 启动 watch 模式开发构建
  - 验收标准: `yarn build` 输出压缩后的生产包到 dist/assets/
  - 验收标准: 入口为 pop.js + background.js，vendor chunk 独立提取

- [x] **F7.2 ESLint 代码规范** — Prettier + ESLint 格式化
  - 验收标准: `yarn format:js` 自动修复代码风格问题
  - 验收标准: precommit hook 通过 lint-staged + husky 自动检查

- [ ] **F7.3 测试覆盖** — 当前项目无测试目录
  - 验收标准: 至少覆盖 posts reducer 的核心逻辑（ADD/REMOVE/SEARCH/CLEAR）
  - 验收标准: 至少覆盖 background.js 中 createMark/removeMark/clear 方法

---

## 技术约束

- 运行环境: Chrome Extension (Manifest V2)
- 存储: Chrome Bookmark API（非 chrome.storage）
- 状态管理: Redux + Redux-Saga（单向数据流）
- 样式方案: styled-components（CSS-in-JS）
- 通信: popup ↔ background 通过 `chrome.runtime.sendMessage`
- 构建: Webpack 4 + Babel 7
- 代码规范: ESLint + Prettier（precommit hook）

---

## M8: WXT + MV3 框架迁移

将项目从 Webpack 4 + MV2 + JavaScript + React Class Component 架构，整体迁移到 WXT + Manifest V3 + TypeScript + React Hooks 的现代技术栈。这是一个跨模块的架构级重构，完成后替换 M1-M7 的技术实现方式，但保留所有已有功能。

### 阶段 1：基础设施搭建

- [x] **F8.1 WXT 项目初始化** — 在现有项目中集成 WXT 框架，保持代码共存
  - 验收标准: `wxt` 安装为 devDependency，`wxt.config.ts` 配置 srcDir 指向新源码目录
  - 验收标准: `bun dev` 能启动 WXT dev mode（HMR + 自动打开浏览器加载扩展）
  - 验收标准: `bun run build` 能通过 WXT 构建产出可用的 Chrome 扩展包
  - 验收标准: TypeScript 配置正确（tsconfig.json extends `.wxt/tsconfig.json`）
  - 验收标准: `postinstall` 脚本包含 `wxt prepare`

- [x] **F8.2 Manifest V3 配置迁移** — 将 dist/manifest.json 的 MV2 配置转为 MV3
  - 验收标准: `manifest_version` 从 2 升级到 3
  - 验收标准: `background.scripts` → `background.service_worker`（WXT 自动处理）
  - 验收标准: `browser_action` → `action` API
  - 验收标准: 权限声明（`permissions`、`host_permissions`）与原 manifest 一致
  - 验收标准: Content Security Policy 适配 MV3 格式
  - 验收标准: Webpack 构建的 `dist/manifest.json` 与 WXT 构建的 `.output/*/manifest.json` 权限无差异

- [x] **F8.3 入口点迁移** — 将现有 entry 文件适配为 WXT entrypoints 格式
  - 验收标准: `src/background.js` → `entrypoints/background.ts`，使用 `defineBackground()` 包裹
  - 验收标准: `src/pop.js` + `src/app.jsx` → `entrypoints/popup/` (HTML + main.tsx)
  - 验收标准: 使用 `browser` 全局替代 `chrome` API 调用（WXT 提供的 webextension-polyfill）
  - 验收标准: Chrome Bookmark API 的 callback 模式改为 Promise/async-await 模式

### 阶段 2：UI 层迁移

- [ ] **F8.4 React 组件迁移** — Class Component → Function Component + Hooks
  - 验收标准: 所有容器组件（Header/Main/Footer/Mask/Settings）改为函数组件 + hooks
  - 验收标准: 所有展示组件（Post/Clear/Search/SettingsItem/Empty/Download）改为函数组件 + hooks
  - 验收标准: `connect(mapStateToProps, mapDispatchToProps)` → `useSelector` + `useDispatch` hooks
  - 验收标准: `PureComponent` → `React.memo` 保持渲染优化
  - 验收标准: UI 行为与迁移前完全一致（打开 popup、搜索、清空、设置面板交互）

- [ ] **F8.5 styled-components 升级** — 更新样式方案
  - 验收标准: styled-components 升级到最新版本（兼容 React 18+）
  - 验收标准: 所有 styled.js 文件正常工作，popup 视觉与迁移前一致
  - 验收标准: `.innerRef` deprecated API → `ref`（React 16 → 18+ 变更）

### 阶段 3：数据流层迁移

- [ ] **F8.6 Redux + Saga → Zustand 状态管理迁移** — 用 Zustand 替代 Redux + Redux-Saga
  - 验收标准: 安装 `zustand`，创建 `stores/postsStore.ts`、`stores/settingsStore.ts`、`stores/maskStore.ts`
  - 验收标准: posts/settings/mask 三个 state 的行为与迁移前完全一致
  - 验收标准: Saga 的副作用逻辑（GET_POSTS/GET_SETTINGS 的 sendMessage + 等待响应）在 Zustand store 中以 async actions 实现
  - 验收标准: Chrome Runtime Message 通信模式保留（popup ↔ service worker），消息类型常量不变
  - 验收标准: 删除 `redux`、`react-redux`、`redux-saga` 依赖；删除 `src/actions/`、`src/reducers/`、`src/sagas/`、`src/store.js`

- [ ] **F8.7 TypeScript 类型覆盖** — 为核心模块添加类型定义
  - 验收标准: Action types 有完整的 TypeScript 类型（union type 替代 constents.js 字符串常量）
  - 验收标准: Post、Settings、Config 等核心数据结构有 interface/type 定义
  - 验收标准: Reducer 函数有完整的参数和返回值类型
  - 验收标准: Background message handler 的 type/payload 有类型约束

### 阶段 4：构建与质量

- [ ] **F8.8 构建工具链替换** — 移除旧构建系统，WXT 成为唯一构建工具
  - 验收标准: 删除 `webpack.dev.js`、`webpack.prod.js`、`.babelrc`
  - 验收标准: 删除旧 `dist/` 目录（WXT 输出到 `.output/` 或配置 outDir 为 `dist/`）
  - 验收标准: `yarn dev` 使用 WXT dev mode（比 Webpack watch 快）
  - 验收标准: `yarn build` 使用 WXT build，产出可发布的 zip
  - 验收标准: Bundle analyzer 通过 WXT 的 `wxt build --analyze` 可用

- [ ] **F8.9 代码质量与 CI** — 更新 Lint/Format 工具链
  - 验收标准: ESLint 配置支持 TypeScript（@typescript-eslint）
  - 验收标准: Prettier 配置支持 `.ts`/`.tsx` 文件
  - 验收标准: `yarn format:js`（或等效命令）能检查新代码
  - 验收标准: precommit hook 更新为检查 `.ts`/`.tsx` 文件

- [ ] **F8.10 全功能回归验证** — 确认所有 M1-M6 功能在迁移后正常
  - 验收标准: M1-F1.1~F1.5 书签 CRUD 全部通过（添加/查看/删除/清空/搜索）
  - 验收标准: M2-F2.1~F2.4 设置面板全部通过（打开/保存/重置/取消）
  - 验收标准: M3 UI 组件全部正常渲染（Header/Main/Footer/Mask）
  - 验收标准: M4 后台服务正常（文件夹初始化/消息路由/Badge/右键菜单/快捷键）
  - 验收标准: M5 数据流正常（Posts/Settings/Mask state + Saga 副作用）
  - 验收标准: F3.3 Download（Export to Netscape Bookmark HTML）功能正常
  - 验收标准: 安装扩展后，在原 Chrome 中与旧版行为一致（书签数据互通，因为是同一 Bookmark API）

### 技术约束（迁移后）

- 框架: WXT (latest) + Vite
- 运行时: Chrome Extension Manifest V3
- UI: React 18+ with Hooks + TypeScript
- 样式: styled-components (latest)
- 状态管理: 待 F8.6 决策（Redux Toolkit 或轻量替代）
- 存储: Chrome Bookmark API（不变）
- 包管理: Bun（用户确认）
- 类型: TypeScript strict mode

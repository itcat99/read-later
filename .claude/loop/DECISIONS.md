# DECISIONS — Read Later

> 架构决策记录（ADR）。记录项目中的重要技术选型、约定和约束。

---

## D-001: 质量门禁

**日期:** 2026-07-08
**状态:** 已确认

项目当前的质量检查手段（从 package.json scripts 提取）：

| 门禁 | 命令 | 触发方式 |
|------|------|---------|
| Lint | `yarn format:js` (eslint --fix) | precommit hook (husky + lint-staged) |
| Build | `yarn build` (webpack --config webpack.prod.js) | 手动 |
| Typecheck | 无 | — |
| Test | 无 | — |

**说明:**
- 项目使用 ESLint + Prettier 做代码格式化，precommit 时自动执行
- 无 TypeScript，无类型检查
- 无测试框架，无自动化测试
- 开发时使用 `yarn dev` (webpack watch 模式)

**引擎应用:** verifier 阶段执行 `yarn build` 确保构建通过；如添加测试框架后更新此决策。

---

## D-002: 技术选型

**日期:** 2026-07-08
**状态:** 已确认

| 类别 | 选型 | 版本 |
|------|------|------|
| 框架 | React | 16.5.2 |
| 状态管理 | Redux + React-Redux | 4.0.0 / 5.0.7 |
| 副作用 | Redux-Saga | 0.16.0 |
| 样式 | styled-components | 3.4.9 |
| 构建 | Webpack | 4.20.2 |
| 转译 | Babel | 7.1.0 |
| Lint | ESLint + Prettier | 5.6.0 / 1.14.3 |
| 包管理 | Yarn | (yarn.lock) |
| 运行环境 | Chrome Extension MV2 | — |
| 存储 | Chrome Bookmark API | — |

**引擎应用:** 新增代码需使用 React Class Component (PureComponent) 模式，styled-components 管理样式，Redux + Saga 管理数据流。

---

## D-003: 项目结构约定

**日期:** 2026-07-08
**状态:** 已确认

```
src/
├── actions/        # Redux action creators（按领域拆分文件）
├── components/     # 展示型组件（每个组件一个子目录: index.jsx + styled.js）
├── container/      # 容器组件（connect Redux，每个容器一个子目录）
├── reducers/       # Redux reducers（按领域拆分，index.js combineReducers）
├── sagas/          # Redux-Saga 副作用（index.js 统一导出）
├── icons/          # SVG 图标资源
├── _vars.js        # 全局样式变量
├── app.jsx         # 根组件
├── background.js   # Chrome Extension background script
├── config.js       # 默认配置
├── constents.js    # Action type 常量
├── helpers.js      # Chrome API 封装（bookmarks/popMsg/sendMsg）
├── pop.js          # Popup 入口（ReactDOM.render）
├── store.js        # Redux store 创建 + Saga middleware
└── styled.js       # 根组件样式
```

**引擎应用:** 新增组件遵循 `components/ComponentName/index.jsx + styled.js` 模式，容器组件遵循 `container/ContainerName/index.jsx + styled.js` 模式。

---

## D-004: 数据流约定

**日期:** 2026-07-08
**状态:** 已确认

- Popup 与 Background 通过 `chrome.runtime.sendMessage` 通信
- Popup 发送 action type（如 GET_POSTS），Background 处理后通过 `sendMsg` 返回结果
- Redux-Saga 监听 action → 发送消息 → 等待 Background 响应 → dispatch 更新 store
- 书签数据以 Chrome Bookmark API 为唯一数据源（非 chrome.storage）

**引擎应用:** 新增跨进程通信功能需遵循此消息模式。

---

## D-005: MV3 + WXT 迁移决策

**日期:** 2026-07-08
**状态:** 待实施（/loop-add 阶段）

**决策:** 将项目从 Webpack 4 + MV2 + JavaScript + React Class Component 迁移到 WXT + MV3 + TypeScript + React Hooks。

**关键变更点:**

| 维度 | 迁移前 | 迁移后 |
|------|--------|--------|
| 构建 | Webpack 4 | WXT (Vite-based) |
| Manifest | V2 | V3 |
| Background | Persistent page | Service Worker |
| API 调用 | `chrome.*` callback | `browser.*` Promise |
| UI | React 16 Class | React 18+ Hooks |
| 状态管理 | Redux + Saga | Zustand（用户确认选项B） |
| 包管理 | Yarn | Bun（用户确认） |
| 类型 | JavaScript | TypeScript |

**注意事项:**
- Chrome Bookmark API 在 MV3 中仍然可用（非 deprecated）
- Service Worker 生命周期是短暂的——需要确保 background 逻辑幂等
- `chrome.action` 替代 `chrome.browserAction`
- 必须保持旧版 manifest.json 中的权限一致性，避免 Chrome Web Store 更新被拒

**引擎应用:** GOAL.md M8 模块的 10 个功能点按 4 阶段顺序执行。

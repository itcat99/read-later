# DECISIONS — Read Later

> 架构决策记录（ADR）。记录项目中的重要技术选型、约定和约束。

---

## D-001: 质量门禁

**日期:** 2026-07-08
**状态:** 已确认

项目当前的质量检查手段（从 package.json scripts 提取）：

| 门禁 | 命令 | 触发方式 |
|------|------|---------|
| Lint | `bun run lint` (biome lint) | precommit hook (husky + lint-staged) |
| Format | `bun run format` (biome format --write) | precommit hook (husky + lint-staged) |
| Build | `bun run build` (rm -rf dist && bun wxt build) | 手动 |
| Typecheck | `wxt prepare` 自带 | 构建时隐式检查 |
| Test | 无 | — |

**说明:**
- 项目使用 Biome 做代码检查和格式化，precommit 时自动执行（F8.9 待实现）
- 当前仍残留 .eslintrc.json（babel-eslint parser），F8.9 实施时一并替换
- TypeScript 类型检查由 WXT 框架自动处理，无需独立 tsc 命令
- 无测试框架，无自动化测试
- 开发时使用 `bun dev` (WXT dev mode)

**引擎应用:** verifier 阶段执行 `bun run build` 确保构建通过；如添加测试框架后更新此决策。

---

## D-002: 技术选型

**日期:** 2026-07-08
**状态:** 已确认（2026-07-08 更新：反映 M8 迁移后实际状态）

| 类别 | 选型 | 版本 |
|------|------|------|
| 框架 | React | 19.2.7 |
| 状态管理 | Zustand | 5.0.14 |
| 样式 | styled-components | 6.4.3 |
| 构建 | WXT (Vite-based) | 0.20.27 |
| 类型 | TypeScript | (strict mode) |
| Lint | ESLint + Prettier | 5.6.0 / 1.14.3 |
| 包管理 | Bun | (bun.lock) |
| 运行环境 | Chrome Extension MV3 | — |
| 存储 | Chrome Bookmark API | — |

**引擎应用:** 新增代码使用 React Function Component + Hooks 模式，Zustand 管理状态，styled-components 管理样式。

---

## D-003: 项目结构约定

**日期:** 2026-07-08
**状态:** 已确认（2026-07-08 更新：反映 WXT 迁移后实际结构）

```
entrypoints/          # WXT 入口点
├── background.ts     # Service Worker
└── popup/            # Popup 面板
    ├── index.html    # HTML 入口
    ├── main.tsx      # React 挂载 + RETURN_POSTS/RETURN_SETTINGS 消息监听
    ├── App.tsx       # 根组件（useEffect 触发 getPosts/getSettings）
    ├── Header.tsx    # 标题 + 版本号 + 搜索框 + 设置入口 + 外部链接
    ├── MainView.tsx  # 列表或空状态
    ├── Post.tsx      # 单个链接项（favicon + 标题 + 删除按钮）
    ├── Footer.tsx    # Clear + Download 按钮
    ├── Mask.tsx      # 确认弹窗
    ├── Search.tsx    # 搜索输入框
    ├── Settings.tsx  # 设置面板
    ├── Empty.tsx     # 空列表占位
    └── Download.tsx  # 导出 Netscape Bookmark HTML
lib/                  # 共享代码
├── _vars.ts          # 全局样式变量
├── config.ts         # 默认配置（Config interface）
├── constents.ts      # Action type 常量 + Message/MessageType 类型
└── helpers.ts        # Chrome API 封装（bookmarks/popMsg/sendMsg）
stores/               # Zustand 状态管理
├── postsStore.ts     # 链接列表 state（posts/updatePosts/removePost/clear/search/getPosts）
├── settingsStore.ts  # 设置面板 state（open/settings/setOpen/getSettings/updateSettings）
└── maskStore.ts      # 确认弹窗 state（show/setShow）
```

**引擎应用:** 新增组件放在 `entrypoints/popup/`，共享代码放在 `lib/`，状态管理在 `stores/`。

---

## D-004: 数据流约定

**日期:** 2026-07-08
**状态:** 已确认（2026-07-08 更新：反映 Zustand 迁移后实际状态）

- Popup 与 Service Worker 通过 `browser.runtime.sendMessage` 通信
- Popup 发送 action type（如 GET_POSTS），Service Worker 处理后通过 `sendMsg` 返回结果
- Zustand store 的 async action 发送消息 → main.tsx 中的 `onMessage` listener 接收响应 → 调用 store 的 setState 更新 UI
- 书签数据以 Chrome Bookmark API 为唯一数据源（非 chrome.storage）

**引擎应用:** 新增跨进程通信功能需遵循此消息模式。

---

## D-005: MV3 + WXT 迁移决策

**日期:** 2026-07-08
**状态:** ✅ 已完成（2026-07-08 更新）

**决策:** 将项目从 Webpack 4 + MV2 + JavaScript + React Class Component 迁移到 WXT + MV3 + TypeScript + React Hooks。

**关键变更点:**

| 维度 | 迁移前 | 迁移后 |
|------|--------|--------|
| 构建 | Webpack 4 | WXT (Vite-based) |
| Manifest | V2 | V3 |
| Background | Persistent page | Service Worker |
| API 调用 | `chrome.*` callback | `browser.*` Promise |
| UI | React 16 Class | React 19 Hooks |
| 状态管理 | Redux + Saga | Zustand 5 |
| 包管理 | Yarn | Bun |
| 类型 | JavaScript | TypeScript |

**注意事项:**
- Chrome Bookmark API 在 MV3 中仍然可用（非 deprecated）
- Service Worker 生命周期是短暂的——需要确保 background 逻辑幂等
- `chrome.action` 替代 `chrome.browserAction`
- 必须保持旧版 manifest.json 中的权限一致性，避免 Chrome Web Store 更新被拒

**引擎应用:** GOAL.md M8 模块的 10 个功能点按 4 阶段顺序执行。F8.9（ESLint TS 支持）仍待完成。

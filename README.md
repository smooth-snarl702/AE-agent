# Atom AE — Patched / 破解修改版

> 适用于 **Atom v3.0.3** After Effects 扩展的无限制补丁，支持自定义 API 端点。

---

## 功能说明

原版 Atom 要求购买授权并使用官方 AI 服务。本补丁实现：

| 功能 | 说明 |
|------|------|
| ✅ 授权绕过 | 跳过 License 验证，无需购买即可使用 |
| ✅ 自定义 Chat API | 支持任意 OpenAI 兼容端点（本地/第三方）|
| ✅ 自定义图像 API | 支持替换 OpenRouter 图像生成端点 |
| ✅ API Key 配置面板 | 注入浮动 UI，无需改代码直接填写 |
| ✅ Claude Code 认证注入 | 自动把 Key 传入 Claude CLI 子进程 |

---

## 安装方法

### 前置要求

- Windows 10/11
- After Effects 2022 或更新版本
- Node.js（运行 Claude Code / Codex 所需）
- Claude Code CLI：`npm install -g @anthropic-ai/claude-code`

### 方法一：一键脚本（推荐）

```powershell
# 以管理员身份运行 PowerShell
.\install.ps1
```

脚本会自动：
1. 设置 `PlayerDebugMode=1` 注册表（绕过 CEP 签名验证）
2. 复制补丁文件到 `%APPDATA%\Adobe\CEP\extensions\atom-ae\`

### 方法二：手动安装

```powershell
# 1. 设置注册表（绕过签名检查）
Set-ItemProperty -Path "HKCU:\Software\Adobe\CSXS.11" -Name "PlayerDebugMode" -Value "1"

# 2. 复制文件
Copy-Item ".\extracted\*" "$env:APPDATA\Adobe\CEP\extensions\atom-ae\" -Recurse -Force
```

---

## 配置自定义 API

安装后重启 AE，打开 Atom 面板。点击右下角浮动的 **⚙ API 设置** 按钮，或在 DevTools Console 中设置：

```js
// 聊天模型（Claude Code / Codex 使用的端点）
localStorage.setItem('ATOM_API_KEY', 'your-api-key')
localStorage.setItem('ATOM_CUSTOM_BASE_URL', 'https://your-endpoint.com')

// 图像生成（默认走 OpenRouter）
localStorage.setItem('ATOM_IMAGE_API_KEY', 'your-openrouter-key')
localStorage.setItem('ATOM_IMAGE_BASE_URL', 'https://openrouter.ai/api/v1')
```

### 推荐 API 服务

| 服务 | 说明 | 地址 |
|------|------|------|
| Anthropic 官方 | 最稳定，按量计费 | https://console.anthropic.com |
| OpenRouter | 多模型聚合，支持图像生成 | https://openrouter.ai |
| agentrouter.org | 社区公益站（免费，限速）| https://agentrouter.org |
| 本地 Ollama | 完全本地，需要较强 GPU | https://ollama.ai |

---

## 补丁详情

### 修改文件
`extracted/assets/main-Bumuo9MN.js`（核心 JS bundle）

### 补丁列表

1. **授权绕过** — `vN()` / `gN()` / `TN()` 函数始终返回已授权/已付费
2. **Chat API 自定义** — `xN()` 函数优先读取 localStorage Key；OpenAI 客户端初始化时读取自定义 baseURL
3. **图像 API 自定义** — `yI` 变量和 `gI()` 函数读取 localStorage 图像生成配置
4. **UI 注入** — 在 `boot-loader:remove` 事件后注入配置面板
5. **Claude spawn 注入** — 在 Atom 启动 Claude CLI 时注入 `ANTHROPIC_API_KEY` / `ANTHROPIC_BASE_URL`
6. **Auth 误判修复** — 缩窄 auth error 检测正则，避免普通 API 错误被误判为未登录

### 重新生成补丁（可选）

如需对新版本 Atom 重新应用补丁：

```bash
cd scripts
python patch_atom.py          # 授权绕过 + Chat API
python patch_image_gen.py     # 图像生成 API
python inject_ui.py           # UI 面板注入
python patch_spawn_env.py     # Claude spawn 环境变量
python patch_auth_regex.py    # Auth 检测修复
```

---

## 支持的 AI 模型

Atom 内置支持以下模型（通过自定义端点可扩展）：

**聊天/编码模型**（运行本地 Claude Code 或 Codex CLI）
- Claude 系列（claude-opus, claude-sonnet, claude-haiku）
- OpenAI 系列（gpt-4o, gpt-4.1, codex）

**图像生成模型**（走 HTTP API）
- Google Gemini Flash Image Preview
- OpenAI gpt-image-1
- Recraft V3
- Flux 系列

---

## 免责声明

> 本项目仅供学习研究，使用者需自行承担风险。  
> 请支持原版软件：[tryatom.ai](https://tryatom.ai)  
> 原版 Atom 提供 7 天免费试用，买断制授权。

---

## License

MIT — 补丁代码部分。原版 Atom 插件版权归 tryatom.ai 所有。

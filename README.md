# AI液冷产业知识库

公开的AI液冷学习与产业情报网站：全球采集，重点关注中国和广东，并连接液冷零件制造与数控机床业务机会。

线上地址：<https://ai-liquid-cooling-hub-cn.netlify.app>

## 本地运行

```bash
pnpm install
pnpm dev
```

## 数据任务

```bash
pnpm collect
pnpm weekly
pnpm audit:sources
pnpm export:data
```

## 部署

1. Netlify 已创建独立项目；`netlify.toml` 使用零服务端函数的静态导出方案。
2. 推送到 GitHub 后，在 Netlify 连接该仓库即可启用持续部署。
3. 在 GitHub 仓库的 Actions secrets 中配置 `MAIL_USER`、`MAIL_AUTH_CODE`、`MAIL_TO`。
4. 首次手动运行“每日采集”和“每周发布与邮件”工作流，核对日志与邮件。

不要把邮箱密码、SMTP授权码、Token或任何客户隐私提交到仓库。

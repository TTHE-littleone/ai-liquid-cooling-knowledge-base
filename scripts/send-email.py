import os, ssl, smtplib
from email.message import EmailMessage
from pathlib import Path

user=os.getenv("MAIL_USER","").strip(); password=os.getenv("MAIL_AUTH_CODE","").strip(); recipient=os.getenv("MAIL_TO","").strip()
if not all([user,password,recipient]):
    print("邮件密钥未配置，跳过发送；网站与周报生成不受影响。")
    raise SystemExit(0)
body=Path("public/reports/latest.md").read_text(encoding="utf-8")
msg=EmailMessage(); msg["Subject"]="AI液冷产业知识库｜本周更新"; msg["From"]=user; msg["To"]=recipient; msg.set_content(body)
context=ssl.create_default_context()
with smtplib.SMTP_SSL(os.getenv("MAIL_HOST","smtp.163.com"),int(os.getenv("MAIL_PORT","465")),context=context,timeout=30) as server:
    server.login(user,password); server.send_message(msg)
print("周报邮件已发送。")

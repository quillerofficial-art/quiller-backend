# Quiller Backend – API Contract (v1)

This document defines the FINAL API contract between:
• Flutter Frontend (Quiller App)
• Node.js Backend (Quiller Backend)

⚠️ IMPORTANT
• This contract is STABLE.
• Frontend must rely ONLY on this.
• Backend must NOT break these responses.
• Real logic (DB, Cloudflare R2, Auth) will be added later WITHOUT changing this contract.

---

## Base URL (Production)

https://quiller-backend.onrender.com

---

## 1. Health Check

### GET /health

Purpose:
• Server health verification
• Render uptime checks

Response (200):
```json
{
  "status": "OK"
}
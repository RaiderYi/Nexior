# Feedback Contact Floating Button — Design Spec

> Date: 2026-07-06
> Status: Approved
> Scope: aibigplayer.top (Nexior fork)

## Purpose

Add a floating contact button (bottom-right, global) that opens a card with a WeChat QR code, positioning the channel as **technical support / Q&A** to build professional trust and capture private-domain traffic.

## Entry Point

- **Form:** Floating button, fixed bottom-right, `z-index: 9999`
- **Default state:** Small circular button (64px) with chat icon + "联系" label
- **Click:** Expands a 360px-wide card popup above the button
- **Pulse hint:** On first visit only, button pulses softly after user scrolls >300px; `localStorage` key `bp_contact_hint_seen` prevents repeat
- **Mobile:** Same position, card becomes full-width-bottom-sheet style

## Popup Card Layout

```
┌──────────────────────────────────┐
│  💬 技术支持 / 问题反馈       ✕  │
├──────────────────────────────────┤
│                                  │
│   ┌─────────┐                    │
│   │         │   扫码添加技术支持 │
│   │  QR码   │                    │
│   │  图片   │   ✅ 遇到问题随时问│
│   │         │   ✅ 新模型优先体验│
│   │         │   ✅ 一对一响应    │
│   └─────────┘                    │
│                                  │
│   📧 邮件：429507312@qq.com      │
│                                  │
└──────────────────────────────────┘
```

## Trust Copy (3 bullets)

Positioning = technical support, not marketing:

1. 遇到问题随时问 — Q&A positioning
2. 新模型优先体验 — benefit hook
3. 一对一响应 — service promise

## Alternative Channel

- Email: 429507312@qq.com (shown below QR, clickable `mailto:`)

## Assets

- QR image: `public/wechat-qr.jpg` (888x1233, 168KB) — already placed
- Icon: Element Plus `ChatDotRound` or similar (already in Nexior deps)

## i18n

Minimum 3 locales (zh-CN, en, ru). Key prefix: `common.contact.*`

| Key | zh-CN | en | ru |
|-----|-------|----|----|
| `common.contact.buttonLabel` | 联系 | Contact | Связь |
| `common.contact.title` | 技术支持 / 问题反馈 | Technical Support / Feedback | Поддержка / Отзыв |
| `common.contact.scanTip` | 扫码添加技术支持 | Scan to add tech support | Сканируйте для связи |
| `common.contact.benefit1` | 遇到问题随时问 | Ask anytime | Спрашивайте в любое время |
| `common.contact.benefit2` | 新模型优先体验 | Early access to new models | Ранний доступ к моделям |
| `common.contact.benefit3` | 一对一响应 | 1-on-1 response | Индивидуальный ответ |
| `common.contact.email` | 邮件 | Email | Почта |

## Technical Approach

### Component: `src/components/common/FloatingContact.vue`

- Vue 3 Options API (matches Nexior codebase convention)
- Self-contained: no external state, no API calls
- CSS scoped; uses Nexior CSS variables where available
- Mounts globally in `App.vue` root template

### Files to create/modify

| File | Action |
|------|--------|
| `src/components/common/FloatingContact.vue` | **CREATE** — the component |
| `src/App.vue` | **MODIFY** — add `<FloatingContact />` in template root |
| `src/i18n/zh-CN/common.json` | **MODIFY** — add `contact.*` keys |
| `src/i18n/en/common.json` | **MODIFY** — add `contact.*` keys |
| `src/i18n/ru/common.json` | **MODIFY** — add `contact.*` keys |
| `public/wechat-qr.jpg` | **CREATE** — already placed |

### No changes needed

- No router changes (floating component, not a route)
- No store/state changes
- No backend/API changes

## Edge Cases

- **Chat input focus:** Button stays visible but non-interactive when keyboard/modal open (z-index managed)
- **Settings page:** Button hidden on settings/console pages (disturbs form interaction)
- **Login page:** Button hidden (user not yet authenticated)
- **Mobile keyboard open:** Button hides when virtual keyboard detected (viewport height drop)

## Verification

1. `npx vue-tsc -b` — must pass (matches Vercel build)
2. Manual: button visible on main pages, hidden on settings/login
3. Manual: click expands card, QR displays, email link works
4. Manual: pulse animation fires once, not repeated
5. Manual: mobile layout correct (bottom sheet style)

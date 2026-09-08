# lv-ecosystem

Trạm điều phối cá nhân — một trang tổng hợp các webapp tiện ích đã xây dựng, mỗi app được hiển thị dưới dạng một "node" kèm trạng thái (live/dev), mô tả ngắn, stack và link truy cập.

**Live:** _(cập nhật sau khi deploy)_

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4

## Phát triển

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Thêm một node mới

Chỉnh mảng `nodes` trong `src/App.tsx` — mỗi node cần `codename`, `name`, `tagline`, `description`, `stack`, `status` (`live` | `dev` | `offline`), và tùy chọn `url` / `github`.

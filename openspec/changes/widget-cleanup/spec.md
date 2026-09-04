# Spec: Widget Cleanup & Chat Mobile Fix

## Requirements

### R1 — Remove calendar widget
- Delete the "Disponibilidad" button (calendar SVG + smooth-scroll to `#disponibilidad`) from `float-buttons.tsx`.
- The `handleAvailabilityClick` function is removed along with the button JSX.

### R2 — Reorder: WhatsApp above ChatWidget
- In the `flex-col` stack (fixed bottom-right), WhatsApp button renders first (visually higher), ChatWidget renders last (visually lower / closest to screen edge).
- The chat window still opens upward via `bottom-full` positioning.

### R3 — Brand color for all widgets
- Replace all `bg-[#1a73e8]` → `bg-primary`
- Replace all `hover:bg-[#1558b0]` → `hover:bg-primary/90`
- Replace all `focus:ring-[#1a73e8]/30` → `focus:ring-primary/30`
- Replace all `bg-[#1a73e8]` in message bubbles → `bg-primary`
- Text on primary backgrounds uses `text-primary-foreground`.
- WhatsApp button keeps its own green (`#25D366` / `#128C7E`) — that is brand-mandated.

### R4 — Chat mobile keyboard fix
- On mobile (viewport width < 768px), the `ChatWindow` switches from `absolute` (parent-relative) to `fixed` (viewport-relative) positioning.
- Height uses `dvh` units: `max-height: calc(100dvh - 5rem)` so it shrinks when the virtual keyboard appears.
- The `ChatWindow` is pinned bottom-right on mobile: `fixed bottom-20 right-4 left-4` (full-width minus margin) with `max-h-[calc(100dvh-5rem)]`.
- On desktop (≥ 768px): existing `absolute bottom-full right-0 w-80 h-[450px]` layout is preserved.
- The messages area keeps `flex-1 overflow-y-auto` so it scrolls while the input stays pinned at the bottom.
- Auto-scroll to `bottomRef` fires on every message/loading change (already implemented).

## Out of Scope
- No changes to API routes.
- No new state or context.
- No routing or page-level changes.

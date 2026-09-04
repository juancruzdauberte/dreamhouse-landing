# Proposal: Widget Cleanup & Chat Mobile Fix

## Problem

The floating widget stack has four issues:
1. The calendar/availability button (`#disponibilidad`) is no longer needed and clutters the UI.
2. The ChatBot widget renders above WhatsApp, but it should be below it.
3. All widgets use a hardcoded blue (`#1a73e8`) that doesn't match the site's warm terracotta brand palette.
4. On mobile, opening the keyboard while the chat is open hides the message history — the user can see the input but loses context of the conversation.

## Goal

Clean up the floating widget stack, align colors with the site's design system, and make the chat fully usable on mobile even when the virtual keyboard is open.

## Non-Goals

- No changes to chat API logic or message content.
- No changes to the WhatsApp link or phone number.
- No new dependencies (no framer-motion, no new packages).
- No changes to the availability section itself — only the floating button is removed.

## Scope

| File | Change |
|------|--------|
| `components/widgets/float-buttons.tsx` | Remove calendar button; swap order (WhatsApp first, ChatWidget second) |
| `components/widgets/chat/ChatWidget.tsx` | Replace `#1a73e8` with `bg-primary` / `text-primary-foreground` |
| `components/widgets/chat/ChatWindow.tsx` | Replace hardcoded blues with primary CSS vars; fix mobile keyboard layout |

## Acceptance Criteria

1. Calendar/availability floating button is gone from the UI.
2. WhatsApp button renders visually above the chat button in the stack.
3. Chat button and chat window use the site's primary color (`oklch(0.45 0.15 35)` / `var(--primary)`).
4. On mobile, when the virtual keyboard opens, the chat window resizes to fit the remaining visible area and both the message history and the input remain visible simultaneously.
5. On desktop, the chat layout is unchanged.

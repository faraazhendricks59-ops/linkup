# Linkup

**One identity. Seven layers. Infinite circles.**

Linkup is a unified social graph that combines:

1. **Skill Swap** – Teach / learn matching + token economy  
2. **Hyper-Local** – Geo-fenced neighborhood & campus communities  
3. **Creator Feedback** – Structured WIP critique with feedback debt  
4. **Accountability** – Habit & goal squads with streaks  
5. **Whisper** – Anonymous verified industry/company posts  
6. **Event** – Temporary high-density communities that auto-spawn and archive  
7. **Mentorship / Knowledge Debt** – Time-bank currency + structured sessions  

All under a single multi-face identity system with context-weighted global reputation.

---

### Brand System
- Primary: `#0c8ce9` (Brand Blue)
- Accent: `#d946ef` (Magenta)
- Full design tokens, gradients, glows, animations defined in `tailwind.config.ts`
- Custom Logo component with animated variants
- Button system with 8 variants + loading states + size scale

---

### Current Scaffold

| Area | Status |
|------|--------|
| Design System | ✅ Brand colors, effects, animations |
| Logo + Buttons | ✅ Production components |
| Landing Page | ✅ Full hero + 7-layer showcase |
| Database Schema | ✅ Complete multi-layer Prisma model |
| Identity System | ✅ Multi-face (Public / Local / Anonymous / Professional / Event) |
| Unit Tests | ✅ Button component tests (Vitest) |
| Auth | ⏳ Next |
| Feed Engine | ⏳ Next |
| Messaging | ⏳ Next |
| Realtime | ⏳ Next |

---

### Tech Stack
- **Frontend**: Next.js 15 + React 19 + Tailwind + Framer Motion + Radix
- **Backend**: Next.js + Prisma + PostgreSQL
- **Testing**: Vitest + Testing Library
- **Deploy target**: Vercel

---

### Getting Started

```bash
npm install
npm run dev
```

```bash
npm test
```

---

### Architecture Notes
The platform is engineered as a single social graph with layered contexts rather than separate apps. Reputation and tokens are global but context-weighted. Identity faces allow users to operate in different modes without losing continuity.

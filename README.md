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
- Full design tokens, gradients, glows, shadows, animations
- Custom Logo (icon / wordmark / full + animated)
- Button system (8 variants + loading + size scale)
- Card, Avatar, Badge components

---

### What’s Built

| Area | Status |
|------|--------|
| Design System | ✅ Complete |
| Logo + Core UI | ✅ Production components |
| Landing Page | ✅ Full marketing page |
| App Shell + Sidebar | ✅ Layer navigation |
| Multi-layer Home Feed | ✅ Mock feed with composer |
| Identity Face Switcher | ✅ 5-face switcher component |
| Database Schema | ✅ Full Prisma model (all 7 layers + messaging + tokens + reputation) |
| Layer Pages | ✅ Skills, Local, Whisper (+ stubs for rest) |
| API | ✅ Health check route |
| Tests | ✅ Vitest + Button unit tests |
| Auth | ⏳ Next (NextAuth / Clerk) |
| Real data + Realtime | ⏳ Next |

---

### Tech Stack
- **Frontend**: Next.js 15 · React 19 · Tailwind · Framer Motion · Radix
- **Backend**: Next.js API Routes · Prisma · PostgreSQL
- **Testing**: Vitest + Testing Library
- **Deploy**: Vercel (ready)

---

### Run Locally

```bash
npm install
cp .env.example .env
# add DATABASE_URL
npm run dev
```

```bash
npm test
```

App routes:
- `/` — Marketing landing
- `/app` — Multi-layer home feed
- `/app/skills` · `/app/local` · `/app/whisper` · etc.

---

### Architecture
Single social graph with layered contexts. Reputation and tokens are global but context-weighted. Users switch identity faces without losing continuity across the graph.

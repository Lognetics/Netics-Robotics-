# NETICS Robotics

**The Future of Robotics Begins Here.**

A premium, AI-powered marketing & product site for **NETICS Robotics** — the robotics division of NETICS AI. Built as a futuristic, immersive, multi-page experience with real 3D, motion and an on-page AI assistant.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — custom dark/glassmorphism design system
- **Framer Motion** — scroll reveals, transitions, micro-interactions
- **react-three-fiber + drei** — procedural 3D robot showroom

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Routes (21)

`/` home · `/robots` · `/robots/[slug]` · `/marketplace` · `/humanoid` · `/software` (NETICS OS) ·
`/research` · `/ecosystem` · `/future` · `/dashboard` · `/industries` · `/enterprise` ·
`/case-studies` · `/build` (configurator) · `/distributors` · `/contact` · `/support` ·
`/blog` · `/careers` · `/investors` · `/about`

## Project structure

```
src/
  app/                 # routes (App Router)
  components/
    home/              # home page sections
    layout/            # navbar, footer, AI assistant, page header
    three/             # 3D scene, robot model, neural background
    ui/                # design-system primitives
  lib/                 # site config + domain data (robots, categories, ...)
```

## 3D models

The robot showroom currently renders a **procedural humanoid** built from primitives
(`src/components/three/RobotModel.tsx`). To use real assets, drop a `.glb`/`.gltf` into
`/public` and swap the primitive group for a loaded `<primitive>` in `RobotScene`.

## Deploy

Optimized for **Vercel** — zero config. Import the GitHub repo and deploy.

---

Designed in Africa. Built for the world. © 2026 NETICS Robotics, a division of NETICS AI.

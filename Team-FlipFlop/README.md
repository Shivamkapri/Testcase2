
Shivam kapri@DESKTOP-U851NJT MINGW64 /d/pccehackathon
$ d d:/pccehackathon/Team-FlipFlop/landing-next && npm install > install.log 2>&1 &
[1] 2047
/usr/bin/bash: line 1: d: command not found
[1]+  Exit 127                d d:/pccehackathon/Team-FlipFlop/landing-next && npm install > install.log 2>&1

Shivam kapri@DESKTOP-U851NJT MINGW64 /d/pccehackathon
$ ls
Team-FlipFlop

Shivam kapri@DESKTOP-U851NJT MINGW64 /d/pccehackathon
$ cd Team-FlipFlop/

Shivam kapri@DESKTOP-U851NJT MINGW64 /d/pccehackathon/Team-FlipFlop (main)
$ cd landing-next && npm install
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead

added 33 packages, removed 76 packages, changed 78 packages, and audited 373 packages in 52s

110 packages are looking for funding
  run `npm fund` for details

1 critical severity vulnerability

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.

Shivam kapri@DESKTOP-U851NJT MINGW64 /d/pccehackathon/Team-FlipFlop/landing-next (main)
$ npm run dev

> flipflop-landing@0.1.0 dev
> next dev

  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000

 ✓ Starting...
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

 ⚠ Attempted to load @next/swc-win32-x64-msvc, but an error occurred: \\?\D:\pccehackathon\Team-FlipFlop\landing-next\node_modules\@next\swc-win32-x64-msvc\next-swc.win32-x64-msvc.node is not a valid Win32 application.
\\?\D:\pccehackathon\Team-FlipFlop\landing-next\node_modules\@next\swc-win32-x64-msvc\next-swc.win32-x64-msvc.node
 ⨯ Failed to load SWC binary for win32/x64, see more info here: https://nextjs.org/docs/messages/failed-loading-swc


Shivam kapri@DESKTOP-U851NJT MINGW64 /d/pccehackathon/Team-FlipFlop/landing-next (main)
$# Team FlipFlop

## 3. The AI That Thinks With You

### Problem:
Modern teams are overwhelmed by information spread across emails, chats, and meetings. While tools exist to manage tasks, none truly understand the "why" behind decisions or retain long-term context. As a result, teams lose continuity, repeat work, and struggle to recall past decisions or reasoning reducing overall efficiency and innovation.

### What can be done:
Create an AI powered cognitive workspace that continuously learns from user interactions, summarizing discussions, identifying decisions, and suggesting contextual next steps. It would act as a shared memory layer for teams integrating with tools like Slack, Notion, or Google Workspace enabling AI-assisted recall, smart summaries, and decision tracking. Over time, Synapse could predict workflow bottlenecks and recommend improvements based on behavioral data.

## Setup

1. Clone this repository
2. Follow the setup instructions below for each component

## 🎯 Landing Page

### ⚡ **NEW: Next.js 14 + TypeScript + Tailwind CSS** (Recommended)

**Modern, production-ready landing page** as specified in `LANDING_PAGE_SPEC.md`

� **Location**: `landing-next/`

#### Quick Start
```bash
cd landing-next
npm install
npm run dev
```
Open http://localhost:3000

#### Tech Stack
- ✅ **Next.js 14** (App Router)
- ✅ **TypeScript** (type-safe)
- ✅ **Tailwind CSS** (utility-first)
- ✅ **Framer Motion** (animations)
- ✅ **React Hook Form + Zod** (forms)

#### Features
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Server-side rendering (SSR)
- 🎨 Modern design system
- ♿ Accessible (ARIA, keyboard navigation)
- 🚀 SEO optimized
- 🎭 Smooth animations

#### Complete Sections
✅ Hero • Problem • Solution • How It Works • Features • Social Proof • Pricing • FAQ • CTA • Footer

👉 **See [QUICKSTART.md](./QUICKSTART.md) for detailed setup guide**

---

### 📄 Static HTML Version (Legacy)

**Simple HTML/CSS/JS version** for quick preview

📁 **Location**: `landing/`

```bash
cd landing
python -m http.server 8000
# Open http://localhost:8000
```

**Note**: The Next.js version (`landing-next/`) follows the official spec and is recommended for production.

## Development

Details about the development process will be added here.

## Team

Team FlipFlop members and contributors.
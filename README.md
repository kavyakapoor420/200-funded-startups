# Indian Startups Directory

A stunning, fast, SEO-optimized directory of the **top 58+ funded Indian startups** built with **Next.js 15 (App Router)**, TypeScript, Tailwind CSS, Framer Motion & shadcn/ui.

Live → https://raftlabs-assignment-startup.vercel.app/

## Features

- Hero section with animated background & glassmorphism (Awwwards-level design)
- Fully filterable startup listing (search + sector + city + sort)
- Individual startup detail pages (static generation)
- Dynamic category pages: `/startups/fintech`, `/startups/bengaluru`, `/startups/high-funded`, etc.
- Beautiful hover cards with grayscale → color transition
- Responsive dark mode design
- SEO-ready:
- Global Navbar + Footer

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui + Lucide Icons
- Framer Motion (animations)
- Static Generation (SSG + `generateStaticParams`)
- Vercel Deployment

## Dataset

- 58+ real Indian startups
- Source: Crunchbase, Tracxn, official websites
- File: `/data/data.ts`
- Includes: name, logo, sector, funding ($M), HQ, website, founded, description

## AI Tools Used (as recommended)

1. **Claude 3.5 Sonnet** – UI design decisions, Tailwind classes, component structure

Example Prompts:
> "Create a glassmorphism card with grayscale logo that turns color on hover using Tailwind"
> "Fix Next.js 15 params Promise error in dynamic route with React.use()"

## Design Inspiration

- https://dribbble.com/shots/23497892-Dark-Startup-Directory
- https://awwwards.com/sites/linear-2 (for animations & spacing)

## What I'd Improve with +2 Days

- Add infinite scroll or pagination
- Add "Recently Funded" animated ticker
- Add share buttons + Twitter cards
- Add dark/light mode toggle
- Write unit tests with Jest + React Testing Library

## Setup Locally

```bash
git clone https://github.com/kavyakapoor420/200-funded-startups.git Assignment
cd Assignment
npm install
npm run dev
```
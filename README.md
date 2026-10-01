# Keploy DevRel Candidate Assignment: Go Quickstart Tutorial Site

> **Live Demo**: [Deploy on Vercel](#deploy-on-vercel)  
> **Author**: Dushyant Patel  
> **Evaluation**: Keploy Developer Relations Candidate Assignment  

A modern, static single-page documentation and tutorial website built with **Next.js (App Router)**, **MDX**, and **Tailwind CSS**. 

This tutorial documents the hands-on journey of recording end-to-end integration tests and generating zero-code PostgreSQL mocks for an **Echo** Go microservice using **Keploy v3.8.57**, along with battle-tested gotchas encountered on **Windows WSL2 (Ubuntu)** and **Docker**.

---

## 🌟 Highlights & Bonus Points

- **Interactive MDX Content**: Seamlessly combines structured Markdown with bespoke React interactive components (`<Callout>`, `<Tabs>`, `<Steps>`, `<ArchitectureDiagram>`, `<GotchaAccordion>`, `<TestRunSimulator>`).
- **Dark / Light Mode**: Integrated theme toggle powered by `next-themes` with persistent user preferences and zero hydration mismatch.
- **Interactive Architecture Flow**: Visualizes how Keploy's eBPF proxy intercepts network system calls, switches between Record mode and Replay mode, and mocks PostgreSQL without live databases.
- **Interactive Test Simulator**: A playable in-browser terminal widget demonstrating live recording, zero-DB replay passes, and intentional schema regression detection.
- **Battle-Tested Gotchas**: Documents real friction points solved during the evaluation (WSL2 Docker socket permissions, headless browser OAuth timeouts, CGO compiler header dependencies, and container vs localhost networking).
- **Sticky Table of Contents**: Features active scroll tracking, reading progress bar, and anchor navigation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static HTML Export Ready)
- **Content**: [MDX](https://mdxjs.com/) via `@next/mdx`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/typography`
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Target App Stack**: Go (Echo framework) + PostgreSQL + Docker Desktop (WSL2)

---

## 📁 Project Structure

```text
keploy_devrel/
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 theme tokens & typography
│   │   ├── layout.tsx          # Root layout with ThemeProvider, Navbar & Footer
│   │   └── page.tsx            # Main documentation reader & hero section
│   ├── components/
│   │   ├── ArchitectureDiagram.tsx # Interactive network interception flow
│   │   ├── Callout.tsx             # Info, Tip, Warning, Danger, & A-Ha callouts
│   │   ├── CodeBlock.tsx           # Copyable code block with terminal header
│   │   ├── Footer.tsx              # Documentation footer
│   │   ├── GotchaAccordion.tsx     # Real-world WSL2 & Docker troubleshooting
│   │   ├── Navbar.tsx              # Top navigation with theme toggle & links
│   │   ├── Steps.tsx               # Numbered documentation timeline
│   │   ├── TableOfContents.tsx     # Sticky sidebar with reading progress tracker
│   │   ├── Tabs.tsx                # Tabbed code/command switcher
│   │   ├── TestRunSimulator.tsx    # Interactive terminal output player
│   │   ├── ThemeProvider.tsx       # next-themes wrapper
│   │   └── ThemeToggle.tsx         # Sun/Moon/Laptop switcher
│   ├── content/
│   │   └── tutorial.mdx        # Core DevRel tutorial written in MDX
│   └── mdx-components.tsx      # Global MDX component mappings
├── next.config.ts              # @next/mdx configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-username/keploy-devrel.git
cd keploy-devrel
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the documentation site.

### 3. Build for Production

```bash
npm run build
```

This compiles an optimized, static production build ready for deployment on Vercel.

---

## ☁️ Deploy to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Keploy DevRel Next.js MDX documentation site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Keep default settings (`Framework: Next.js`, root directory `./`).
5. Click **Deploy**. Vercel will automatically detect the Next.js setup, run `npm run build`, and provide you with a live URL.

---

## 📝 Assignment Deliverables Checklist

- [x] Successfully ran Keploy quickstart locally for a Go application (Echo + PostgreSQL & Gin + Mongo).
- [x] Captured live API traffic and verified generated test cases and database mocks.
- [x] Proved zero-dependency testing with the database container stopped.
- [x] Verified schema mutation regression detection by modifying Go struct tags.
- [x] Built a single-page static documentation website using Next.js and MDX.
- [x] Included interactive elements: Architecture flow, Test runner simulator, Gotchas accordion, and Callout boxes.
- [x] Bonus: Implemented dark/light mode toggle with theme persistence.
- [x] Bonus: Clean, responsive UI with sticky Table of Contents and reading progress bar.

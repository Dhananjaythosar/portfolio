# Dhananjay Thosar — Personal Portfolio

Production-ready personal portfolio for **Dhananjay Thosar**, Associate Data Engineer.

Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. All profile content is driven from a single data file so updates stay easy.

## Features

- Dark, premium, data-engineering inspired UI
- Sticky navigation + mobile hamburger menu
- Hero, About, Skills, Experience, Projects, Certifications, Education, Achievements, Resume, Contact
- Project detail modal
- Resume download + in-browser PDF viewer
- SEO metadata, Open Graph / Twitter cards, JSON-LD Person schema
- `robots.ts` and `sitemap.ts`
- Accessible focus states and reduced-motion support
- Contact form with validation and honest mailto fallback (no fake “message sent” success)

## Project structure

```text
portfolio/
├── public/
│   ├── resume/
│   │   └── dhananjay-thosar-resume.pdf
│   ├── certificates/          # drop certificate PDFs here
│   └── projects/              # optional project images/diagrams
├── src/
│   ├── app/                   # Next.js App Router pages + SEO
│   ├── components/            # UI sections and cards
│   ├── data/profile.ts        # ★ edit your content here
│   ├── lib/utils.ts
│   └── types/profile.ts
└── README.md
```

## Getting started

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+

### Install

```bash
cd portfolio
npm install
```

### Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Updating your content

Edit `src/data/profile.ts`.

Typical updates:

1. Personal info, social links, about copy
2. Skills categories
3. Experience bullets
4. Projects + GitHub URLs
5. Certifications (`certificateUrl`, `verifyUrl`, `credentialId`, `issueDate`)
6. Education / achievements
7. SEO title/description and `websiteUrl`

### Resume PDF

Replace:

```text
public/resume/dhananjay-thosar-resume.pdf
```

Keep the same filename, or update `resumePath` in `profile.ts`.

### Certificates

1. Add files under `public/certificates/`
2. Set fields on each certification in `profile.ts`:

```ts
certificateUrl: "/certificates/aws-data-engineer.pdf",
verifyUrl: "https://www.credly.com/badges/...",
credentialId: "ABC-123",
issueDate: "Jan 2025",
```

Buttons only appear when real URLs are present.

## Contact form

The form validates locally, then opens the user’s email client via `mailto:`.

To connect a real backend later (Formspree, Resend, API route, etc.), replace the submit handler in `src/components/Contact.tsx`. Do not pretend delivery succeeded without a working provider.

## Deployment (free hosting)

### Option A — Vercel (easiest, free, recommended for Next.js)

1. Create a GitHub repo and push the `portfolio` folder contents
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub
3. **Add New Project** → import that repo
4. Leave defaults (Framework: Next.js, Root: `/`)
5. Click **Deploy**

You get a free URL like `https://your-project.vercel.app`.

Then update `websiteUrl` in `src/data/profile.ts` to that URL (or a custom domain).

### Option B — Netlify

1. Push to GitHub
2. Import at [netlify.com](https://www.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next` is not enough for Next.js alone — use Netlify’s Next.js runtime / `@netlify/plugin-nextjs`, or prefer Vercel

### Custom domain (optional, free subdomain already included)

On Vercel: Project → Settings → Domains → add your domain if you buy one later.

## Responsive design

The site is built mobile-first with:

- Sticky nav + hamburger menu on small screens
- Fluid grids for skills, projects, certifications, education
- Readable typography and spacing across phone / tablet / desktop

Test by resizing the browser or using Chrome DevTools device mode.

## Content source note

Experience, skills, education, certifications, and achievements were populated from:

- `Dhananjay_Thosar_AWS_Data_Engineer_Resume.pdf`

Featured projects use your public GitHub repositories:

- [schemamind](https://github.com/Dhananjaythosar/schemamind)
- [DiagramDecoder](https://github.com/Dhananjaythosar/DiagramDecoder)
- [VidBrief](https://github.com/Dhananjaythosar/VidBrief)

No fabricated metrics, employers, or credentials were added.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start local dev server   |
| `npm run build`| Create production build  |
| `npm start`    | Serve production build   |
| `npm run lint` | Run ESLint               |

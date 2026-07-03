# Story Of Walls — Frontend

**"Every Space Has A Story"**

Production-ready **frontend-only** React + TypeScript website for Story Of Walls, a premium
construction & interior design company. No backend, API, database, or authentication is included
in this phase — all data is served from static TypeScript objects in `src/data/`.

## Tech Stack

React 19 · TypeScript · Vite · TailwindCSS · React Router DOM · Framer Motion · GSAP · Lenis ·
SwiperJS · React Hook Form + Zod · React Icons · HeadlessUI · Axios (service layer only) ·
React Query (config only) · React CountUp · React Helmet Async

## Getting Started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Project Structure

```
src/
  assets/          images, icons, fonts, animations
  components/
    layout/        Navbar, MegaMenu, Footer, MainLayout
    Common/         Buttons, Cards, Inputs, Badges, Testimonials, Timeline, ProjectCard, Gallery, Loader
    Sections/       Hero, About, Services, Packages, Projects, Estimator, FAQ, Blogs, Contact
  pages/            One folder per route (Home, About, Projects, Services, Packages, Gallery,
                     FloorPlans, Commercial, Interior, Architecture, Renovation, CostEstimator,
                     Blogs, Careers, Contact, BookConsultation, NotFound)
  hooks/            useScrollPosition, useLenis, useMediaQuery
  utils/            cn (Tailwind merge), animation variants, formatters
  constants/        site config, navigation & mega menu structure
  context/          AppProvider (selected city, consultation modal state)
  routes/           central lazy-loaded route configuration
  services/         axios instance + React Query client (config only, no live endpoints)
  data/             static dummy data — services, projects, packages, testimonials, FAQ, blogs, etc.
  types/            shared TypeScript interfaces
```

## Pages & Routing

| Route                     | Page                |
|---------------------------|----------------------|
| `/`                       | Home (17 sections)  |
| `/about`                  | About Us            |
| `/projects`               | Projects listing (filterable) |
| `/projects/:slug`         | Project details     |
| `/services`                | Services listing     |
| `/services/:slug`          | Service details      |
| `/packages`                | Construction packages |
| `/gallery`                  | Full project gallery |
| `/floor-plans`             | Floor plan catalogue |
| `/commercial`               | Commercial construction landing |
| `/interior`                 | Interior design landing |
| `/architecture`             | Architecture & planning landing |
| `/renovation`                | Renovation & remodelling landing |
| `/cost-estimator`            | Free instant cost estimator |
| `/blogs`                      | Blog listing |
| `/blogs/:slug`                | Blog details |
| `/careers`                     | Careers & open positions |
| `/contact`                      | Contact page |
| `/book-consultation`             | Dedicated consultation booking page |
| `*`                                | 404 Not Found |

## Notes

- All images are placeholders from Unsplash; the hero video is a placeholder from Pexels.
- The logo used across the Navbar, Footer and favicon is the uploaded Story Of Walls logo
  (`src/assets/images/logo.jpeg`) — replace with a transparent PNG/SVG when available.
- `src/services/apiClient.ts` and `src/services/queryClient.ts` are pre-wired for when the backend
  is built later — no live endpoints are called yet.
- Forms (`ConsultationForm`, `ContactSection`) use React Hook Form + Zod validation with a stubbed
  submit handler (`services/consultationService.ts`) — swap in a real API call when ready.
- Run `npm install` before first use — dependencies are not pre-installed in this export.

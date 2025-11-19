<!-- .github/copilot-instructions.md - guidance for AI coding agents -->

Project snapshot
- This is a React + Vite single-page app (src/) using Tailwind for styling and React Router for routing.
- Entry points: `src/main.jsx` -> mounts `App` (`src/App.jsx`). Admin routes live under `src/pages/admin/*`.

Quick commands
- Install: run your package manager (repo uses npm): `npm install`.
- Dev: `npm run dev` (uses `vite`).
- Build: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured at repo root).

Key files & patterns to reference
- `package.json` — lists main deps (react, react-dom, react-router-dom, axios, chart.js) and scripts.
- `vite.config.js` — basic Vite config with `@vitejs/plugin-react`.
- `tailwind.config.js` and `src/index.css` — Tailwind is used; when adding class names, ensure they appear in `./src/**/*.{js,ts,jsx,tsx}` so Tailwind can purge correctly.
- Routing: `src/App.jsx` defines top-level Routes. Example: admin routes are nested under `/admin` and mapped to `src/pages/admin/*` (e.g. `dashboard.jsx`, `students.jsx`).
- Components: reusable UI lives in `src/components/` (e.g. `navbar.jsx`, `layout.jsx`, `table.jsx`, `form.jsx`). Many components are small presentational units — prefer editing existing components to reuse styles.

Project-specific conventions
- Routing-first pages: Pages are colocated under `src/pages/` and for admin under `src/pages/admin/`. When adding new pages, mirror this directory structure and export default the page component.
- Layouts: There are layout components in `src/layout/` and `src/components/Layout.jsx` used to compose pages. Use those for consistent scaffolding instead of creating ad-hoc wrappers.
- Styling: Tailwind utility classes are used directly in JSX. Avoid external CSS files for small component tweaks; follow existing utility-first approach.
- API calls: `axios` is included; look for usage in pages/components to follow existing data-fetch patterns.
- Charts: `chart.js` + `react-chartjs-2` are used in `src/components/chart.jsx` — follow that pattern for adding new charts.

Integration & behavior notes
- Static assets: `public/` and `index.html` are standard Vite locations. Use `public/` for static files referenced without import.
- HMR: Dev server uses Vite HMR; local changes to `src/` should reflect instantly when `npm run dev` is running.
- Browser routing: App uses HTML5 history (BrowserRouter). When testing preview or deploying to a static host, ensure server rewrites unknown routes to `index.html`.

Examples to cite when editing code
- Add a new admin page: create `src/pages/admin/myPage.jsx`, export default a React component, and add a <Route path="myPage" element={<MyPage/>} /> under the `/admin` Route in `src/App.jsx`.
- Reuse layout: wrap new pages with `dashboardLayout.jsx` (if page is admin-facing) to keep header/sidebar consistent.
- Add Tailwind class usage: update JSX in `src/components/*` — tailwind content paths already include `./src/**/*.{js,ts,jsx,tsx}` in `tailwind.config.js`.

What not to change lightly
- Don’t remove or massively refactor the router structure in `src/App.jsx` — many pages rely on nested routes.
- Don’t change Tailwind content globs without updating `tailwind.config.js` and rebuilding; otherwise classes may be purged.

If you need more context
- Look at `src/components/*` and `src/pages/admin/*` to learn component conventions and UI patterns.
- Check `package.json` for scripts and dependencies.

If this file is incomplete or unclear, reply with specific areas you want expanded (build, tests, routing, data-fetch patterns, or components) and I will iterate.

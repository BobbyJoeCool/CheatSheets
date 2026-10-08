# Next.js Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Complete
- **Sheets:** 58 across 14 groups
- **File prefix:** `next` (`next-##-[slug].html`)
- **Folder:** `Sheets/Next-Sheets/`
- **Coverage:** introduction & setup, routing, server & client components, data fetching, caching & rendering, mutations & server actions, route handlers & proxy, styling, optimizations, authentication & security, data, environment & i18n, testing & debugging, deployment & operations, Pages Router (legacy)

---

## Group 1 — Introduction & Setup (01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `next-01-introduction.html` | Introduction &amp; Rendering Model | App Router · Pages Router · Server Components · Turbopack · self-hosting |
| 02 | `next-02-create-next-app.html` | Creating a Project | create-next-app · --ts · --tailwind · --src-dir · --app · AGENTS.md |
| 03 | `next-03-project-structure.html` | Project Structure &amp; Special Files | app/ · public/ · src/ · page · layout · loading · error · route.ts |
| 04 | `next-04-next-config.html` | next.config.ts | NextConfig · images · redirects() · rewrites() · cacheComponents · reactCompiler |
| 05 | `next-05-cli-tooling.html` | CLI &amp; Dev Tooling | next dev · next build · next start · next typegen · next info · Biome / ESLint |

## Group 2 — Routing (06–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `next-06-file-routing.html` | File-System Routing | page.tsx · route segments · nested folders · index route · default export |
| 07 | `next-07-dynamic-routes.html` | Dynamic Routes | [slug] · [...slug] · [[...slug]] · params Promise · generateStaticParams · dynamicParams |
| 08 | `next-08-layouts-templates.html` | Layouts &amp; Templates | root layout · &lt;html> · &lt;body> · nested layouts · children · template.tsx |
| 09 | `next-09-linking-navigation.html` | Linking &amp; Navigation | &lt;Link> · prefetch · useRouter() · redirect() · usePathname() · useSearchParams() |
| 10 | `next-10-loading-error-ui.html` | Loading, Error &amp; Not Found UI | loading.tsx · error.tsx · retry() · global-error.tsx · not-found.tsx · notFound() · forbidden() |
| 11 | `next-11-route-groups.html` | Route Groups &amp; Private Folders | (group) · multiple root layouts · _folder · opt out of layouts · feature folders |
| 12 | `next-12-parallel-intercepting.html` | Parallel &amp; Intercepting Routes | @slot · default.tsx · (.) · (..) · (...) · modal pattern · conditional slots |

## Group 3 — Server & Client Components (13–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `next-13-server-components.html` | Server Components | default in app/ · async components · direct DB access · server-only · no hooks |
| 14 | `next-14-client-components.html` | Client Components | 'use client' · client boundary · serializable props · useState · browser APIs · client-only |
| 15 | `next-15-composition-patterns.html` | Composition Patterns | children slots · context providers · third-party wrappers · moving 'use client' down · passing promises |
| 16 | `next-16-react-features.html` | React 19 Features Used in Next | use() · &lt;Suspense> · useActionState · useOptimistic · &lt;ViewTransition> · &lt;Activity> · React Compiler |

## Group 4 — Data Fetching (17–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `next-17-server-data-fetching.html` | Fetching in Server Components | async/await fetch() · ORM queries · Promise.all · preload pattern · React cache() |
| 18 | `next-18-streaming-suspense.html` | Streaming &amp; Suspense | loading.tsx vs &lt;Suspense> · streaming promises · use() · fallback UI · waterfalls |
| 19 | `next-19-client-data-fetching.html` | Client-Side Fetching | SWR · TanStack Query · route handlers as endpoints · useEffect pitfalls · polling |
| 20 | `next-20-params-searchparams.html` | params &amp; searchParams | await params · await searchParams · PageProps · LayoutProps · useParams() · typed routes |

## Group 5 — Caching & Rendering (21–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `next-21-static-vs-dynamic.html` | Static vs Dynamic Rendering | build-time vs request-time · cookies() · headers() · connection() · build output symbols |
| 22 | `next-22-use-cache.html` | Cache Components &amp; 'use cache' | cacheComponents · 'use cache' · cache keys · 'use cache: remote' · 'use cache: private' |
| 23 | `next-23-cachelife-cachetag.html` | cacheLife &amp; cacheTag | cacheLife('hours') · built-in profiles · custom profiles · cacheTag() · stale · revalidate · expire |
| 24 | `next-24-revalidation.html` | Revalidation | revalidateTag(tag, profile) · updateTag() · revalidatePath() · refresh() · read-your-writes |
| 25 | `next-25-partial-prerendering.html` | Partial Prerendering | static shell · dynamic holes · &lt;Suspense> boundaries · App Shell · instant navigation |
| 26 | `next-26-legacy-caching.html` | Previous Caching Model | fetch cache · next.revalidate · export const revalidate · force-static · unstable_cache · migrating |

## Group 6 — Mutations & Server Actions (27–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `next-27-server-actions.html` | Server Actions Basics | 'use server' · &lt;form action={fn}> · FormData · actions.ts · client calls · redirect() |
| 28 | `next-28-forms-pending-states.html` | Forms &amp; Pending States | useActionState · useFormStatus · useOptimistic · next/form &lt;Form> · Zod · returning errors |
| 29 | `next-29-action-security.html` | Server Action Security | auth in every action · public endpoints · closure encryption · bodySizeLimit · allowedOrigins · validation |

## Group 7 — Route Handlers & Proxy (30–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `next-30-route-handlers.html` | Route Handlers | route.ts · GET · POST · PUT · DELETE · NextRequest · NextResponse · Response.json() |
| 31 | `next-31-route-handler-patterns.html` | Route Handler Patterns | JSON / FormData bodies · cookies · streaming · CORS · webhooks · caching GET |
| 32 | `next-32-proxy.html` | proxy.ts (formerly middleware.ts) | export function proxy() · config.matcher · NextResponse.rewrite() · redirect() · next() · Node.js runtime |
| 33 | `next-33-request-apis.html` | Request-Time APIs | cookies() · headers() · draftMode() · connection() · after() · all async |

## Group 8 — Styling (34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `next-34-css-options.html` | CSS, CSS Modules &amp; Sass | global CSS · *.module.css · className={styles.x} · Sass · CSS ordering · clsx |
| 35 | `next-35-tailwind.html` | Tailwind CSS | Tailwind v4 · @import "tailwindcss" · @tailwindcss/postcss · @theme · dark mode · tailwind-merge |
| 36 | `next-36-css-in-js-ui-libs.html` | CSS-in-JS &amp; Component Libraries | styled-components registry · client-only constraint · shadcn/ui · Radix · server-compatible libraries |

## Group 9 — Optimizations (37–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `next-37-image.html` | next/image | &lt;Image> · width/height · fill · sizes · preload · remotePatterns · qualities · placeholder="blur" |
| 38 | `next-38-fonts.html` | next/font | next/font/google · next/font/local · variable fonts · subsets · variable option · self-hosting |
| 39 | `next-39-metadata.html` | Metadata API | export const metadata · generateMetadata() · title.template · openGraph · twitter · viewport |
| 40 | `next-40-file-metadata-seo.html` | File-Based Metadata &amp; SEO | opengraph-image.tsx · ImageResponse · sitemap.ts · robots.ts · icon · manifest.ts |
| 41 | `next-41-scripts-lazy-loading.html` | Scripts &amp; Lazy Loading | next/script · strategy · @next/third-parties · next/dynamic · ssr: false · bundle analysis |

## Group 10 — Authentication & Security (42–44)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `next-42-auth-patterns.html` | Authentication Patterns | session cookies · Auth.js · Better Auth · data access layer · verifySession() · stateless vs database sessions |
| 43 | `next-43-protecting-routes.html` | Protecting Routes &amp; Data | optimistic checks in proxy · pages vs layouts · server-only · DTOs · taint APIs |
| 44 | `next-44-security-headers-csp.html` | Security Headers &amp; CSP | headers() in config · CSP nonce via proxy · NEXT_PUBLIC_ exposure · X-Frame-Options · HSTS |

## Group 11 — Data, Environment & i18n (45–47)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 45 | `next-45-environment-variables.html` | Environment Variables | .env · .env.local · .env.production · NEXT_PUBLIC_ · load order · build-time inlining |
| 46 | `next-46-databases-orms.html` | Databases &amp; ORMs | Prisma · Drizzle · client singleton on globalThis · connection pooling · serverless drivers |
| 47 | `next-47-internationalization.html` | Internationalization | app/[lang] · generateStaticParams · getDictionary() · locale detection in proxy · next-intl · root params |

## Group 12 — Testing & Debugging (48–50)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 48 | `next-48-unit-testing.html` | Unit &amp; Component Testing | Vitest · Jest with next/jest · React Testing Library · async Server Component limits · mocking next/navigation |
| 49 | `next-49-e2e-testing.html` | End-to-End Testing | Playwright · Cypress · next build &amp;&amp; next start · webServer config · testing server actions |
| 50 | `next-50-debugging.html` | Debugging | VS Code launch config · NODE_OPTIONS='--inspect' · server vs browser logs · React DevTools · DevTools MCP |

## Group 13 — Deployment & Operations (51–55)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 51 | `next-51-build-output.html` | Builds &amp; Build Output | next build · route symbols · .next/ · Turbopack build · build caching in CI · debug flags |
| 52 | `next-52-self-hosting-docker.html` | Self-Hosting &amp; Docker | output: 'standalone' · next start · Dockerfile · sharp · cache handlers · multiple instances |
| 53 | `next-53-static-export.html` | Static Export | output: 'export' · out/ · unsupported features · trailingSlash · images.unoptimized · CDN hosting |
| 54 | `next-54-platforms-adapters.html` | Platforms &amp; Deployment Adapters | Vercel · Netlify · Cloudflare via OpenNext · adapterPath · Bun · edge vs Node.js runtime |
| 55 | `next-55-instrumentation.html` | Instrumentation &amp; Observability | instrumentation.ts · register() · onRequestError · OpenTelemetry · @vercel/otel · logging |

## Group 14 — Pages Router (Legacy) (56–58)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 56 | `next-56-pages-routing.html` | Pages Router Basics | pages/ · _app.tsx · _document.tsx · next/router · useRouter() · &lt;Head> |
| 57 | `next-57-pages-data-fetching.html` | Pages Router Data Fetching | getStaticProps · getServerSideProps · getStaticPaths · fallback · revalidate (ISR) · notFound / redirect |
| 58 | `next-58-pages-api-migration.html` | API Routes &amp; Migrating to App Router | pages/api · req / res · NextApiRequest · incremental adoption · app/ and pages/ side by side |

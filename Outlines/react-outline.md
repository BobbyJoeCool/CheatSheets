# React Reference — Outline

Planning outline for the rebuilt React set. It replaces the current 45-sheet set; `Sheets/React-Sheets/outline.md` keeps describing the live sheets until the rebuild lands.

## Profile

- **Collection section:** Web Technologies
- **Status:** Planned rewrite
- **Sheets:** 98 across 21 groups
- **File prefix:** `react` (`react-##-[slug].html`)
- **Folder:** `Sheets/React-Sheets/`
- **Target versions:** React 19.3, React Router 8, TanStack Query 5, Redux Toolkit 2, Zustand 5, Tailwind CSS 4, Vite
- **Coverage:** introduction & setup, JSX, components & props, state, events, forms, refs & effects, context, hooks rules & custom hooks, concurrent & modern features, error handling & debugging, performance, TypeScript with React, styling, routing, data fetching, state libraries, server rendering & Server Components, accessibility, testing, build & deploy

## Approach

- **Category:** framework/library, so the outline skips the language basics (output, data types, strings, operators, control flow, OOP, files, modules). Those live in the JavaScript & TypeScript set. The standard groups that do apply map to React's own concepts: components replace functions, state and effects replace variables and I/O, and error boundaries replace exceptions.
- **Audience:** intermediate / reference. JSX and props stay short; state, effects, forms, concurrent features and performance get the most sheets.
- **Deep areas:** state (7 sheets), refs & effects (7), concurrent & modern features (8), forms (6), performance (6) and routing (6). In the old set, state was one sheet, effects one sheet, and every React 19 API shared a single page.
- **Modern-first:** every sheet teaches the React 19 way first and shows the legacy form only as a "you'll still see this" note. Examples: ref as a prop before `forwardRef`, `<Context value>` before `<Context.Provider>`, TypeScript before PropTypes (PropTypes checks were removed in React 19), Vite before Create React App (deprecated February 2025).
- **Overlap:**
  - **Next.js** owns everything Next-specific: App Router files, caching, `next/image`, Next deployment. Group 18 here covers Server Components and server rendering in framework-neutral terms and points to the Next.js set.
  - **JavaScript & TypeScript** owns the language and the TypeScript type system. Group 13 here covers only React's types (`ReactNode`, event types, `ComponentProps`).
  - **CSS Systems** owns Tailwind, CSS Modules and styled-components in depth. Group 14 here covers only how each one plugs into React components.
  - **HTML** owns form semantics and ARIA reference. Groups 6 and 19 cover how to write them in JSX.
- **Size:** 98 sheets is well above the Outline Guide's 25–50 range for frameworks. The guide's rule is to start expanded, and React's state/effects/concurrency topics overflowed one page each in the old set. A merge list to about 80 is at the bottom.

## Sheet Layout (React set)

React samples are component code plus a rendered result or console output, so the set uses the HTML/CSS three-row layout:

1. **Row 1:** column 1 stacks Description → Notes → Accessibility → Version Notes → Code Explained; column 2 holds the code block.
2. **Row 2:** tables (2–3 side by side).
3. **Row 3:** Common Mistakes | Tips | Summary.

Two sections are added to every sheet:

- **Accessibility** (`section-a11y`, `id="a11y"`): what the APIs on that sheet mean for keyboard, screen-reader and focus behavior (for example, focus after a route change, `aria-busy` during Suspense).
- **Version Notes** (`section-version`, `id="version"`): the React (or library) version each API arrived in, what it replaces, and the legacy form readers will see in older code. This plays the role the Browser Support section plays in the CSS set.

## Mapping From the Previous 45-Sheet Set

| Old sheet | New sheet(s) |
|---|---|
| 01 Introduction to React | 01 |
| 02 Project Setup & Tooling | 02, 03 |
| 03 JSX Basics | 05, 06 |
| 04 JSX — Lists, Conditionals & Fragments | 07, 08, 09 |
| 05 Function Components | 10 |
| 06 Props | 11, 12 |
| 07 PropTypes & Type Checking | 63, 97 |
| 08 Component Composition | 12, 13 |
| 09 Class Components (Legacy) | 15, 54 |
| 10 useState | 16, 17, 18 |
| 11 useEffect | 34, 35 |
| 12 useContext | 39 |
| 13 useRef | 32, 33 |
| 14 useMemo & useCallback | 59 |
| 15 useReducer | 22 |
| 16 Custom Hooks | 43, 44 |
| 17 useLayoutEffect & useDebugValue | 38, 43 |
| 18 useTransition & useId | 45, 48 |
| 19 use() & React 19 Hooks | 29, 47, 50 |
| 20 Event Handling | 23, 24 |
| 21 Controlled Components | 26 |
| 22 Uncontrolled Components | 27 |
| 23 Form Libraries — React Hook Form | 30, 31 |
| 24 Lifting State Up | 20 |
| 25 Context API — Patterns | 40, 41 |
| 26 Redux Toolkit — Setup | 82 |
| 27 Redux Toolkit — Async | 83 |
| 28 Zustand | 84 |
| 29 React Router — Setup & Routes | 71, 74 |
| 30 React Router — Navigation & Params | 72, 73 |
| 31 React Router — Advanced | 74, 75 |
| 32 Fetching Data with useEffect | 37 |
| 33 TanStack Query (React Query) | 77, 78 |
| 34 SWR | 80 |
| 35 React.memo & Memoization | 58 |
| 36 Code Splitting & Lazy Loading | 61 |
| 37 Render Optimization | 57, 62 |
| 38 CSS Modules & Global Styles | 67, 68 |
| 39 Styled Components | 70 |
| 40 Tailwind CSS in React | 69 |
| 41 Testing Library — Basics | 91, 92 |
| 42 Testing Library — Interactions | 93 |
| 43 Vitest & Jest Setup | 91 |
| 44 Testing Hooks & Async | 94 |
| 45 Build, Deploy & Next Steps | 95, 96 |

New topics with no old sheet: 14, 19, 21, 25, 28, 36, 42, 46, 49, 51–53, 55, 56, 60, 64–66, 76, 79, 81, 85–90, 97, 98.

---

## Group 1 — Introduction & Setup (01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `react-01-introduction.html` | Introduction &amp; Mental Model | UI = f(state) · components · declarative rendering · one-way data flow · react vs react-dom · library vs framework |
| 02 | `react-02-creating-a-project.html` | Creating a Project | npm create vite · react-ts template · Node version · framework starters · CRA deprecation · package.json scripts |
| 03 | `react-03-project-structure.html` | Project Structure &amp; Tooling | index.html · src/main.tsx · App.tsx · vite.config.ts · public/ · eslint-plugin-react-hooks · Prettier |
| 04 | `react-04-rendering-root.html` | Rendering &amp; the Root | createRoot · root.render · &lt;StrictMode&gt; · root.unmount · multiple roots · hydrateRoot · ReactDOM.render (removed) |

## Group 2 — JSX (05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `react-05-jsx-syntax.html` | JSX Syntax | JSX → jsx() · single root · closing tags · camelCase attributes · className · htmlFor · style={{}} |
| 06 | `react-06-jsx-expressions.html` | JSX Expressions | {} · expressions vs statements · attribute expressions · template literals · {/* comments */} · string vs expression props |
| 07 | `react-07-conditional-rendering.html` | Conditional Rendering | if + early return · ternary · &amp;&amp; · the 0 pitfall · return null · element variables |
| 08 | `react-08-rendering-lists.html` | Rendering Lists | map() · key · stable IDs · index as key · filter then map · keyed Fragment |
| 09 | `react-09-fragments-escaping.html` | Fragments, Escaping &amp; Raw HTML | &lt;&gt;&lt;/&gt; · &lt;Fragment&gt; · Fragment refs · whitespace rules · {' '} · auto-escaping · dangerouslySetInnerHTML |

## Group 3 — Components & Props (10–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `react-10-function-components.html` | Function Components | capitalized names · function vs arrow · default vs named export · returning JSX · one component per file · no nested definitions |
| 11 | `react-11-props.html` | Props | passing props · destructuring · default values · read-only · {...spread} · boolean shorthand |
| 12 | `react-12-children-composition.html` | children &amp; Composition | children · slot props · containment · specialization · layout components · ReactNode |
| 13 | `react-13-composition-patterns.html` | Composition Patterns | compound components · render props · higher-order components · components as props · Children API · cloneElement (legacy) |
| 14 | `react-14-keeping-components-pure.html` | Keeping Components Pure | pure render · side effects in handlers · local mutation · StrictMode double render · idempotence · props as snapshots |
| 15 | `react-15-class-components.html` | Class Components (Legacy) | extends Component · render() · this.state · setState · componentDidMount · componentWillUnmount · hook equivalents |

## Group 4 — State (16–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `react-16-usestate.html` | useState | [value, setValue] · initial value · lazy initializer · re-render trigger · multiple state variables · per-instance state |
| 17 | `react-17-state-updates-batching.html` | State Updates &amp; Batching | state as a snapshot · queued updates · updater function · automatic batching · Object.is bailout · flushSync |
| 18 | `react-18-objects-arrays-state.html` | Objects &amp; Arrays in State | immutability · spread copies · nested updates · add/remove/replace items · toSorted() / with() · Immer / use-immer |
| 19 | `react-19-structuring-state.html` | Structuring State | derived values · redundant state · duplicated state · flattening nested state · grouping related state · impossible states |
| 20 | `react-20-sharing-state.html` | Sharing State Between Components | lifting state up · single source of truth · controlled vs uncontrolled components · prop drilling · inverse data flow |
| 21 | `react-21-preserving-resetting-state.html` | Preserving &amp; Resetting State | position in the tree · same type, same position · key to reset · nested definition bug · state across conditionals |
| 22 | `react-22-usereducer.html` | useReducer | reducer(state, action) · dispatch · action objects · init function · switch reducers · useState vs useReducer |

## Group 5 — Events (23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `react-23-event-handling.html` | Event Handling | onClick · passing handlers · handleX / onX naming · synthetic events · handler vs call · inline arrows |
| 24 | `react-24-event-propagation.html` | Event Propagation | bubbling · stopPropagation() · preventDefault() · onClickCapture · root delegation · target vs currentTarget |
| 25 | `react-25-keyboard-pointer-focus.html` | Keyboard, Pointer &amp; Focus Events | onKeyDown · e.key · onPointerDown · onFocus / onBlur · onChange per keystroke · onScroll · passive listeners |

## Group 6 — Forms (26–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `react-26-controlled-inputs.html` | Controlled Inputs | value + onChange · checked · &lt;select&gt; · multiple select · &lt;textarea&gt; · number inputs as strings |
| 27 | `react-27-uncontrolled-inputs.html` | Uncontrolled Inputs | defaultValue · defaultChecked · FormData · useRef · file inputs · form reset |
| 28 | `react-28-form-actions.html` | Form Actions | &lt;form action={fn}&gt; · FormData · async actions · formAction on buttons · automatic reset · requestFormReset |
| 29 | `react-29-useactionstate-useformstatus.html` | useActionState &amp; useFormStatus | [state, formAction, isPending] · previous state · returning errors · useFormStatus · pending · permalink |
| 30 | `react-30-react-hook-form.html` | React Hook Form | useForm · register · handleSubmit · formState.errors · Controller · watch · reset |
| 31 | `react-31-form-validation.html` | Form Validation | constraint validation · Zod schemas · safeParse · zodResolver · field errors · aria-invalid / aria-describedby |

## Group 7 — Refs & Effects (32–38)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `react-32-useref.html` | useRef | ref.current · no re-render · timer IDs · previous values · refs vs state · no reads during render |
| 33 | `react-33-dom-refs.html` | Refs to DOM Elements | ref attribute · focus() / scrollIntoView() · ref as a prop · forwardRef (legacy) · ref callback cleanup · useImperativeHandle |
| 34 | `react-34-useeffect.html` | useEffect | syncing with external systems · dependency array · cleanup · runs after paint · StrictMode double run · mount/update/unmount |
| 35 | `react-35-effect-dependencies.html` | Effect Dependencies | exhaustive-deps · object &amp; function deps · removing deps · updater functions · useEffectEvent · never suppress the linter |
| 36 | `react-36-you-might-not-need-an-effect.html` | You Might Not Need an Effect | derive during render · logic in handlers · reset with key · chained effects · notifying parents · caching with useMemo |
| 37 | `react-37-fetching-in-effects.html` | Fetching Data in Effects | fetch in useEffect · AbortController · ignore flag · loading/error state · race conditions · when to use a library |
| 38 | `react-38-layout-insertion-effects.html` | useLayoutEffect &amp; useInsertionEffect | before paint · measuring the DOM · tooltip positioning · flicker · useInsertionEffect for CSS-in-JS · SSR caveats |

## Group 8 — Context (39–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 39 | `react-39-context-basics.html` | Context Basics | createContext · &lt;Context value&gt; · Context.Provider (legacy) · useContext · default value · nearest provider wins |
| 40 | `react-40-context-patterns.html` | Context Patterns | reducer + context · provider component · useX() hook with guard · splitting state &amp; dispatch · use(Context) |
| 41 | `react-41-context-performance.html` | Context Performance &amp; Alternatives | consumers re-render · memoizing value · splitting contexts · composition before context · when to use a store |

## Group 9 — Rules of Hooks & Custom Hooks (42–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `react-42-rules-of-hooks.html` | Rules of Hooks | top level only · components &amp; hooks only · call order · use prefix · eslint-plugin-react-hooks · use() exception |
| 43 | `react-43-custom-hooks.html` | Writing Custom Hooks | extracting logic · naming · return values · composing hooks · state isn't shared · useDebugValue |
| 44 | `react-44-common-custom-hooks.html` | Common Custom Hooks | useToggle · useLocalStorage · useDebounce · useMediaQuery · useOnClickOutside · usePrevious · useOnlineStatus |
| 45 | `react-45-usesyncexternalstore-useid.html` | useSyncExternalStore &amp; useId | subscribe · getSnapshot · getServerSnapshot · tearing · useId · label &amp; aria linking |

## Group 10 — Concurrent & Modern Features (46–53)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `react-46-suspense.html` | Suspense | &lt;Suspense&gt; · fallback · nested boundaries · reveal order · Suspense-enabled data · showing stale content |
| 47 | `react-47-use-api.html` | The use() API | use(promise) · use(context) · conditional calls · caching promises · no try/catch · error boundaries |
| 48 | `react-48-usetransition.html` | useTransition &amp; startTransition | isPending · non-blocking updates · async actions · transitions + Suspense · not for text inputs |
| 49 | `react-49-usedeferredvalue.html` | useDeferredValue | deferred value · initialValue · stale indicator · vs debounce / throttle · pairing with memo |
| 50 | `react-50-useoptimistic.html` | useOptimistic | optimistic state · update function · automatic rollback · inside actions · pending markers |
| 51 | `react-51-activity.html` | Activity | &lt;Activity mode&gt; · hidden vs visible · preserving state · pre-rendering · effects in hidden trees · tabs &amp; back navigation |
| 52 | `react-52-view-transitions.html` | View Transitions | &lt;ViewTransition&gt; · enter / exit · shared element names · startTransition trigger · addTransitionType · ::view-transition CSS |
| 53 | `react-53-document-metadata-resources.html` | Document Metadata &amp; Resources | &lt;title&gt; / &lt;meta&gt; / &lt;link&gt; in components · stylesheet precedence · async scripts · preload · preinit · prefetchDNS |

## Group 11 — Error Handling & Debugging (54–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 54 | `react-54-error-boundaries.html` | Error Boundaries | getDerivedStateFromError · componentDidCatch · what isn't caught · react-error-boundary · resetKeys · boundary placement |
| 55 | `react-55-root-errors-strictmode.html` | Root Error Handling &amp; StrictMode | onCaughtError · onUncaughtError · onRecoverableError · StrictMode checks · console warnings · owner stacks |
| 56 | `react-56-devtools.html` | React DevTools | Components tab · editing props &amp; state · Profiler tab · highlight updates · owner tree · Compiler badge |

## Group 12 — Performance (57–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 57 | `react-57-how-rendering-works.html` | How Rendering Works | trigger · render · commit · reconciliation · re-render causes · bailouts |
| 58 | `react-58-memo.html` | memo | React.memo · shallow comparison · custom arePropsEqual · props that break memo · children props |
| 59 | `react-59-usememo-usecallback.html` | useMemo &amp; useCallback | caching calculations · stable callbacks · dependency arrays · when it's worth it · measuring first |
| 60 | `react-60-react-compiler.html` | React Compiler | babel-plugin-react-compiler · automatic memoization · Vite setup · 'use no memo' · compiler lint rules · incremental adoption |
| 61 | `react-61-code-splitting.html` | Code Splitting &amp; Lazy Loading | lazy() · dynamic import() · &lt;Suspense&gt; fallback · route-level splitting · preloading · default export requirement |
| 62 | `react-62-profiling-large-lists.html` | Profiling &amp; Large Lists | &lt;Profiler onRender&gt; · flame graph · virtualization · TanStack Virtual · react-window · content-visibility |

## Group 13 — TypeScript with React (63–66)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `react-63-ts-props-components.html` | TypeScript: Props &amp; Components | Props type vs interface · ReactNode · optional props &amp; defaults · React.FC · ComponentProps&lt;'button'&gt; · PropsWithChildren |
| 64 | `react-64-ts-hooks.html` | TypeScript: Hooks | useState&lt;T&gt; · null initial state · useRef&lt;HTMLInputElement&gt;(null) · reducer action unions · typed context guard · custom hook returns |
| 65 | `react-65-ts-events-forms.html` | TypeScript: Events &amp; Forms | ChangeEvent&lt;HTMLInputElement&gt; · MouseEvent · FormEvent · KeyboardEvent · handler prop types · FormData typing |
| 66 | `react-66-ts-generic-polymorphic.html` | TypeScript: Generic &amp; Polymorphic Components | generic props &lt;T,&gt; · as prop · ComponentPropsWithoutRef · discriminated union props · ref prop types · satisfies |

## Group 14 — Styling (67–70)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 67 | `react-67-styling-basics.html` | Styling Basics | className · style prop · CSS imports · clsx · conditional classes · CSS variables via style |
| 68 | `react-68-css-modules.html` | CSS Modules | .module.css · styles.x · composes · :global · dynamic class names · TypeScript declarations |
| 69 | `react-69-tailwind.html` | Tailwind CSS in React | @tailwindcss/vite · @import "tailwindcss" · cn() + tailwind-merge · cva variants · dark: variant · conditional classes |
| 70 | `react-70-css-in-js.html` | CSS-in-JS | styled-components · props in styles · ThemeProvider · runtime cost · maintenance mode · zero-runtime options · Server Component limits |

## Group 15 — Routing with React Router (71–76)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 71 | `react-71-router-setup.html` | React Router: Setup &amp; Modes | declarative / data / framework modes · createBrowserRouter · RouterProvider · BrowserRouter · &lt;Routes&gt; / &lt;Route&gt; · v7 → v8 |
| 72 | `react-72-router-navigation.html` | React Router: Navigation | &lt;Link&gt; · &lt;NavLink&gt; · useNavigate · &lt;Navigate&gt; · relative paths · replace · location state |
| 73 | `react-73-router-params.html` | React Router: Params &amp; Search Params | :param · optional segments · splat * · useParams · useSearchParams · useLocation |
| 74 | `react-74-router-nested-layouts.html` | React Router: Nested Routes &amp; Layouts | &lt;Outlet&gt; · layout routes · index routes · pathless routes · useOutletContext · 404 route |
| 75 | `react-75-router-loaders-actions.html` | React Router: Loaders &amp; Actions | loader · useLoaderData · action · &lt;Form&gt; · useFetcher · useNavigation · redirect() |
| 76 | `react-76-router-framework-mode.html` | React Router: Framework Mode | routes.ts · route modules · typegen · SSR &amp; prerender · clientLoader · ErrorBoundary export |

## Group 16 — Data Fetching (77–80)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 77 | `react-77-tanstack-query-basics.html` | TanStack Query: Setup &amp; Queries | QueryClientProvider · useQuery · queryKey · queryFn · isPending / isError · staleTime · gcTime |
| 78 | `react-78-tanstack-query-mutations.html` | TanStack Query: Mutations &amp; Cache | useMutation · invalidateQueries · setQueryData · optimistic updates · onSettled · mutation state |
| 79 | `react-79-tanstack-query-advanced.html` | TanStack Query: Advanced | queryOptions · useSuspenseQuery · useInfiniteQuery · dependent queries · prefetchQuery · select · Devtools |
| 80 | `react-80-swr.html` | SWR | useSWR · fetcher · revalidateOnFocus · mutate · useSWRMutation · conditional keys · SWRConfig |

## Group 17 — State Management Libraries (81–84)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 81 | `react-81-choosing-state-management.html` | Choosing State Management | local vs global · server vs client state · URL state · context vs store · decision table |
| 82 | `react-82-redux-toolkit.html` | Redux Toolkit: Store &amp; Slices | configureStore · createSlice · Immer in reducers · &lt;Provider&gt; · useSelector · useDispatch · typed hooks |
| 83 | `react-83-redux-toolkit-async.html` | Redux Toolkit: Async &amp; RTK Query | createAsyncThunk · extraReducers · createApi · fetchBaseQuery · providesTags / invalidatesTags · generated hooks |
| 84 | `react-84-zustand.html` | Zustand | create · set / get · selectors · useShallow · persist · devtools · slices pattern |

## Group 18 — Server Rendering & Server Components (85–88)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 85 | `react-85-rendering-strategies.html` | Rendering Strategies | CSR · SSR · SSG · streaming · hydration · choosing a framework |
| 86 | `react-86-server-components.html` | Server Components | server vs client components · async components · 'use client' · serializable props · passing JSX across the boundary · server-only |
| 87 | `react-87-server-functions.html` | Server Functions | 'use server' · calling from the client · forms + actions · validation &amp; auth · framework support · closures |
| 88 | `react-88-server-rendering-apis.html` | Server Rendering APIs | renderToReadableStream · renderToPipeableStream · prerender · hydrateRoot · hydration mismatches · suppressHydrationWarning |

## Group 19 — Accessibility (89–90)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 89 | `react-89-accessible-jsx.html` | Accessible JSX | semantic elements · aria-* attribute casing · htmlFor · alt text · useId labels · eslint-plugin-jsx-a11y |
| 90 | `react-90-focus-live-regions.html` | Focus Management &amp; Live Regions | focus on route change · dialogs &amp; focus traps · returning focus · aria-live · skip links · React Aria / Radix |

## Group 20 — Testing (91–94)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 91 | `react-91-testing-setup.html` | Testing Setup | Vitest · jsdom · @testing-library/react · jest-dom matchers · setupFiles · test scripts |
| 92 | `react-92-rtl-queries.html` | Testing Library: Queries | render · screen · getByRole · query priority · getBy / queryBy / findBy · within · screen.debug() |
| 93 | `react-93-rtl-interactions.html` | Testing Library: User Interactions | userEvent.setup() · click · type · keyboard · fireEvent vs userEvent · act |
| 94 | `react-94-testing-async-mocking.html` | Testing Async Code, Hooks &amp; Mocks | findBy · waitFor · renderHook · vi.mock · MSW · fake timers |

## Group 21 — Build, Deploy & Quick Reference (95–98)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 95 | `react-95-environment-variables.html` | Environment Variables | import.meta.env · VITE_ prefix · .env files · modes · no secrets in the client · typing env |
| 96 | `react-96-build-deploy.html` | Build &amp; Deploy | vite build · dist/ · vite preview · static hosts · SPA fallback rewrites · base path |
| 97 | `react-97-upgrading-react.html` | Upgrading React | 18 → 19 changes · codemods · removed APIs · propTypes / defaultProps · ReactDOM.render removal · @types/react changes |
| 98 | `react-98-quick-reference.html` | Quick Reference | hooks · built-in components · react-dom APIs · JSX rules · event names · directives |

---

## If You Want a Smaller Set

These merges bring the set to 83 with no topic lost. Each one puts two lighter sheets on one page, which is the trade-off the Outline Guide warns about, so fit-test the merged pages first.

| Merge | Into | Why it can work |
|---|---|---|
| 03 + 04 | Project Structure &amp; the Root | the root is a few lines in main.tsx |
| 10 + 14 | Function Components &amp; Purity | purity is a rule about the same functions |
| 20 + 21 | Sharing, Preserving &amp; Resetting State | both are about where state lives in the tree |
| 24 + 25 | Propagation &amp; Event Types | mostly tables |
| 26 + 27 | Controlled &amp; Uncontrolled Inputs | side-by-side comparison reads well |
| 30 + 31 | React Hook Form &amp; Zod | zodResolver ties them together |
| 40 + 41 | Context Patterns &amp; Performance | performance fixes are patterns |
| 43 + 44 | Custom Hooks | the common-hooks sheet is mostly code |
| 48 + 49 | Transitions &amp; Deferred Values | same problem, two APIs |
| 51 + 52 | Activity &amp; View Transitions | both newer, smaller APIs |
| 55 + 56 | StrictMode &amp; DevTools | both are debugging aids |
| 58 + 59 | Memoization | was one sheet in the old set |
| 72 + 73 | React Router: Navigation &amp; Params | was one sheet in the old set |
| 85 + 88 | Rendering Strategies &amp; APIs | the APIs illustrate the strategies |
| 95 + 96 | Environment, Build &amp; Deploy | was one sheet in the old set |

To go further, drop 76 (Framework Mode, if the set stays client-side), 80 (SWR, since TanStack Query covers the same ground) and 70 (CSS-in-JS, pointing to CSS Systems instead). That reaches 80. Getting near the guide's 50 would mean cutting whole groups, which I wouldn't recommend.

# React Reference Guide Outline (98 sheets)

## Metadata

- **Group it belongs to:** JavaScript / TypeScript
- **Folder Directory:** `Sheets/React-Sheets/react-##-[slug].html`
- **Groups:** 21
- **Sheets:** 98
- **Drafted Date:** 2026-10-10 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-10-10

## Basic Information

React 19 for intermediate and reference use. Targets React 19.3, React Router 8, TanStack Query 5, Redux Toolkit 2, Zustand 5, Tailwind CSS 4 and Vite. Every sheet teaches the React 19 way first and shows the legacy form only as a "you'll still see this" note (ref as a prop before `forwardRef`, `<Context value>` before `<Context.Provider>`, Vite before Create React App).

As a framework set it skips language basics, which live in the JavaScript & TypeScript set. Deep areas: state (7 sheets), refs and effects (7), concurrent and modern features (8), forms (6), performance (6) and routing (6). At 98 sheets it is well above the guide's 25–50 range. Next.js owns Next-specific topics; CSS Systems owns Tailwind and CSS-in-JS in depth; HTML owns form semantics and the ARIA reference.

## Differences in Layout from Basic Structure

- Three-row layout (same as HTML and CSS), because samples are component code plus a rendered result:
  1. Row 1: column 1 stacks Description → Notes → Accessibility → Version Notes → Code Explained; column 2 holds the code block.
  2. Row 2: tables (2–3 side by side).
  3. Row 3: Mistakes | Tips | Summary.
- Every sheet adds an Accessibility section (`section-a11y`, `id="a11y"`): keyboard, screen-reader and focus behavior for the APIs on that sheet.
- Every sheet adds a Version Notes section (`section-version`, `id="version"`): the version each API arrived in, what it replaces, and the legacy form.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `react-01-introduction.html` | Introduction & Mental Model | UI = f(state) · components · declarative rendering · one-way data flow · react vs react-dom · library vs framework |
| 02 | `react-02-creating-a-project.html` | Creating a Project | npm create vite · react-ts template · Node version · framework starters · CRA deprecation · package.json scripts |
| 03 | `react-03-project-structure.html` | Project Structure & Tooling | index.html · src/main.tsx · App.tsx · vite.config.ts · public/ · eslint-plugin-react-hooks · Prettier |
| 04 | `react-04-rendering-root.html` | Rendering & the Root | createRoot · root.render · &lt;StrictMode&gt; · root.unmount · multiple roots · hydrateRoot · ReactDOM.render (removed) |

### Group 2: JSX (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `react-05-jsx-syntax.html` | JSX Syntax | JSX → jsx() · single root · closing tags · camelCase attributes · className · htmlFor · style={{}} |
| 06 | `react-06-jsx-expressions.html` | JSX Expressions | {} · expressions vs statements · attribute expressions · template literals · {/* comments */} · string vs expression props |
| 07 | `react-07-conditional-rendering.html` | Conditional Rendering | if + early return · ternary · && · the 0 pitfall · return null · element variables |
| 08 | `react-08-rendering-lists.html` | Rendering Lists | map() · key · stable IDs · index as key · filter then map · keyed Fragment |
| 09 | `react-09-fragments-escaping.html` | Fragments, Escaping & Raw HTML | &lt;&gt;&lt;/&gt; · &lt;Fragment&gt; · Fragment refs · whitespace rules · {' '} · auto-escaping · dangerouslySetInnerHTML |

### Group 3: Components & Props (Sheets 10–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `react-10-function-components.html` | Function Components | capitalized names · function vs arrow · default vs named export · returning JSX · one component per file · no nested definitions |
| 11 | `react-11-props.html` | Props | passing props · destructuring · default values · read-only · {...spread} · boolean shorthand |
| 12 | `react-12-children-composition.html` | children & Composition | children · slot props · containment · specialization · layout components · ReactNode |
| 13 | `react-13-composition-patterns.html` | Composition Patterns | compound components · render props · higher-order components · components as props · Children API · cloneElement (legacy) |
| 14 | `react-14-keeping-components-pure.html` | Keeping Components Pure | pure render · side effects in handlers · local mutation · StrictMode double render · idempotence · props as snapshots |
| 15 | `react-15-class-components.html` | Class Components (Legacy) | extends Component · render() · this.state · setState · componentDidMount · componentWillUnmount · hook equivalents |

### Group 4: State (Sheets 16–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `react-16-usestate.html` | useState | [value, setValue] · initial value · lazy initializer · re-render trigger · multiple state variables · per-instance state |
| 17 | `react-17-state-updates-batching.html` | State Updates & Batching | state as a snapshot · queued updates · updater function · automatic batching · Object.is bailout · flushSync |
| 18 | `react-18-objects-arrays-state.html` | Objects & Arrays in State | immutability · spread copies · nested updates · add/remove/replace items · toSorted() / with() · Immer / use-immer |
| 19 | `react-19-structuring-state.html` | Structuring State | derived values · redundant state · duplicated state · flattening nested state · grouping related state · impossible states |
| 20 | `react-20-sharing-state.html` | Sharing State Between Components | lifting state up · single source of truth · controlled vs uncontrolled components · prop drilling · inverse data flow |
| 21 | `react-21-preserving-resetting-state.html` | Preserving & Resetting State | position in the tree · same type, same position · key to reset · nested definition bug · state across conditionals |
| 22 | `react-22-usereducer.html` | useReducer | reducer(state, action) · dispatch · action objects · init function · switch reducers · useState vs useReducer |

### Group 5: Events (Sheets 23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `react-23-event-handling.html` | Event Handling | onClick · passing handlers · handleX / onX naming · synthetic events · handler vs call · inline arrows |
| 24 | `react-24-event-propagation.html` | Event Propagation | bubbling · stopPropagation() · preventDefault() · onClickCapture · root delegation · target vs currentTarget |
| 25 | `react-25-keyboard-pointer-focus.html` | Keyboard, Pointer & Focus Events | onKeyDown · e.key · onPointerDown · onFocus / onBlur · onChange per keystroke · onScroll · passive listeners |

### Group 6: Forms (Sheets 26–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `react-26-controlled-inputs.html` | Controlled Inputs | value + onChange · checked · &lt;select&gt; · multiple select · &lt;textarea&gt; · number inputs as strings |
| 27 | `react-27-uncontrolled-inputs.html` | Uncontrolled Inputs | defaultValue · defaultChecked · FormData · useRef · file inputs · form reset |
| 28 | `react-28-form-actions.html` | Form Actions | &lt;form action={fn}&gt; · FormData · async actions · formAction on buttons · automatic reset · requestFormReset |
| 29 | `react-29-useactionstate-useformstatus.html` | useActionState & useFormStatus | [state, formAction, isPending] · previous state · returning errors · useFormStatus · pending · permalink |
| 30 | `react-30-react-hook-form.html` | React Hook Form | useForm · register · handleSubmit · formState.errors · Controller · watch · reset |
| 31 | `react-31-form-validation.html` | Form Validation | constraint validation · Zod schemas · safeParse · zodResolver · field errors · aria-invalid / aria-describedby |

### Group 7: Refs & Effects (Sheets 32–38)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `react-32-useref.html` | useRef | ref.current · no re-render · timer IDs · previous values · refs vs state · no reads during render |
| 33 | `react-33-dom-refs.html` | Refs to DOM Elements | ref attribute · focus() / scrollIntoView() · ref as a prop · forwardRef (legacy) · ref callback cleanup · useImperativeHandle |
| 34 | `react-34-useeffect.html` | useEffect | syncing with external systems · dependency array · cleanup · runs after paint · StrictMode double run · mount/update/unmount |
| 35 | `react-35-effect-dependencies.html` | Effect Dependencies | exhaustive-deps · object & function deps · removing deps · updater functions · useEffectEvent · never suppress the linter |
| 36 | `react-36-you-might-not-need-an-effect.html` | You Might Not Need an Effect | derive during render · logic in handlers · reset with key · chained effects · notifying parents · caching with useMemo |
| 37 | `react-37-fetching-in-effects.html` | Fetching Data in Effects | fetch in useEffect · AbortController · ignore flag · loading/error state · race conditions · when to use a library |
| 38 | `react-38-layout-insertion-effects.html` | useLayoutEffect & useInsertionEffect | before paint · measuring the DOM · tooltip positioning · flicker · useInsertionEffect for CSS-in-JS · SSR caveats |

### Group 8: Context (Sheets 39–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 39 | `react-39-context-basics.html` | Context Basics | createContext · &lt;Context value&gt; · Context.Provider (legacy) · useContext · default value · nearest provider wins |
| 40 | `react-40-context-patterns.html` | Context Patterns | reducer + context · provider component · useX() hook with guard · splitting state & dispatch · use(Context) |
| 41 | `react-41-context-performance.html` | Context Performance & Alternatives | consumers re-render · memoizing value · splitting contexts · composition before context · when to use a store |

### Group 9: Rules of Hooks & Custom Hooks (Sheets 42–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `react-42-rules-of-hooks.html` | Rules of Hooks | top level only · components & hooks only · call order · use prefix · eslint-plugin-react-hooks · use() exception |
| 43 | `react-43-custom-hooks.html` | Writing Custom Hooks | extracting logic · naming · return values · composing hooks · state isn't shared · useDebugValue |
| 44 | `react-44-common-custom-hooks.html` | Common Custom Hooks | useToggle · useLocalStorage · useDebounce · useMediaQuery · useOnClickOutside · usePrevious · useOnlineStatus |
| 45 | `react-45-usesyncexternalstore-useid.html` | useSyncExternalStore & useId | subscribe · getSnapshot · getServerSnapshot · tearing · useId · label & aria linking |

### Group 10: Concurrent & Modern Features (Sheets 46–53)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `react-46-suspense.html` | Suspense | &lt;Suspense&gt; · fallback · nested boundaries · reveal order · Suspense-enabled data · showing stale content |
| 47 | `react-47-use-api.html` | The use() API | use(promise) · use(context) · conditional calls · caching promises · no try/catch · error boundaries |
| 48 | `react-48-usetransition.html` | useTransition & startTransition | isPending · non-blocking updates · async actions · transitions + Suspense · not for text inputs |
| 49 | `react-49-usedeferredvalue.html` | useDeferredValue | deferred value · initialValue · stale indicator · vs debounce / throttle · pairing with memo |
| 50 | `react-50-useoptimistic.html` | useOptimistic | optimistic state · update function · automatic rollback · inside actions · pending markers |
| 51 | `react-51-activity.html` | Activity | &lt;Activity mode&gt; · hidden vs visible · preserving state · pre-rendering · effects in hidden trees · tabs & back navigation |
| 52 | `react-52-view-transitions.html` | View Transitions | &lt;ViewTransition&gt; · enter / exit · shared element names · startTransition trigger · addTransitionType · ::view-transition CSS |
| 53 | `react-53-document-metadata-resources.html` | Document Metadata & Resources | &lt;title&gt; / &lt;meta&gt; / &lt;link&gt; in components · stylesheet precedence · async scripts · preload · preinit · prefetchDNS |

### Group 11: Error Handling & Debugging (Sheets 54–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 54 | `react-54-error-boundaries.html` | Error Boundaries | getDerivedStateFromError · componentDidCatch · what isn't caught · react-error-boundary · resetKeys · boundary placement |
| 55 | `react-55-root-errors-strictmode.html` | Root Error Handling & StrictMode | onCaughtError · onUncaughtError · onRecoverableError · StrictMode checks · console warnings · owner stacks |
| 56 | `react-56-devtools.html` | React DevTools | Components tab · editing props & state · Profiler tab · highlight updates · owner tree · Compiler badge |

### Group 12: Performance (Sheets 57–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 57 | `react-57-how-rendering-works.html` | How Rendering Works | trigger · render · commit · reconciliation · re-render causes · bailouts |
| 58 | `react-58-memo.html` | memo | React.memo · shallow comparison · custom arePropsEqual · props that break memo · children props |
| 59 | `react-59-usememo-usecallback.html` | useMemo & useCallback | caching calculations · stable callbacks · dependency arrays · when it's worth it · measuring first |
| 60 | `react-60-react-compiler.html` | React Compiler | babel-plugin-react-compiler · automatic memoization · Vite setup · 'use no memo' · compiler lint rules · incremental adoption |
| 61 | `react-61-code-splitting.html` | Code Splitting & Lazy Loading | lazy() · dynamic import() · &lt;Suspense&gt; fallback · route-level splitting · preloading · default export requirement |
| 62 | `react-62-profiling-large-lists.html` | Profiling & Large Lists | &lt;Profiler onRender&gt; · flame graph · virtualization · TanStack Virtual · react-window · content-visibility |

### Group 13: TypeScript with React (Sheets 63–66)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `react-63-ts-props-components.html` | TypeScript: Props & Components | Props type vs interface · ReactNode · optional props & defaults · React.FC · ComponentProps&lt;'button'&gt; · PropsWithChildren |
| 64 | `react-64-ts-hooks.html` | TypeScript: Hooks | useState&lt;T&gt; · null initial state · useRef&lt;HTMLInputElement&gt;(null) · reducer action unions · typed context guard · custom hook returns |
| 65 | `react-65-ts-events-forms.html` | TypeScript: Events & Forms | ChangeEvent&lt;HTMLInputElement&gt; · MouseEvent · FormEvent · KeyboardEvent · handler prop types · FormData typing |
| 66 | `react-66-ts-generic-polymorphic.html` | TypeScript: Generic & Polymorphic Components | generic props &lt;T,&gt; · as prop · ComponentPropsWithoutRef · discriminated union props · ref prop types · satisfies |

### Group 14: Styling (Sheets 67–70)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 67 | `react-67-styling-basics.html` | Styling Basics | className · style prop · CSS imports · clsx · conditional classes · CSS variables via style |
| 68 | `react-68-css-modules.html` | CSS Modules | .module.css · styles.x · composes · :global · dynamic class names · TypeScript declarations |
| 69 | `react-69-tailwind.html` | Tailwind CSS in React | @tailwindcss/vite · @import "tailwindcss" · cn() + tailwind-merge · cva variants · dark: variant · conditional classes |
| 70 | `react-70-css-in-js.html` | CSS-in-JS | styled-components · props in styles · ThemeProvider · runtime cost · maintenance mode · zero-runtime options · Server Component limits |

### Group 15: Routing with React Router (Sheets 71–76)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 71 | `react-71-router-setup.html` | React Router: Setup & Modes | declarative / data / framework modes · createBrowserRouter · RouterProvider · BrowserRouter · &lt;Routes&gt; / &lt;Route&gt; · v7 → v8 |
| 72 | `react-72-router-navigation.html` | React Router: Navigation | &lt;Link&gt; · &lt;NavLink&gt; · useNavigate · &lt;Navigate&gt; · relative paths · replace · location state |
| 73 | `react-73-router-params.html` | React Router: Params & Search Params | :param · optional segments · splat * · useParams · useSearchParams · useLocation |
| 74 | `react-74-router-nested-layouts.html` | React Router: Nested Routes & Layouts | &lt;Outlet&gt; · layout routes · index routes · pathless routes · useOutletContext · 404 route |
| 75 | `react-75-router-loaders-actions.html` | React Router: Loaders & Actions | loader · useLoaderData · action · &lt;Form&gt; · useFetcher · useNavigation · redirect() |
| 76 | `react-76-router-framework-mode.html` | React Router: Framework Mode | routes.ts · route modules · typegen · SSR & prerender · clientLoader · ErrorBoundary export |

### Group 16: Data Fetching (Sheets 77–80)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 77 | `react-77-tanstack-query-basics.html` | TanStack Query: Setup & Queries | QueryClientProvider · useQuery · queryKey · queryFn · isPending / isError · staleTime · gcTime |
| 78 | `react-78-tanstack-query-mutations.html` | TanStack Query: Mutations & Cache | useMutation · invalidateQueries · setQueryData · optimistic updates · onSettled · mutation state |
| 79 | `react-79-tanstack-query-advanced.html` | TanStack Query: Advanced | queryOptions · useSuspenseQuery · useInfiniteQuery · dependent queries · prefetchQuery · select · Devtools |
| 80 | `react-80-swr.html` | SWR | useSWR · fetcher · revalidateOnFocus · mutate · useSWRMutation · conditional keys · SWRConfig |

### Group 17: State Management Libraries (Sheets 81–84)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 81 | `react-81-choosing-state-management.html` | Choosing State Management | local vs global · server vs client state · URL state · context vs store · decision table |
| 82 | `react-82-redux-toolkit.html` | Redux Toolkit: Store & Slices | configureStore · createSlice · Immer in reducers · &lt;Provider&gt; · useSelector · useDispatch · typed hooks |
| 83 | `react-83-redux-toolkit-async.html` | Redux Toolkit: Async & RTK Query | createAsyncThunk · extraReducers · createApi · fetchBaseQuery · providesTags / invalidatesTags · generated hooks |
| 84 | `react-84-zustand.html` | Zustand | create · set / get · selectors · useShallow · persist · devtools · slices pattern |

### Group 18: Server Rendering & Server Components (Sheets 85–88)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 85 | `react-85-rendering-strategies.html` | Rendering Strategies | CSR · SSR · SSG · streaming · hydration · choosing a framework |
| 86 | `react-86-server-components.html` | Server Components | server vs client components · async components · 'use client' · serializable props · passing JSX across the boundary · server-only |
| 87 | `react-87-server-functions.html` | Server Functions | 'use server' · calling from the client · forms + actions · validation & auth · framework support · closures |
| 88 | `react-88-server-rendering-apis.html` | Server Rendering APIs | renderToReadableStream · renderToPipeableStream · prerender · hydrateRoot · hydration mismatches · suppressHydrationWarning |

### Group 19: Accessibility (Sheets 89–90)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 89 | `react-89-accessible-jsx.html` | Accessible JSX | semantic elements · aria-* attribute casing · htmlFor · alt text · useId labels · eslint-plugin-jsx-a11y |
| 90 | `react-90-focus-live-regions.html` | Focus Management & Live Regions | focus on route change · dialogs & focus traps · returning focus · aria-live · skip links · React Aria / Radix |

### Group 20: Testing (Sheets 91–94)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 91 | `react-91-testing-setup.html` | Testing Setup | Vitest · jsdom · @testing-library/react · jest-dom matchers · setupFiles · test scripts |
| 92 | `react-92-rtl-queries.html` | Testing Library: Queries | render · screen · getByRole · query priority · getBy / queryBy / findBy · within · screen.debug() |
| 93 | `react-93-rtl-interactions.html` | Testing Library: User Interactions | userEvent.setup() · click · type · keyboard · fireEvent vs userEvent · act |
| 94 | `react-94-testing-async-mocking.html` | Testing Async Code, Hooks & Mocks | findBy · waitFor · renderHook · vi.mock · MSW · fake timers |

### Group 21: Build, Deploy & Quick Reference (Sheets 95–98)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 95 | `react-95-environment-variables.html` | Environment Variables | import.meta.env · VITE_ prefix · .env files · modes · no secrets in the client · typing env |
| 96 | `react-96-build-deploy.html` | Build & Deploy | vite build · dist/ · vite preview · static hosts · SPA fallback rewrites · base path |
| 97 | `react-97-upgrading-react.html` | Upgrading React | 18 → 19 changes · codemods · removed APIs · propTypes / defaultProps · ReactDOM.render removal · @types/react changes |
| 98 | `react-98-quick-reference.html` | Quick Reference | hooks · built-in components · react-dom APIs · JSX rules · event names · directives |

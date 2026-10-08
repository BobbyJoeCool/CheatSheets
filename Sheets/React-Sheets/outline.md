# React Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Complete
- **Sheets:** 45 across 12 groups
- **File prefix:** `react` (`react-##-[slug].html`)
- **Folder:** `Sheets/React-Sheets/`
- **Coverage:** JSX, components, hooks, state management, routing, data fetching, styling, testing, deployment

---

## Group 1 — Introduction & Setup (01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `react-01-introduction.html` | Introduction to React | component model · virtual DOM · declarative UI · one-way data flow · JSX |
| 02 | `react-02-project-setup.html` | Project Setup &amp; Tooling | Vite · create-react-app · npm · project structure · .env · scripts |
| 03 | `react-03-jsx-basics.html` | JSX Basics | JSX syntax · className · htmlFor · expressions · self-closing · React.createElement |
| 04 | `react-04-jsx-advanced.html` | JSX — Lists, Conditionals &amp; Fragments | key prop · Array.map · conditional rendering · &amp;&amp; · ternary · Fragment |

## Group 2 — Components (05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `react-05-function-components.html` | Function Components | function syntax · arrow components · default export · named export · component naming |
| 06 | `react-06-props.html` | Props | passing props · default props · children · prop spreading · read-only |
| 07 | `react-07-prop-types.html` | PropTypes &amp; Type Checking | PropTypes · isRequired · shape · arrayOf · oneOf · TypeScript alternative |
| 08 | `react-08-component-composition.html` | Component Composition | children · slot pattern · compound components · render props · containment |
| 09 | `react-09-class-components.html` | Class Components (Legacy) | render · this.state · setState · componentDidMount · componentDidUpdate · componentWillUnmount |

## Group 3 — Hooks — Core (10–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `react-10-usestate.html` | useState | useState · initial state · functional update · state with objects · state with arrays · batching |
| 11 | `react-11-useeffect.html` | useEffect | useEffect · dependency array · cleanup function · fetch on mount · effect timing · StrictMode |
| 12 | `react-12-usecontext.html` | useContext | createContext · useContext · Provider · context default value · prop drilling |
| 13 | `react-13-useref.html` | useRef | useRef · ref.current · DOM refs · forwardRef · mutable values · no re-render |
| 14 | `react-14-usememo-usecallback.html` | useMemo &amp; useCallback | useMemo · useCallback · referential equality · dependency array · memoization cost |
| 15 | `react-15-usereducer.html` | useReducer | useReducer · reducer function · dispatch · action · initialState · complex state |

## Group 4 — Hooks — Advanced (16–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `react-16-custom-hooks.html` | Custom Hooks | use* naming · extracting logic · useFetch · useLocalStorage · composing hooks |
| 17 | `react-17-uselayouteffect-usedebugvalue.html` | useLayoutEffect &amp; useDebugValue | useLayoutEffect · paint timing · DOM measurement · useDebugValue · DevTools label |
| 18 | `react-18-usetransition-useid.html` | useTransition &amp; useId | useTransition · startTransition · isPending · useId · concurrent mode · stable IDs |
| 19 | `react-19-use-hook.html` | use() &amp; React 19 Hooks | use() · useOptimistic · useFormStatus · useActionState · React 19 additions |

## Group 5 — Events & Forms (20–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `react-20-event-handling.html` | Event Handling | onClick · onChange · onSubmit · SyntheticEvent · preventDefault · stopPropagation |
| 21 | `react-21-controlled-components.html` | Controlled Components | controlled input · value prop · onChange · controlled select · controlled textarea |
| 22 | `react-22-uncontrolled-components.html` | Uncontrolled Components | useRef · defaultValue · file input · ref on form element · when to use |
| 23 | `react-23-form-libraries.html` | Form Libraries — React Hook Form | register · handleSubmit · formState.errors · validation rules · Controller · watch |

## Group 6 — State Management (24–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `react-24-lifting-state.html` | Lifting State Up | shared state · single source of truth · prop drilling · lifting pattern |
| 25 | `react-25-context-api.html` | Context API — Patterns | global state · context + useReducer · provider tree · avoid re-renders · splitting contexts |
| 26 | `react-26-redux-toolkit.html` | Redux Toolkit — Setup | configureStore · createSlice · Provider · useSelector · useDispatch |
| 27 | `react-27-redux-toolkit-async.html` | Redux Toolkit — Async | createAsyncThunk · extraReducers · pending/fulfilled/rejected · RTK Query basics |
| 28 | `react-28-zustand.html` | Zustand | create · set · get · devtools middleware · persist middleware · selector pattern |

## Group 7 — Routing (29–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `react-29-react-router-setup.html` | React Router — Setup &amp; Routes | BrowserRouter · Routes · Route · path · element · index route · 404 route |
| 30 | `react-30-react-router-navigation.html` | React Router — Navigation &amp; Params | Link · NavLink · useNavigate · useParams · useSearchParams · navigate() |
| 31 | `react-31-react-router-advanced.html` | React Router — Advanced | Outlet · nested routes · loader · action · errorElement · lazy loading routes |

## Group 8 — Data Fetching (32–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `react-32-fetch-useeffect.html` | Fetching Data with useEffect | fetch · async/await in useEffect · loading state · error state · cleanup/abort |
| 33 | `react-33-react-query.html` | TanStack Query (React Query) | useQuery · useMutation · queryClient · staleTime · refetch · invalidateQueries |
| 34 | `react-34-swr.html` | SWR | useSWR · fetcher · revalidation · mutate · conditional fetching · SWR config |

## Group 9 — Performance (35–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `react-35-memo.html` | React.memo &amp; Memoization | React.memo · shallow comparison · when to memo · memo with custom comparison |
| 36 | `react-36-code-splitting.html` | Code Splitting &amp; Lazy Loading | React.lazy · Suspense · dynamic import() · fallback · route-level splitting |
| 37 | `react-37-render-optimization.html` | Render Optimization | reconciliation · key prop · avoiding anonymous functions · batching · Profiler |

## Group 10 — Styling (38–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `react-38-css-modules.html` | CSS Modules &amp; Global Styles | .module.css · styles.className · composes · :global · CSS variables |
| 39 | `react-39-styled-components.html` | Styled Components | styled.div · template literals · props in styles · ThemeProvider · createGlobalStyle |
| 40 | `react-40-tailwind-react.html` | Tailwind CSS in React | className strings · clsx · cn utility · conditional classes · dark mode · Tailwind config |

## Group 11 — Testing (41–44)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 41 | `react-41-testing-library-basics.html` | Testing Library — Basics | render · screen · getByRole · getByText · queryBy · findBy · cleanup |
| 42 | `react-42-testing-library-interactions.html` | Testing Library — Interactions | userEvent · fireEvent · click · type · keyboard · waitFor · act |
| 43 | `react-43-vitest-jest.html` | Vitest &amp; Jest Setup | describe · it · expect · vi.fn() · vi.mock() · beforeEach · afterEach |
| 44 | `react-44-testing-hooks.html` | Testing Hooks &amp; Async | renderHook · act · waitForNextUpdate · mocking fetch · testing useEffect |

## Group 12 — Deployment (45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 45 | `react-45-deployment.html` | Build, Deploy &amp; Next Steps | npm run build · Vite build · Vercel · Netlify · env vars · Next.js · Remix overview |

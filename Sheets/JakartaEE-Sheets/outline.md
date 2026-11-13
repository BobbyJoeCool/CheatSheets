# Jakarta EE Reference Guide Outline (40 sheets)

## Metadata

- **Group it belongs to:** Java
- **Index position:** Java section, after IntelliJ IDEA (Java, Maven and IntelliJ IDEA hold the first three spots).
- **Folder Directory:** `Sheets/JakartaEE-Sheets/jee-##-[slug].html`
- **PDF Name:** `Jakarta EE Reference Guide.pdf`
- **Groups:** 10
- **Sheets:** 40
- **Drafted Date:** 2026-11-05
- **Verified-Finalized Date:** 2026-11-10

## Basic Information

Jakarta EE for intermediate Java developers who know the language and have used a build tool, and either work on a Jakarta EE server app or use Spring Boot (which runs on the same `jakarta.*` APIs). It covers the platform and its profiles, the JavaBeans component model and every kind of "bean" Jakarta builds on it, CDI, the web tier (Servlets, Faces, WebSocket), REST and JSON, persistence and Jakarta Data, transactions, validation, security, concurrency and messaging, then testing and MicroProfile.

Targets Jakarta EE 11 (Java 17+, Java 21 recommended for virtual threads in Concurrency 3.1). Jakarta EE 12 is still in milestone releases, so it gets short "EE 12" notes where a spec is changing instead of its own sheet. If EE 12 goes final before the set is built, sheet 38 picks up a "What's New in EE 12" half and the notes stay. Code is annotation-first; deployment descriptors (`web.xml`, `beans.xml`, `persistence.xml`) are shown only where they're still needed.

Scope limits: no deep JSP (the JSP set covers it; sheet 17 is a primer that points there), no application-server admin beyond what a developer needs to deploy, and EJB is kept to the session-bean features still worth using (entity beans and remote EJB home interfaces are out). Spring comparisons live in the extra box, not in the main content.

### JavaBeans coverage

JavaBeans is technically a Java SE spec (`java.beans`), not a Jakarta spec, but every Jakarta component model is built on its conventions, so the set gives it a full group (Group 2) before CDI. That group covers the plain JavaBeans conventions and introspection API, then maps them to each Jakarta bean type: CDI beans, Enterprise Beans (EJB session beans and message-driven beans), Faces backing beans, JPA entities and validated beans. Sheet 07 is the "which bean is which" sheet the rest of the set points back to.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Spring Equivalent** (`id="spring"`) and **Prefer / Avoid** (`id="prefer"`) in Row 2 under Code Explained on 01–38 · **Under the Container** (`id="container"`) in Row 1 as a third column on the 14 sheets listed below. None on the quick references (39–40). Details below.
- The standard language group template does not apply. Groups follow the layers of a Jakarta app: platform → beans → CDI → web → REST → data → cross-cutting services → testing and production.
- Code blocks are Java for most sheets, XML (Prism `markup`) for descriptors and `pom.xml`, Facelets XHTML (`markup`) on the Faces sheets, and Bash for server CLI commands.
- Every sheet's header carries a small spec tag with the spec name and EE 11 version (e.g. `Jakarta Persistence 3.2`), so readers can match the sheet to the spec docs.
- `jee-cheatsheet.css` gives the sheet-number badge a Jakarta orange accent and adds `.section-spring`, `.section-prefer` and `.section-container` styles with their own accent colors.

### Spring Equivalent box (`id="spring"`, 01–38)

- `<section class="section-notes section-spring" id="spring">`, title **Spring Equivalent**.
- 2–4 `note-item` lines mapping this sheet's Jakarta API to its Spring / Spring Boot form, Jakarta first: `@Inject` → constructor injection / `@Autowired` · `@ApplicationScoped` → singleton `@Component` · JAX-RS `@Path` → `@RestController` + `@RequestMapping` · `@Stateless` + container transactions → `@Service` + `@Transactional`.
- Note where Spring uses the Jakarta API directly (JPA, Bean Validation, Servlet) instead of an alternative, since that's the most common real-world overlap.
- End with a pointer to the matching Spring sheet when there is one (`See Spring 14`). Sheet pointers get filled in at build time against the current Spring set.

### Prefer / Avoid box (`id="prefer"`, 01–38)

- `<section class="section-notes section-prefer" id="prefer">`, title **Prefer / Avoid**, same format as the Java and Swing sets.
- 2–4 avoid/prefer pairs: a small code block with `// avoid` / `// prefer` comments, or `note-item` lines when one-liners are enough.
- Every pair must be a real modern-Jakarta idiom for the sheet's topic (`@ManagedBean` → `@Named` CDI bean · `@EJB` field injection → `@Inject` · `@Stateless` just for transactions → CDI bean + `@Transactional` · `javax.*` imports → `jakarta.*` · JNDI lookups → injection), never a restatement of Common Mistakes.

### Under the Container box (`id="container"`, Row 1, selected sheets)

- `<section class="section-notes section-container" id="container">`, title **Under the Container**, Row 1 as a third column (`col-1-3`).
- 2–4 items on what the server actually does when the sheet's code runs: proxies, pooling, thread binding, when the persistence context flushes, how a request reaches a servlet.
- Each item should change how someone writes or debugs the code. Skip trivia.
- If a sheet doesn't fit on one page, cut Under the Container to 2 items first, then Prefer / Avoid, then Spring Equivalent, before touching the main content.

| # | Under the Container content |
|---|---|
| 03 | the server provides the API jars, so `jakartaee-api` is `provided` scope · classloader per app · why bundling a spec jar causes `ClassCastException` |
| 06 | `Introspector` derives properties from method names, not fields · `BeanInfo` caching · how EL and Faces resolve `#{user.name}` through introspection |
| 08 | stateless beans are pooled and any instance can serve any call · container-managed transactions wrap every business method by default · calling `this.method()` skips the proxy |
| 11 | CDI injects a client proxy, not the instance, for normal scopes · bean discovery modes (`annotated` vs `all`) · build-time vs runtime discovery (CDI Lite) |
| 12 | contextual instances are stored per scope context · `@Dependent` beans share their owner's lifecycle · why a `@RequestScoped` bean injected into an `@ApplicationScoped` one still works |
| 14 | interceptors are applied through the same proxy · self-invocation bypasses them · interceptor ordering with `@Priority` |
| 15 | one servlet instance serves many threads, so instance fields are shared · the filter chain runs before the servlet · async servlets release the container thread |
| 18 | the Faces request lifecycle's six phases · where validation and model updates happen · view state saved client- or server-side |
| 21 | JAX-RS resources are request-scoped by default · how the runtime picks a `MessageBodyReader`/`Writer` from `@Consumes`/`@Produces` |
| 27 | the persistence context is a first-level cache · dirty checking at flush · flush happens before queries and at commit · transaction-scoped vs extended contexts |
| 28 | JPQL is translated to SQL per dialect · N+1 from lazy associations · `JOIN FETCH` and entity graphs change the generated SQL |
| 30 | JTA binds the transaction to the thread · `REQUIRED` joins, `REQUIRES_NEW` suspends · runtime exceptions roll back, checked exceptions don't unless configured |
| 33 | managed executors propagate context (security, naming, CDI) that a raw `ExecutorService` drops · virtual threads with `virtual = true` |
| 34 | message-driven beans are pooled consumers · the container acknowledges the message when the transaction commits · redelivery on rollback |

### Placement

| Sheet has | Row 1 | col-2-2 (beside the code) |
|---|---|---|
| No Under the Container box | Description · Notes | Code Explained, then Spring Equivalent, then Prefer / Avoid |
| Under the Container box | Description · Notes · Under the Container (`col-1-3`) | Code Explained, then Spring Equivalent, then Prefer / Avoid |

## Groups

### Group 1: Platform & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `jee-01-introduction.html` | Introduction & the Platform | specifications vs implementations · Core / Web / Platform profiles · compatible runtimes · Jakarta EE vs Spring · MicroProfile relationship |
| 02 | `jee-02-namespace-versions.html` | javax → jakarta & Version History | Java EE 8 → Jakarta EE 8 → 9 namespace change · EE 10 · EE 11 · Java 17 baseline · removed specs (Managed Beans, SecurityManager) · migration tools (OpenRewrite, Eclipse Transformer) |
| 03 | `jee-03-runtimes-project-setup.html` | Runtimes & Project Setup | WildFly · Payara · Open Liberty · GlassFish · TomEE · `jakarta.jakartaee-api` (provided) · `jakartaee-web-api` · war packaging · Jakarta EE starter |
| 04 | `jee-04-app-structure-deployment.html` | App Structure & Deployment | `WEB-INF/` · `web.xml` (optional) · `beans.xml` · `persistence.xml` · war vs ear · deploy folder / CLI / Maven plugin · context root |

### Group 2: JavaBeans & the Bean Models (Sheets 05–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `jee-05-javabeans-conventions.html` | JavaBeans Conventions | public no-arg constructor · private fields · `getX` / `setX` · `isX` for boolean · `Serializable` · properties vs fields · records and where they fit |
| 06 | `jee-06-javabeans-introspection-events.html` | Introspection & Property Change Events | `java.beans.Introspector` · `BeanInfo` · `PropertyDescriptor` · `PropertyChangeSupport` · `PropertyChangeListener` · bound and constrained properties · `VetoableChangeListener` |
| 07 | `jee-07-bean-types-map.html` | Which Bean Is Which? | JavaBean · CDI bean · Enterprise Bean (session / message-driven) · Faces backing bean · JPA entity · validated bean · comparison table: lifecycle, scope, transactions, who creates it |

Sheet 07 is a comparison sheet (table in the Code area, no code block). Every later bean sheet points back to it. The Swing set covers bound properties in a UI context; sheet 06 points there.

### Group 3: Enterprise Beans (Sheets 08–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `jee-08-stateless-singleton-beans.html` | Stateless & Singleton Session Beans | `@Stateless` · `@Singleton` · `@Startup` · `@Lock(READ / WRITE)` · `@ConcurrencyManagement` · no-interface view · `@Local` |
| 09 | `jee-09-stateful-lifecycle-timers.html` | Stateful Beans, Lifecycle & Timers | `@Stateful` · `@Remove` · `@PostConstruct` / `@PreDestroy` · passivation · `@Asynchronous` · `@Schedule` · `TimerService` |
| 10 | `jee-10-ejb-vs-cdi.html` | Enterprise Beans vs CDI Beans | what EJB still adds (pooling, timers, MDBs, `@Lock`) · CDI + `@Transactional` instead · EE 11/12 direction (CDI-first) · when to keep EJB in legacy code |

### Group 4: CDI (Sheets 11–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `jee-11-cdi-basics.html` | CDI Basics & Injection | `@Inject` (constructor / field / setter) · `@Named` · bean-defining annotations · `beans.xml` discovery modes · CDI Lite vs CDI Full · `Instance<T>` |
| 12 | `jee-12-cdi-scopes-lifecycle.html` | Scopes & Lifecycle | `@RequestScoped` · `@SessionScoped` · `@ApplicationScoped` · `@ConversationScoped` · `@Dependent` · `@PostConstruct` / `@PreDestroy` · client proxies |
| 13 | `jee-13-qualifiers-producers.html` | Qualifiers, Producers & Alternatives | `@Qualifier` · `@Default` / `@Any` · `@Produces` / `@Disposes` · `InjectionPoint` · `@Alternative` + `@Priority` · ambiguous / unsatisfied dependency errors |
| 14 | `jee-14-events-interceptors-decorators.html` | Events, Interceptors & Decorators | `Event<T>.fire()` · `@Observes` / `@ObservesAsync` · `@Interceptor` · `@InterceptorBinding` · `@AroundInvoke` · `@Decorator` · `@Priority` ordering |

### Group 5: Web Tier (Sheets 15–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `jee-15-servlets.html` | Servlets | `HttpServlet` · `@WebServlet` · `doGet` / `doPost` · `HttpServletRequest` / `Response` · request dispatching · async servlets |
| 16 | `jee-16-filters-listeners-sessions.html` | Filters, Listeners & Sessions | `@WebFilter` · `FilterChain` · `@WebListener` · `ServletContextListener` · `HttpSession` · cookies · session timeout |
| 17 | `jee-17-pages-expression-language.html` | Pages & Expression Language | Jakarta Pages (JSP) primer · Jakarta EL `${}` vs `#{}` · EL resolving JavaBean properties · implicit objects · EL lambdas · pointer to the JSP set |
| 18 | `jee-18-faces-basics.html` | Faces Basics | Facelets XHTML · `@Named` + scope backing beans · `h:form` / `h:inputText` / `h:commandButton` · `#{bean.property}` · `FacesContext` · Faces 4.x |
| 19 | `jee-19-faces-navigation-ajax.html` | Faces Navigation, Validation & AJAX | implicit navigation · `faces-redirect` · `f:validateBean` · converters · `f:ajax` · templates (`ui:composition`) · PrimeFaces mention |
| 20 | `jee-20-websocket.html` | WebSocket | `@ServerEndpoint` · `@OnOpen` / `@OnMessage` / `@OnClose` / `@OnError` · `Session` · encoders / decoders · broadcasting · client endpoint |

### Group 6: REST & JSON (Sheets 21–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `jee-21-rest-resources.html` | REST Resources | `@ApplicationPath` · `@Path` · `@GET` / `@POST` / `@PUT` / `@DELETE` · `@Produces` / `@Consumes` · sub-resources · Jakarta REST 4.0 |
| 22 | `jee-22-rest-params-responses.html` | Parameters, Responses & Errors | `@PathParam` · `@QueryParam` · `@BeanParam` · `Response.ok()` / `status()` · `WebApplicationException` · `ExceptionMapper` · `UriInfo` |
| 23 | `jee-23-json-p-json-b.html` | JSON Processing & Binding | `JsonbBuilder` · `@JsonbProperty` · `@JsonbTransient` · adapters · `Json.createObjectBuilder()` · `JsonPointer` / `JsonPatch` · records with JSON-B |
| 24 | `jee-24-rest-client-providers.html` | REST Client, Filters & Providers | `ClientBuilder` · `WebTarget` · async client · `ContainerRequestFilter` / `ContainerResponseFilter` · `@Provider` · `@NameBinding` · CORS filter |

The HTTP & REST APIs set covers status codes, methods and API design; these sheets cover the Jakarta API only.

### Group 7: Persistence & Data (Sheets 25–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `jee-25-persistence-entities.html` | Entities & persistence.xml | `@Entity` · `@Id` / `@GeneratedValue` · `@Column` · `@Table` · persistence unit · JTA datasource · `@Embeddable` · Jakarta Persistence 3.2 |
| 26 | `jee-26-persistence-relationships.html` | Relationships & Inheritance | `@OneToMany` / `@ManyToOne` · `@ManyToMany` · `mappedBy` · cascade · `FetchType.LAZY` · `@Inheritance` strategies · `@MappedSuperclass` |
| 27 | `jee-27-entitymanager-lifecycle.html` | EntityManager & Entity Lifecycle | `@PersistenceContext` · `persist` / `find` / `merge` / `remove` · new / managed / detached / removed · `flush` · lifecycle callbacks (`@PrePersist`) |
| 28 | `jee-28-jpql-criteria.html` | JPQL, Criteria & Fetching | `createQuery` · named parameters · `@NamedQuery` · `JOIN FETCH` · entity graphs · Criteria API · pagination · `TypedQuery` |
| 29 | `jee-29-jakarta-data.html` | Jakarta Data Repositories | `@Repository` · `CrudRepository` / `BasicRepository` · `@Find` / `@Query` · method-name queries · `PageRequest` · `Order` · new in EE 11 |
| 30 | `jee-30-transactions.html` | Transactions | JTA · `@Transactional` (CDI) · `TxType` (REQUIRED, REQUIRES_NEW, MANDATORY…) · `rollbackOn` / `dontRollbackOn` · `@TransactionAttribute` (EJB) · `UserTransaction` |

The SQL and Prisma sets cover databases and other ORMs; sheet 25 points to SQL for schema design.

### Group 8: Validation, Security, Concurrency & Messaging (Sheets 31–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `jee-31-bean-validation.html` | Bean Validation | `@NotNull` · `@Size` · `@Email` · `@Valid` cascading · validation groups · custom `ConstraintValidator` · method validation on REST/CDI · record components |
| 32 | `jee-32-security.html` | Security | Jakarta Security · `@RolesAllowed` / `@PermitAll` · `SecurityContext` · identity stores · `@BasicAuthenticationMechanismDefinition` · OpenID Connect · `@DeclareRoles` |
| 33 | `jee-33-concurrency.html` | Concurrency | `ManagedExecutorService` · `@ManagedExecutorDefinition` · `ManagedScheduledExecutorService` · `@Asynchronous` (Concurrency) · context propagation · virtual threads · Concurrency 3.1 |
| 34 | `jee-34-messaging.html` | Messaging | Jakarta Messaging (JMS) · `JMSContext` · queues vs topics · `@MessageDriven` · `MessageListener` · acknowledgement modes · `@JMSConnectionFactoryDefinition` |
| 35 | `jee-35-batch-mail-other.html` | Batch, Mail & Other Specs | Jakarta Batch (job XML, chunk / batchlet) · Jakarta Mail (`Session`, `MimeMessage`) · Jakarta XML Binding / SOAP status · what's optional or pruned |

### Group 9: Testing, MicroProfile & Production (Sheets 36–38)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `jee-36-testing.html` | Testing Jakarta Apps | unit-testing CDI beans with JUnit · Weld JUnit · Arquillian · Testcontainers with a real server · REST Assured · mocking `EntityManager` |
| 37 | `jee-37-microprofile.html` | MicroProfile | MicroProfile Config (`@ConfigProperty`) · Health (`@Liveness` / `@Readiness`) · Fault Tolerance (`@Retry`, `@Timeout`, `@CircuitBreaker`) · OpenAPI · Telemetry · Rest Client |
| 38 | `jee-38-packaging-production.html` | Packaging, Containers & What's Next | thin war vs uber jar / bootable jar · Docker images per runtime · config by environment · logging · EE 12 changes in progress |

Sheet 36 covers the Jakarta side only; the JUnit set covers JUnit itself. Sheet 38 points to the Docker and Kubernetes sets.

### Group 10: Quick Reference (Sheets 39–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 39 | `jee-39-quickref-annotations.html` | Quick Reference: Annotations | CDI · Enterprise Beans · Servlet · REST · Persistence · Validation · Security · Transactions · one line each, grouped by spec |
| 40 | `jee-40-quickref-specs-files.html` | Quick Reference: Specs, Versions & Files | EE 11 spec list with versions · profile membership (Core / Web / Platform) · javax → jakarta package map · `beans.xml` / `persistence.xml` / `web.xml` minimal snippets |

No explanation boxes. Dense tables; every row points back to the sheet with details.

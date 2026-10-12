# Spring Reference Guide Outline (67 sheets)

## Metadata

- **Group it belongs to:** Java
- **Folder Directory:** `Sheets/Spring-Sheets/sp-##-[slug].html`
- **Groups:** 14
- **Sheets:** 67
- **Drafted Date:** 2026-10-02
- **Verified-Finalized Date:**

## Basic Information

Spring Boot as the entry point to the Java Spring ecosystem, for intermediate readers who know Java and are new to moderately experienced with Spring. It covers the Spring Framework core underneath Boot plus the four projects almost every Boot app uses: Spring MVC, Spring Data JPA, Spring Security and Actuator. Targets Spring Boot 4.1 / Spring Framework 7.0 (Java 17+ baseline, Jakarta EE 11, Jackson 3, JSpecify null safety, built-in API versioning, `@Retryable`, HTTP interface clients, `RestTestClient`).

The deep areas are dependency injection and the container, configuration, Spring MVC (REST), Spring Data JPA, Spring Security and testing. At 67 sheets it is above the guide's 25–50 framework range for the same reason as Django: Spring Boot is a full application platform closer in scope to a language. The Boot 4 / Framework 7 APIs on sheets 25, 26, 31, 54 and 64 should be checked against the current reference docs when built.

## Differences in Layout from Basic Structure

- As a framework set it skips the language-basics groups; Java itself lives in the Java set.
- Groups follow Spring's own concepts (container, configuration, AOP, MVC, data, security, testing, ops) after Introduction & Setup.
- Some sheets stack two code blocks in the code column (for example a Java class plus its `application.yml`, or build file plus shell commands). Prism languages used: `java`, `yaml`, `properties`, `bash`, `kotlin` (Gradle Kotlin DSL) and `markup` (Maven XML, Thymeleaf).
- Sheet CSS is `Sheets/CSS/spring-cheatsheet.css` (Spring-green sheet-number badge).

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `sp-01-introduction.html` | Introduction & Ecosystem | Spring Framework vs Spring Boot · IoC · convention over configuration · Spring projects · release cadence · OSS support window |
| 02 | `sp-02-project-setup.html` | Creating a Project | start.spring.io · spring init · Maven vs Gradle · spring-boot-starter-parent · BOM · Java version |
| 03 | `sp-03-starters-dependencies.html` | Starters & Dependency Management | spring-boot-starter-web · starter-data-jpa · starter-security · starter-test · dependency versions · exclusions |
| 04 | `sp-04-application-structure.html` | Application Structure | @SpringBootApplication · main() · SpringApplication.run() · package layout · component scan root · resources/ |
| 05 | `sp-05-running-devtools.html` | Running, Building & DevTools | mvnw spring-boot:run · gradlew bootRun · executable jar · spring-boot-devtools · auto-restart · LiveReload |

### Group 2: Core Container: IoC & Dependency Injection (Sheets 06–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `sp-06-ioc-container.html` | The IoC Container | ApplicationContext · BeanFactory · bean definitions · getBean() · container startup · CommandLineRunner |
| 07 | `sp-07-stereotype-annotations.html` | Stereotypes & Component Scanning | @Component · @Service · @Repository · @Controller · @ComponentScan · basePackages |
| 08 | `sp-08-dependency-injection.html` | Dependency Injection | constructor injection · @Autowired · field vs setter injection · final fields · Optional / ObjectProvider · List&lt;T&gt; injection |
| 09 | `sp-09-configuration-bean.html` | @Configuration & @Bean | @Configuration · @Bean · method names as bean names · proxyBeanMethods · @Import · third-party beans |
| 10 | `sp-10-qualifiers-primary.html` | Resolving Ambiguity | @Qualifier · @Primary · @Fallback · bean name matching · NoUniqueBeanDefinitionException · custom qualifiers |
| 11 | `sp-11-bean-scopes.html` | Bean Scopes | singleton · prototype · request · session · @Scope · scoped proxies · @Lazy |
| 12 | `sp-12-bean-lifecycle.html` | Bean Lifecycle & Callbacks | @PostConstruct · @PreDestroy · InitializingBean · DisposableBean · BeanPostProcessor · SmartLifecycle |

### Group 3: Configuration & Auto-Configuration (Sheets 13–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `sp-13-properties-yaml.html` | application.properties & YAML | application.yml · property syntax · relaxed binding · placeholders ${} · spring.config.import · .env-style overrides |
| 14 | `sp-14-value-environment.html` | @Value & Environment | @Value("${...}") · default values · SpEL #{} · Environment · getProperty() · @PropertySource |
| 15 | `sp-15-configuration-properties.html` | @ConfigurationProperties | @ConfigurationProperties · prefix · records · @Validated · @EnableConfigurationProperties · metadata |
| 16 | `sp-16-profiles.html` | Profiles | @Profile · spring.profiles.active · application-{profile}.yml · profile groups · default profile · env var SPRING_PROFILES_ACTIVE |
| 17 | `sp-17-auto-configuration.html` | Auto-Configuration & Conditionals | @AutoConfiguration · @ConditionalOnClass · @ConditionalOnMissingBean · @ConditionalOnProperty · --debug report · exclude= |

### Group 4: Aspect-Oriented Programming (Sheets 18–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `sp-18-aop-concepts.html` | AOP Concepts & Proxies | aspect · join point · pointcut · advice · JDK vs CGLIB proxies · self-invocation pitfall |
| 19 | `sp-19-aop-advice-pointcuts.html` | Advice & Pointcut Expressions | @Aspect · @Before · @AfterReturning · @Around · ProceedingJoinPoint · execution() · @annotation() |

### Group 5: Spring MVC: Building REST APIs (Sheets 20–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `sp-20-controllers-mappings.html` | Controllers & Request Mappings | @RestController · @RequestMapping · @GetMapping · @PostMapping · @PutMapping · @DeleteMapping · produces / consumes |
| 21 | `sp-21-request-data.html` | Reading Request Data | @PathVariable · @RequestParam · @RequestBody · @RequestHeader · @CookieValue · @ModelAttribute · defaults |
| 22 | `sp-22-responses.html` | Building Responses | ResponseEntity · @ResponseStatus · HttpStatus · headers · ResponseEntity.created() · noContent() |
| 23 | `sp-23-validation.html` | Bean Validation | @Valid · @Validated · @NotNull · @NotBlank · @Size · @Email · BindingResult · MethodArgumentNotValidException |
| 24 | `sp-24-exception-handling.html` | Exception Handling | @ExceptionHandler · @RestControllerAdvice · ProblemDetail · ErrorResponseException · ResponseStatusException · spring.mvc.problemdetails |
| 25 | `sp-25-json-jackson.html` | JSON & Jackson | JsonMapper · @JsonProperty · @JsonIgnore · @JsonFormat · records as DTOs · spring.jackson.* · Jackson 3 changes |
| 26 | `sp-26-api-versioning.html` | API Versioning | version= on mappings · ApiVersionConfigurer · header / path / query param strategies · spring.mvc.apiversion.* · deprecation |
| 27 | `sp-27-filters-interceptors-cors.html` | Filters, Interceptors & CORS | OncePerRequestFilter · HandlerInterceptor · preHandle() · WebMvcConfigurer · @CrossOrigin · addCorsMappings() |

### Group 6: Server-Side Views (Sheets 28–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `sp-28-thymeleaf-basics.html` | Thymeleaf Basics | @Controller · Model · returning view names · th:text · th:each · th:if · th:href @{} · layouts |
| 29 | `sp-29-thymeleaf-forms-static.html` | Thymeleaf Forms & Static Resources | th:object · th:field · @ModelAttribute · validation errors · redirect: · RedirectAttributes · static/ |

### Group 7: HTTP Clients (Sheets 30–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `sp-30-restclient.html` | RestClient | RestClient.builder() · get().uri() · retrieve() · body() · toEntity() · onStatus() · RestClient.Builder bean |
| 31 | `sp-31-http-interface-clients.html` | HTTP Interface Clients | @HttpExchange · @GetExchange · @PostExchange · @ImportHttpServices · HttpServiceProxyFactory · service groups |
| 32 | `sp-32-webclient.html` | WebClient | WebClient.create() · retrieve() · bodyToMono() · bodyToFlux() · block() · timeouts · when to prefer RestClient |

### Group 8: Data Access: JDBC & Schema (Sheets 33–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `sp-33-datasource-config.html` | DataSource Configuration | spring.datasource.url · username / password · HikariCP · H2 console · PostgreSQL / MySQL drivers · connection pool settings |
| 34 | `sp-34-jdbcclient.html` | JdbcClient & JdbcTemplate | JdbcClient · sql() · param() · query(Class) · single() · update() · JdbcTemplate · RowMapper |
| 35 | `sp-35-schema-migrations.html` | Schema Init & Migrations | schema.sql · data.sql · spring.sql.init.mode · Flyway · V1__init.sql · Liquibase · ddl-auto |

### Group 9: Spring Data JPA (Sheets 36–44)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `sp-36-jpa-entities.html` | JPA Entities | @Entity · @Table · @Id · @GeneratedValue · @Column · @Enumerated · @Embedded · equals/hashCode |
| 37 | `sp-37-jpa-relationships.html` | Entity Relationships | @ManyToOne · @OneToMany · mappedBy · @ManyToMany · @JoinColumn · cascade · orphanRemoval · FetchType.LAZY |
| 38 | `sp-38-repositories.html` | Repositories | JpaRepository · CrudRepository · ListCrudRepository · save() · findById() · deleteById() · @EnableJpaRepositories |
| 39 | `sp-39-derived-queries.html` | Derived Query Methods | findBy · And / Or · Containing · Between · OrderBy · existsBy · countBy · Top / First |
| 40 | `sp-40-custom-queries.html` | @Query & Projections | @Query JPQL · nativeQuery · named params · @Modifying · interface projections · DTO / record projections |
| 41 | `sp-41-paging-sorting.html` | Paging & Sorting | Pageable · PageRequest.of() · Sort · Page&lt;T&gt; · Slice · Window / ScrollPosition · ?page=&size=&sort= |
| 42 | `sp-42-transactions.html` | Transactions | @Transactional · propagation · isolation · readOnly · rollbackFor · self-invocation pitfall · TransactionTemplate |
| 43 | `sp-43-fetching-performance.html` | Fetching & N+1 Problems | lazy loading · LazyInitializationException · JOIN FETCH · @EntityGraph · open-in-view · spring.jpa.show-sql |
| 44 | `sp-44-auditing-specifications.html` | Auditing & Specifications | @EnableJpaAuditing · @CreatedDate · @LastModifiedDate · @CreatedBy · AuditorAware · Specification · Example queries |

### Group 10: Spring Security (Sheets 45–51)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 45 | `sp-45-security-architecture.html` | Security Architecture | SecurityFilterChain · DelegatingFilterProxy · filter order · default login page · SecurityContextHolder · Authentication |
| 46 | `sp-46-security-configuration.html` | Configuring HttpSecurity | @EnableWebSecurity · http.authorizeHttpRequests() · requestMatchers() · permitAll() · authenticated() · hasRole() · lambda DSL |
| 47 | `sp-47-users-passwords.html` | Users & Password Encoding | UserDetailsService · UserDetails · InMemoryUserDetailsManager · PasswordEncoder · BCryptPasswordEncoder · DelegatingPasswordEncoder |
| 48 | `sp-48-method-security.html` | Method Security | @EnableMethodSecurity · @PreAuthorize · @PostAuthorize · @Secured · SpEL expressions · authentication.name |
| 49 | `sp-49-sessions-csrf.html` | Form Login, Sessions & CSRF | formLogin() · logout() · sessionManagement() · STATELESS · csrf() · CsrfToken · rememberMe() |
| 50 | `sp-50-jwt-resource-server.html` | JWT Resource Server | oauth2ResourceServer() · jwt() · issuer-uri · JwtDecoder · JwtAuthenticationConverter · scopes / authorities |
| 51 | `sp-51-oauth2-login.html` | OAuth2 Login & Client | oauth2Login() · spring.security.oauth2.client.registration · OidcUser · @AuthenticationPrincipal · OAuth2AuthorizedClientManager |

### Group 11: Testing (Sheets 52–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 52 | `sp-52-springboottest.html` | @SpringBootTest | @SpringBootTest · webEnvironment · RANDOM_PORT · @TestConfiguration · @DynamicPropertySource · context caching |
| 53 | `sp-53-slice-tests.html` | Test Slices | @WebMvcTest · @DataJpaTest · @JsonTest · @RestClientTest · @AutoConfigureMockMvc · @Import |
| 54 | `sp-54-mockmvc-resttestclient.html` | MockMvc & RestTestClient | MockMvcTester · perform() · assertThat().hasStatusOk() · jsonPath · RestTestClient · bindTo… · expectStatus() |
| 55 | `sp-55-mocking-beans.html` | Mocking Beans | @MockitoBean · @MockitoSpyBean · when().thenReturn() · verify() · @WithMockUser · spring-security-test |
| 56 | `sp-56-testcontainers.html` | Testcontainers | @Testcontainers · @Container · @ServiceConnection · PostgreSQLContainer · TestApplication · spring-boot-testcontainers |

### Group 12: Actuator & Observability (Sheets 57–59)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 57 | `sp-57-actuator.html` | Actuator Endpoints | /actuator/health · info · env · beans · mappings · management.endpoints.web.exposure.include · custom HealthIndicator |
| 58 | `sp-58-metrics-tracing.html` | Metrics & Tracing | Micrometer · MeterRegistry · Counter · Timer · @Observed · Prometheus endpoint · OpenTelemetry |
| 59 | `sp-59-logging.html` | Logging | SLF4J · Logback · logging.level.* · logging.file.name · structured logging · logback-spring.xml · MDC |

### Group 13: Advanced Topics (Sheets 60–65)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 60 | `sp-60-events.html` | Application Events | ApplicationEventPublisher · publishEvent() · @EventListener · @TransactionalEventListener · ApplicationReadyEvent · async listeners |
| 61 | `sp-61-scheduling.html` | Scheduling | @EnableScheduling · @Scheduled · fixedRate · fixedDelay · cron · zone · ThreadPoolTaskScheduler |
| 62 | `sp-62-async-virtual-threads.html` | @Async & Virtual Threads | @EnableAsync · @Async · CompletableFuture · TaskExecutor · spring.threads.virtual.enabled · exception handling |
| 63 | `sp-63-caching.html` | Caching | @EnableCaching · @Cacheable · @CachePut · @CacheEvict · cache keys · Caffeine · Redis cache manager |
| 64 | `sp-64-resilience.html` | Retry & Resilience | @EnableResilientMethods · @Retryable · maxRetries · backoff · @ConcurrencyLimit · RetryTemplate |
| 65 | `sp-65-webflux-reactive.html` | WebFlux & Reactive Basics | Mono · Flux · map() · flatMap() · subscribe() · reactive @RestController · RouterFunction · when to use |

### Group 14: Packaging & Deployment (Sheets 66–67)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 66 | `sp-66-packaging-containers.html` | Packaging & Containers | executable jar · layered jars · bootBuildImage · spring-boot:build-image · Dockerfile · server.port · graceful shutdown |
| 67 | `sp-67-graalvm-native.html` | GraalVM Native Images | native-maven-plugin · nativeCompile · AOT processing · RuntimeHints · reflection config · startup / memory tradeoffs |

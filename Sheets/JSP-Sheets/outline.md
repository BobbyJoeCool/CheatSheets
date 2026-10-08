# JSP Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Complete
- **Sheets:** 32 across 7 groups
- **File prefix:** `jsp` (`jsp-##-[slug].html`)
- **Folder:** `Sheets/JSP-Sheets/`
- **Coverage:** directives, implicit objects & scope, Expression Language, standard actions, JSTL (core, fmt, fn), custom tags & TLDs, integration & security

---

## Group 1 — Foundations & Directives (01–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `jsp-01-overview.html` | JSP Overview &amp; Request Lifecycle | _jspService · translation phase · servlet container · JSP vs Servlet · first-request latency |
| 02 | `jsp-02-project-structure.html` | Project Structure &amp; Deployment | WAR layout · WEB-INF · URL mapping · webapps dir · precompilation · hot reload |
| 03 | `jsp-03-page-directive.html` | Page Directive | · contentType · import · session · errorPage · isELIgnored · buffer |
| 04 | `jsp-04-scripting-elements.html` | Scripting Elements | &lt;% %> · &lt;%= %> · &lt;%! %> · generated servlet mapping · thread safety |
| 05 | `jsp-05-include-directive.html` | Include Directive | · static include · translation-time merge · .jspf · vs jsp:include |
| 06 | `jsp-06-taglib-directive.html` | Taglib Directive | · uri · prefix · TLD · JSTL URIs · JAR scanning · multiple taglibs |

## Group 2 — Implicit Objects & Scope (07–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `jsp-07-implicit-request-response.html` | Implicit Objects — request &amp; response | getParameter · getHeader · getMethod · setContentType · sendRedirect · HttpServletRequest |
| 08 | `jsp-08-implicit-session-application.html` | Implicit Objects — session &amp; application | HttpSession · setAttribute · invalidate · getServletContext · session timeout · context-wide state |
| 09 | `jsp-09-implicit-other.html` | Implicit Objects — out, config, pageContext, page, exception | JspWriter · out.print · pageContext · PageContext API · exception · isErrorPage |
| 10 | `jsp-10-page-request-scope.html` | Page &amp; Request Scope | setAttribute · getAttribute · removeAttribute · pageScope · requestScope · forward |
| 11 | `jsp-11-session-application-scope.html` | Session &amp; Application Scope | sessionScope · applicationScope · cross-request state · invalidate · concurrent access · context attributes |
| 12 | `jsp-12-pagecontext-api.html` | PageContext API &amp; Scope Resolution | findAttribute · PAGE_SCOPE · REQUEST_SCOPE · SESSION_SCOPE · APPLICATION_SCOPE · getELContext |

## Group 3 — Expression Language (13–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `jsp-13-el-syntax.html` | EL Syntax &amp; Value Expressions | ${} immediate · #{} deferred · dot operator · bracket operator · null-safe · isELIgnored |
| 14 | `jsp-14-el-implicit-objects.html` | EL Implicit Objects | pageScope · requestScope · sessionScope · applicationScope · param · paramValues · header · cookie · initParam · pageContext |
| 15 | `jsp-15-el-operators.html` | EL Operators &amp; Type Coercion | arithmetic · relational · logical · empty · instanceof · ternary · operator precedence |
| 16 | `jsp-16-el-collections.html` | EL Collection &amp; Bean Access | list[index] · map[key] · bean.property · nested access · EL 3.0 streams · lambda in EL |
| 17 | `jsp-17-el-functions.html` | EL Functions &amp; Custom Functions | fn:length · fn:substring · fn:contains · fn:split · fn:join · fn:escapeXml · custom static method |

## Group 4 — Standard Actions (18–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `jsp-18-include-forward.html` | jsp:include &amp; jsp:forward | jsp:include · jsp:forward · page · flush · RequestDispatcher · dynamic path · jsp:param |
| 19 | `jsp-19-usebean.html` | jsp:useBean &amp; Property Actions | jsp:useBean · id · class · scope · jsp:setProperty · property="*" · jsp:getProperty · param auto-bind |
| 20 | `jsp-20-other-actions.html` | Other Standard Actions | jsp:element · jsp:attribute · jsp:body · jsp:text · jsp:output · jsp:root · dynamic XML generation |

## Group 5 — JSTL (21–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `jsp-21-jstl-setup.html` | JSTL Setup &amp; Library Overview | JSTL 3.x · Jakarta EE 10 · JAR dependency · taglib URI · c: · fmt: · fn: · sql: · x: |
| 22 | `jsp-22-jstl-conditionals.html` | JSTL Conditionals | c:if · c:choose · c:when · c:otherwise · c:set · c:remove · c:catch · test attribute |
| 23 | `jsp-23-jstl-iteration.html` | JSTL Iteration | c:forEach · items · var · varStatus · begin · end · step · c:forTokens · delims |
| 24 | `jsp-24-jstl-output-url.html` | JSTL Output, Variables &amp; URLs | c:out · escapeXml · c:url · c:param · c:redirect · c:import · defaultValue |
| 25 | `jsp-25-jstl-fmt.html` | JSTL Formatting (fmt:) | fmt:formatNumber · fmt:formatDate · fmt:timeZone · fmt:setLocale · fmt:message · fmt:bundle |
| 26 | `jsp-26-jstl-functions.html` | JSTL Functions (fn:) | fn:length · fn:escapeXml · fn:substring · fn:split · fn:join · fn:replace · fn:contains · fn:toUpperCase |

## Group 6 — Custom Tags (27–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `jsp-27-tag-files.html` | Tag Files | WEB-INF/tags · .tag extension · &lt;%@ tag %> · &lt;%@ attribute %> · &lt;%@ variable %> · jsp:doBody · tagdir |
| 28 | `jsp-28-classic-tag-handlers.html` | Classic Tag Handlers | TagSupport · BodyTagSupport · doStartTag · doEndTag · SKIP_BODY · EVAL_BODY_INCLUDE · doAfterBody |
| 29 | `jsp-29-simple-tag-handlers.html` | SimpleTag Handlers | SimpleTagSupport · doTag · JspFragment · invoke · getJspBody · JspContext · DynamicAttributes |
| 30 | `jsp-30-tld-files.html` | Tag Library Descriptors (TLD) | .tld file · &lt;uri> · &lt;tag> · &lt;attribute> · &lt;function> · META-INF · body-content · dynamic-attributes |

## Group 7 — Integration & Security (31–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `jsp-31-servlet-integration.html` | Servlet-to-JSP Data Flow | RequestDispatcher · forward · setAttribute · MVC pattern · @WebServlet · Post/Redirect/Get |
| 32 | `jsp-32-error-handling.html` | Error Handling &amp; Security Output | errorPage · isErrorPage · &lt;error-page> · exception implicit · XSS · c:out · fn:escapeXml · CSP |

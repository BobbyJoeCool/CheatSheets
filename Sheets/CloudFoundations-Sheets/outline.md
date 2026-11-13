# Cloud Foundations Reference Guide Outline (26 sheets)

## Metadata

- **Group it belongs to:** Cloud Services
- **Folder Directory:** `Sheets/CloudFoundations-Sheets/cloud-##-[slug].html`
- **PDF Name:** `Cloud Foundations Reference Guide.pdf`
- **Groups:** 8
- **Sheets:** 26
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

The provider-neutral starting point for the Cloud Services section. It teaches the ideas every cloud shares (regions and zones, identity and roles, virtual networks, compute choices, storage tiers, managed databases, messaging, infrastructure as code, observability, cost) once, so the AWS, Azure and Google Cloud sets can focus on how each provider does them.

For readers who know the command line, HTTP and basic networking. Code rows compare the three CLIs side by side (`aws` / `az` / `gcloud`), show provider-neutral Terraform and OpenTelemetry snippets, or sketch architectures as YAML and tables. No provider gets more weight than the others.

Out of scope: certification trivia, deep provider detail (that lives in the three provider sets), on-premises virtualization and private-cloud platforms. Service names and pricing change often, so check each sheet against the provider docs when it's built.

Ends with a 2-page quick reference: the three CLIs side by side, and a "Need → AWS → Azure → Google Cloud" service map with sheet numbers in each provider set.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Across the Clouds** (`section-notes section-across`, `id="across"`) and **Rule of Thumb** (`section-notes section-thumb`, `id="thumb"`) under Code Explained on every sheet except the quick references (25–26). Details below.
- No Row 1 extra box: the set is concept-first, so Row 1 keeps the standard description and notes. Limits & Quotas lives in the provider sets, where the numbers are specific.
- **Footer row (every sheet except the quick references):** **Do & Don't** (`section-notes section-dos`, `id="dos"`) · **Local Testing** (`section-notes section-local`, `id="local"`) · **Production Checklist** (`section-notes section-prod`, `id="prod"`). This replaces the standard Common Mistakes, Tips & Best Practices and Quick Summary trio. Details below.
- The Outline Guide has no cloud category. Groups follow the order a team meets the cloud: basics, identity, network, compute, data, operations, architecture.
- Code rows are `language-bash` (CLI comparisons), `language-hcl` (Terraform), `language-yaml` or `language-json`. Several sheets stack two code sections (for example the same task in `aws`, `az` and `gcloud`).
- Sheets 25–26 are table-only quick-reference pages with no description or code row.

### Across the Clouds box (every sheet except 25–26)

- Three labeled `note-item` lines, **AWS** / **Azure** / **Google Cloud**, each naming the provider's service or term and the sheet number in that provider's set: `AWS — S3 (aws-28) · Azure — Blob Storage (az-28) · Google Cloud — Cloud Storage (gcp-28)`.
- The three provider sets use parallel numbering, so the same sheet number covers the same topic in all three (see "Parallel numbering" below).

### Rule of Thumb box (every sheet except 25–26)

- 2–3 short decision rules a practitioner would give: `Start with object storage; reach for block or file only when an app needs a disk or a shared mount`.

### Do & Don't box (footer, every sheet except the quick references)

- Replaces both Common Mistakes and Tips & Best Practices. Usually 2 **Do** and 2 **Don't** items, each starting with a green ✓ **Do** or red ✗ **Don't** label: `Do: Tag every resource with an owner` · `Don't: Leave test resources running overnight`.

### Local Testing box (footer, every sheet except the quick references)

- How to try the topic without a cloud bill: emulators (LocalStack, Azurite, the Cosmos DB, Service Bus, Pub/Sub and Firestore emulators), local runtimes (`sam local`, `func start`, Functions Framework), Docker / kind, validators and calculators.

### Production Checklist box (footer, every sheet except the quick references)

- 2–3 checks to confirm before the topic goes to production: `Purge protection and soft delete on`.

### Parallel numbering

The AWS, Azure and Google Cloud sets share one group structure and one numbering: sheet 20 is the main serverless compute sheet in each, sheet 28 is object storage basics in each, sheet 34 is the first IaC tool in each, and so on. That keeps every cross-reference box a sheet number rather than a hunt.

## Groups

### Group 1: Cloud Basics (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `cloud-01-what-the-cloud-is.html` | What the Cloud Is | on-demand self-service · IaaS / PaaS / SaaS / FaaS · managed vs self-managed · elasticity · pay-as-you-go · the big three and the rest |
| 02 | `cloud-02-global-infrastructure.html` | Regions, Zones & the Edge | regions · availability zones · edge / points of presence · latency & data residency · zonal vs regional vs global resources · choosing a region |
| 03 | `cloud-03-account-structure.html` | Accounts, Projects & Hierarchy | AWS Organizations & accounts · Azure tenants, management groups, subscriptions & resource groups · Google Cloud organization, folders & projects · billing boundaries · blast radius |
| 04 | `cloud-04-shared-responsibility-pricing.html` | Shared Responsibility & Pricing Models | shared responsibility model · on-demand · reserved / committed use · spot / preemptible · free tiers · egress charges |

### Group 2: Identity & Security (Sheets 05–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `cloud-05-identity-access.html` | Identity & Access Concepts | principals (users, groups, workloads) · roles & permissions · policies & scopes · least privilege · MFA · human vs machine identity |
| 06 | `cloud-06-workload-identity.html` | Workload Identity & Federation | IAM roles · managed identities · service accounts · short-lived credentials · OIDC federation from CI · why long-lived keys are risky |
| 07 | `cloud-07-secrets-encryption.html` | Secrets & Encryption | secret stores · key management services · envelope encryption · encryption at rest vs in transit · customer-managed keys · rotation |
| 08 | `cloud-08-security-baseline.html` | Security Baseline & Guardrails | audit logging · org-level policies · public-access blocks · threat detection services · tagging & ownership · the first-day checklist |

### Group 3: Networking (Sheets 09–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `cloud-09-virtual-networks.html` | Virtual Networks & Subnets | CIDR planning · public vs private subnets · route tables · internet & NAT gateways · regional (AWS, Azure) vs global (Google Cloud) networks · peering |
| 10 | `cloud-10-firewalls-private-access.html` | Firewalls & Private Access | security groups · NSGs · VPC firewall rules · stateful vs stateless · private endpoints / PrivateLink / Private Service Connect · bastions & identity-aware access |
| 11 | `cloud-11-load-balancing-dns.html` | Load Balancing & DNS | L4 vs L7 · health checks · global vs regional load balancers · managed DNS zones · routing policies · TLS certificates |
| 12 | `cloud-12-cdn-edge.html` | CDN & Edge | caching & TTLs · origins · invalidation · WAF at the edge · CloudFront / Front Door / Cloud CDN · static site hosting pattern |

### Group 4: Compute (Sheets 13–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `cloud-13-virtual-machines.html` | Virtual Machines & Autoscaling | instance families & sizes · images · startup scripts · disks · scale groups (ASG / VMSS / MIG) · Arm instances |
| 14 | `cloud-14-containers-kubernetes.html` | Containers & Managed Kubernetes | registries · serverless containers (Fargate, Container Apps, Cloud Run) · EKS / AKS / GKE · control plane vs nodes · pointer to Docker & Kubernetes sets |
| 15 | `cloud-15-serverless-functions.html` | Serverless Functions | event-driven functions · triggers · cold starts · concurrency · timeouts & limits · Lambda / Azure Functions / Cloud Run functions |
| 16 | `cloud-16-choosing-compute.html` | Choosing Compute | VMs vs containers vs functions vs PaaS · control vs convenience · cost shape · decision table across the three providers |

### Group 5: Storage, Data & Messaging (Sheets 17–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `cloud-17-storage-types.html` | Object, Block & File Storage | buckets & objects · block volumes · shared file systems · storage classes & tiers · lifecycle rules · durability vs availability |
| 18 | `cloud-18-managed-databases.html` | Managed Databases | managed relational (RDS, Azure SQL, Cloud SQL) · NoSQL (DynamoDB, Cosmos DB, Firestore) · caches · replicas & failover · backups & point-in-time restore · pointer to SQL & NoSQL sets |
| 19 | `cloud-19-messaging-events.html` | Messaging & Events | queues vs topics vs event buses · at-least-once delivery · idempotency · dead-letter queues · SQS / SNS / EventBridge · Service Bus / Event Grid · Pub/Sub / Eventarc |

### Group 6: Operations (Sheets 20–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `cloud-20-infrastructure-as-code.html` | Infrastructure as Code | declarative vs imperative · state & drift · Terraform / OpenTofu providers for all three · CloudFormation & CDK · Bicep · Infrastructure Manager · plan → apply |
| 21 | `cloud-21-observability.html` | Observability | metrics, logs & traces · OpenTelemetry · alerts & SLOs · CloudWatch / Azure Monitor / Cloud Monitoring · log retention costs |
| 22 | `cloud-22-cicd-to-the-cloud.html` | CI/CD to the Cloud | GitHub Actions OIDC to AWS, Azure & Google Cloud · build → push → deploy · blue/green & canary · environments & approvals · pointer to GitHub set |

### Group 7: Architecture & Cost (Sheets 23–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `cloud-23-reliability-architecture.html` | Reliability & Well-Architected | AWS Well-Architected · Azure Well-Architected · Google Cloud Architecture Framework · multi-AZ vs multi-region · RTO / RPO · backup & disaster recovery tiers |
| 24 | `cloud-24-cost-management.html` | Cost Management & FinOps | budgets & alerts · tags / labels · rightsizing · commitments vs spot · egress & idle resources · cost tools on each provider |

### Group 8: Quick Reference (Sheets 25–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `cloud-25-quick-reference-cli.html` | Quick Reference — aws · az · gcloud | log in · set account / subscription / project · list resources · output & query flags · storage copy · deploy a container · logs |
| 26 | `cloud-26-quick-reference-service-map.html` | Quick Reference — Service Map | Need → AWS → Azure → Google Cloud with sheet numbers · terminology map (account / subscription / project, role / RBAC / IAM role) · free-tier highlights |

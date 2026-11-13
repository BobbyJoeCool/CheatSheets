# Azure Reference Guide Outline (42 sheets)

## Metadata

- **Group it belongs to:** Cloud Services
- **Folder Directory:** `Sheets/Azure-Sheets/az-##-[slug].html`
- **PDF Name:** `Azure Reference Guide.pdf`
- **Groups:** 12
- **Sheets:** 42
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

Microsoft Azure from the developer / operator view, for readers who know the command line, HTTP and basic networking, and ideally the Cloud Foundations, Docker and Kubernetes sets. Each sheet teaches a service through what you'd type and commit: Azure CLI (`az`) commands, RBAC role assignments, Bicep templates and short SDK calls (`azure-identity` with Python and JavaScript). The portal gets a pointer only where it's the easier path. Azure PowerShell gets a one-line equivalent where it's common in the field.

Scope is the core services a developer meets on the job: tenants, subscriptions and Entra ID, networking, compute, serverless, containers, storage, databases, infrastructure as code, observability, deployment, and the AI services (Microsoft Foundry, formerly Azure AI Foundry). Out of scope: Microsoft 365 administration, certification trivia, data analytics (Fabric, Synapse, Databricks get a mention in the service picker only), and enterprise landing-zone design. Azure renames products often, so each sheet should be checked against Microsoft Learn when it's built.

Ends with a 2-page quick reference: `az` commands, and a "Need → Azure service → AWS / Google Cloud" picker.

## Differences in Layout from Basic Structure

- **Extra boxes:** **AWS / GCP Equivalent** (`section-notes section-equiv`, `id="equiv"`) and **Cost Check** (`section-notes section-cost`, `id="cost"`) under Code Explained on every sheet except the quick references (42–43) · **Security Check** (`section-notes section-security`, `id="security"`) in Row 1 on 19 selected sheets. Details below. · **Limits & Quotas** (`section-notes section-limits`, `id=\"limits\"`) in Row 1 on 19 selected sheets. When a sheet has both Security Check and Limits & Quotas, they stack in Row 1's third column (Security Check on top), the same way Row 2's right column stacks Code Explained and two boxes.
- **Footer row (every sheet except the quick references):** **Do & Don't** (`section-notes section-dos`, `id="dos"`) · **Local Testing** (`section-notes section-local`, `id="local"`) · **Production Checklist** (`section-notes section-prod`, `id="prod"`). This replaces the standard Common Mistakes, Tips & Best Practices and Quick Summary trio. Details below.
- Same 12 groups and the same sheet numbering as the AWS and Google Cloud sets (see Cloud Foundations, "Parallel numbering"): sheet `az-28` and `aws-28` and `gcp-28` all cover object storage basics.
- Code rows hold Azure CLI commands (`language-bash`), Bicep (`language-bicep`, falls back to none if Prism lacks it), ARM / RBAC JSON (`language-json`), YAML pipelines (`language-yaml`), KQL (`language-kusto`) or SDK snippets (`language-python` / `language-javascript`). Some sheets stack two code sections (CLI + Bicep, query + CLI).
- Sheet 42 are table-only quick-reference pages with no description or code row.

### AWS / GCP Equivalent box (every sheet except 42–43)

- 1–3 `note-item` lines naming the matching AWS and Google Cloud services with their sheet numbers, plus the biggest difference: `AWS — S3 (aws-28): bucket = container, no storage-account layer · GCP — Cloud Storage (gcp-28)`.

### Cost Check box (every sheet except 42–43)

- What you're billed for on this service, the free-account angle, and the most common surprise bill: `Stopped (not deallocated) VMs still bill for compute`.

### Limits & Quotas box (Row 1, selected sheets)

- 2–3 default limits or quotas that bite in practice (size caps, timeouts, per-subscription / per-account / per-project counts), with how to check or raise them. Numbers change: verify against the provider's limits page when building.
- Sheets: 02, 06, 08, 10, 12, 15, 18, 20, 21, 24, 25, 26, 27, 28, 31, 32, 34, 38, 40 (same numbers in all three provider sets). Twelve of them also have Security Check and use the stacked layout: 08, 10, 12, 15, 20, 25, 26, 28, 31, 32, 34, 40.

### Do & Don't box (footer, every sheet except the quick references)

- Replaces both Common Mistakes and Tips & Best Practices. Usually 2 **Do** and 2 **Don't** items, each starting with a green ✓ **Do** or red ✗ **Don't** label: `Do: Tag every resource with an owner` · `Don't: Leave test resources running overnight`.

### Local Testing box (footer, every sheet except the quick references)

- How to try the topic without a cloud bill: emulators (LocalStack, Azurite, the Cosmos DB, Service Bus, Pub/Sub and Firestore emulators), local runtimes (`sam local`, `func start`, Functions Framework), Docker / kind, validators and calculators.

### Production Checklist box (footer, every sheet except the quick references)

- 2–3 checks to confirm before the topic goes to production: `Purge protection and soft delete on`.

### Security Check box (Row 1, selected sheets)

- The one misconfiguration to avoid and the setting that prevents it.
- Sheets: 03, 04, 07, 08, 10, 12, 14, 15, 20, 22, 25, 26, 28, 29, 31, 32, 34, 39, 40 (same numbers as the AWS and Google Cloud sets).

## Groups

### Group 1: Getting Started (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `az-01-overview-global-infrastructure.html` | Overview & Global Infrastructure | regions · availability zones · region pairs · tenants, management groups, subscriptions & resource groups · Azure Resource Manager · resource IDs |
| 02 | `az-02-subscriptions-billing.html` | Subscriptions & Billing | free account & credits · Cost Management + Billing · budgets & alerts · tags · Azure Advisor · pricing calculator |
| 03 | `az-03-azure-cli.html` | Azure CLI | install · `az login` · `az account set` · `--output table` / `--query` (JMESPath) · `az config` defaults · extensions · Cloud Shell |
| 04 | `az-04-sdks-credentials.html` | SDKs & Credentials | `DefaultAzureCredential` · credential chain order · `azure-identity` for Python & JavaScript · environment variables · managed identity over secrets · `Connect-AzAccount` pointer |

### Group 2: Identity & Security (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `az-05-entra-id.html` | Microsoft Entra ID | tenants · users & groups · app registrations vs service principals (enterprise apps) · conditional access · MFA · `az ad` commands |
| 06 | `az-06-rbac.html` | Azure RBAC | role definitions · role assignments · scope (management group → subscription → resource group → resource) · Owner / Contributor / Reader · custom roles · `az role assignment create` |
| 07 | `az-07-managed-identities.html` | Managed Identities & Federation | system- vs user-assigned identities · granting roles to an identity · federated credentials (GitHub Actions OIDC) · workload identity for AKS · no secrets in code |
| 08 | `az-08-key-vault.html` | Key Vault | secrets, keys & certificates · RBAC vs access policies · soft delete & purge protection · `az keyvault secret set` / `show` · Key Vault references in App Service · Managed HSM pointer |
| 09 | `az-09-security-governance.html` | Security & Governance | Microsoft Defender for Cloud · Azure Policy & initiatives · Activity Log · resource locks · Microsoft Sentinel · WAF & DDoS Protection |

### Group 3: Networking (Sheets 10–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `az-10-virtual-networks.html` | Virtual Networks | address spaces · subnets · system routes & route tables (UDRs) · `az network vnet create` · default outbound access retirement · subnet delegation |
| 11 | `az-11-nat-private-endpoints.html` | NAT, Private Endpoints & Connectivity | NAT Gateway · service endpoints vs Private Endpoints (Private Link) · Private DNS zones · VNet peering · VPN Gateway · ExpressRoute · Virtual WAN |
| 12 | `az-12-nsgs-firewall.html` | NSGs & Azure Firewall | network security groups · rule priorities · service tags · application security groups · Azure Firewall · VNet flow logs |
| 13 | `az-13-azure-dns.html` | Azure DNS & Traffic Manager | public & private zones · record sets · alias records · Traffic Manager routing methods · App Service domains |
| 14 | `az-14-front-door.html` | Front Door & Certificates | Azure Front Door Standard / Premium · origins & routes · rules engine · caching & purge · managed certificates · WAF policies |

### Group 4: Compute (Sheets 15–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `az-15-virtual-machines.html` | Virtual Machines | VM series & sizes · images · `az vm create` · SSH keys · cloud-init custom data · Azure Bastion · Arm-based (Cobalt) VMs |
| 16 | `az-16-vm-operations-pricing.html` | VM Operations & Pricing | managed disks & snapshots · stop vs deallocate · public IPs · Spot VMs · Reservations & savings plans · Azure Hybrid Benefit |
| 17 | `az-17-load-balancing.html` | Load Balancing | Azure Load Balancer (L4) · Application Gateway (L7) · backend pools · health probes · path-based routing · choosing Load Balancer / Application Gateway / Front Door / Traffic Manager |
| 18 | `az-18-vm-scale-sets.html` | Virtual Machine Scale Sets | Flexible vs Uniform orchestration · instance count min / max · autoscale rules · scheduled profiles · upgrade policies · automatic instance repairs |
| 19 | `az-19-choosing-compute.html` | Choosing Compute | VMs vs App Service vs Functions vs Container Apps vs AKS · Static Web Apps · Container Instances · decision table |

### Group 5: Serverless & Messaging (Sheets 20–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `az-20-functions-basics.html` | Azure Functions Basics | triggers & bindings · Flex Consumption plan · Python v2 / Node.js v4 programming models · `func init` / `new` / `start` · `func azure functionapp publish` · app settings |
| 21 | `az-21-app-service-functions-operations.html` | App Service & Functions Operations | App Service plans · deployment slots & swap · scale up / out · Always On · Durable Functions · cold starts & plan choice |
| 22 | `az-22-api-management.html` | API Management | APIs, operations & products · policies (XML) · subscription keys · `validate-jwt` · rate limits & quotas · tiers (Consumption, v2) |
| 23 | `az-23-event-grid-logic-apps.html` | Event Grid & Logic Apps | topics & system topics · event subscriptions & filters · CloudEvents schema · Logic Apps workflows & connectors · Logic Apps vs Durable Functions |
| 24 | `az-24-service-bus-queues.html` | Service Bus & Storage Queues | queues vs topics & subscriptions · peek-lock & settle · sessions · dead-letter queues · Storage Queues · Event Hubs pointer |

### Group 6: Containers (Sheets 25–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `az-25-container-registry.html` | Azure Container Registry | `az acr create` · `az acr login` · tag & push · ACR Tasks (`az acr build`) · retention & purge · geo-replication · pull with managed identity |
| 26 | `az-26-container-apps.html` | Azure Container Apps | environments · revisions & traffic splitting · ingress · scale rules (KEDA) · Dapr · jobs · `az containerapp up` |
| 27 | `az-27-aks.html` | AKS | `az aks create` · `az aks get-credentials` · node pools · AKS Automatic · workload identity · `--attach-acr` · add-ons & extensions |

### Group 7: Storage (Sheets 28–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `az-28-blob-storage-basics.html` | Blob Storage Basics | storage accounts · containers & blobs · `az storage blob upload` / `download` / `sync` · AzCopy · access tiers (hot, cool, cold, archive) · redundancy (LRS, ZRS, GRS) |
| 29 | `az-29-storage-security-features.html` | Storage Security & Features | Entra ID data roles · SAS tokens (user delegation SAS) · disable shared key & anonymous access · versioning & soft delete · lifecycle management · static website hosting |
| 30 | `az-30-disks-files-backup.html` | Disks, Files & Backup | managed disk types (Premium SSD v2, Standard SSD) · snapshots · Azure Files (SMB, NFS) · Blob vs Disks vs Files · Azure Backup & Recovery Services vaults |

### Group 8: Databases (Sheets 31–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `az-31-azure-sql-postgresql.html` | Azure SQL & PostgreSQL | Azure SQL Database vs Managed Instance · serverless & Hyperscale · Azure Database for PostgreSQL / MySQL Flexible Server · high availability · point-in-time restore · Entra authentication |
| 32 | `az-32-cosmos-db.html` | Cosmos DB | accounts, databases & containers · partition keys · request units · consistency levels · APIs (NoSQL, MongoDB) · serverless vs autoscale · change feed |
| 33 | `az-33-redis-other-data-services.html` | Redis & Other Data Services | Azure Managed Redis (replacing Azure Cache for Redis) · Azure AI Search · Fabric / Synapse pointer · choosing a database · pointer to SQL & NoSQL sets |

### Group 9: Infrastructure as Code (Sheets 34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `az-34-bicep.html` | Bicep | resources, parameters & outputs · modules · `az deployment group create` · `what-if` · deployment scopes · deployment stacks · ARM JSON relationship |
| 35 | `az-35-azure-developer-cli.html` | Azure Developer CLI (azd) | `azd init` · templates · `azure.yaml` · `azd up` / `provision` / `deploy` · environments · `azd pipeline config` |
| 36 | `az-36-terraform-on-azure.html` | Terraform on Azure | `azurerm` & `azapi` providers · state in a storage account · OIDC authentication · `terraform plan` / `apply` · choosing Bicep vs azd vs Terraform |

### Group 10: Observability & Deployment (Sheets 37–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `az-37-monitor-metrics-alerts.html` | Azure Monitor Metrics & Alerts | platform metrics · diagnostic settings · alert rules · action groups · Workbooks & dashboards · `az monitor metrics list` |
| 38 | `az-38-log-analytics-app-insights.html` | Log Analytics & Application Insights | workspaces · KQL queries · retention & table plans · Application Insights with the OpenTelemetry distro · distributed tracing · `az monitor log-analytics query` |
| 39 | `az-39-deploying-to-azure.html` | Deploying to Azure | GitHub Actions `azure/login` with OIDC · Azure Pipelines YAML · slot swaps · Container Apps revision rollouts · environments & approvals · tagging strategy |

### Group 11: AI & Machine Learning (Sheets 40–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `az-40-microsoft-foundry.html` | Microsoft Foundry & Azure OpenAI | Foundry resources & projects · model deployments · Responses / chat completions API · Entra ID auth over API keys · content safety · Foundry Agent Service · RAG with AI Search |
| 41 | `az-41-ai-services.html` | Foundry Tools & ML | Foundry Tools (formerly Azure AI Services): Vision, Speech, Language, Translator, Document Intelligence · Azure Machine Learning · GitHub Copilot pointer |

### Group 12: Quick Reference (Sheet 42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `az-42-quick-reference-cli.html` | Quick Reference — az Commands & Service Picker | `az group` · `vm` · `storage` · `ad` / `role` · `functionapp` / `webapp` · `acr` / `containerapp` / `aks` · `monitor` · `deployment` |

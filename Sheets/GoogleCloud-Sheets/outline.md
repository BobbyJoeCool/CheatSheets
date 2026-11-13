# Google Cloud Reference Guide Outline (42 sheets)

## Metadata

- **Group it belongs to:** Cloud Services
- **Folder Directory:** `Sheets/GoogleCloud-Sheets/gcp-##-[slug].html`
- **PDF Name:** `Google Cloud Reference Guide.pdf`
- **Groups:** 12
- **Sheets:** 42
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

Google Cloud from the developer / operator view, for readers who know the command line, HTTP and basic networking, and ideally the Cloud Foundations, Docker and Kubernetes sets. Each sheet teaches a service through what you'd type and commit: `gcloud` commands, IAM policy bindings, Terraform (Google Cloud's main IaC path) and short client-library calls (Python and Node.js). The console gets a pointer only where it's the easier path.

Scope is the core services a developer meets on the job: organizations, projects and IAM, networking, compute, serverless (Cloud Run first), containers (GKE), storage, databases (including BigQuery, Google Cloud's signature service), infrastructure as code, observability, deployment, and the AI services (Gemini Enterprise Agent Platform, formerly Vertex AI, and Gemini). Out of scope: Google Workspace administration, certification trivia, the wider data-analytics stack (Dataflow, Dataproc, Looker get a mention in the service picker only), and enterprise landing-zone design. Product names change often (Cloud Functions became Cloud Run functions in 2024; Deployment Manager reached end of support on March 31, 2026), so each sheet should be checked against the Google Cloud docs when it's built.

Ends with a 2-page quick reference: `gcloud` commands, and a "Need → Google Cloud service → AWS / Azure" picker.

## Differences in Layout from Basic Structure

- **Extra boxes:** **AWS / Azure Equivalent** (`section-notes section-equiv`, `id="equiv"`) and **Cost Check** (`section-notes section-cost`, `id="cost"`) under Code Explained on every sheet except the quick references (42–43) · **Security Check** (`section-notes section-security`, `id="security"`) in Row 1 on 19 selected sheets. Details below. · **Limits & Quotas** (`section-notes section-limits`, `id=\"limits\"`) in Row 1 on 19 selected sheets. When a sheet has both Security Check and Limits & Quotas, they stack in Row 1's third column (Security Check on top), the same way Row 2's right column stacks Code Explained and two boxes.
- **Footer row (every sheet except the quick references):** **Do & Don't** (`section-notes section-dos`, `id="dos"`) · **Local Testing** (`section-notes section-local`, `id="local"`) · **Production Checklist** (`section-notes section-prod`, `id="prod"`). This replaces the standard Common Mistakes, Tips & Best Practices and Quick Summary trio. Details below.
- Same 12 groups and the same sheet numbering as the AWS and Azure sets (see Cloud Foundations, "Parallel numbering"). Where Google Cloud's shape differs, the sheet keeps its slot and the Equivalent box explains the gap: sheet 20 is Cloud Run (the matching slot to Lambda and Azure Functions) and sheets 26–27 split GKE in two because Cloud Run already covers serverless containers.
- Code rows hold `gcloud` / `bq` commands (`language-bash`), IAM policy JSON or YAML (`language-json` / `language-yaml`), Terraform (`language-hcl`), `cloudbuild.yaml` or Workflows YAML (`language-yaml`), SQL for BigQuery (`language-sql`) or client-library snippets (`language-python` / `language-javascript`). Some sheets stack two code sections.
- Sheet 42 are table-only quick-reference pages with no description or code row.

### AWS / Azure Equivalent box (every sheet except 42–43)

- 1–3 `note-item` lines naming the matching AWS and Azure services with their sheet numbers, plus the biggest difference: `AWS — VPC (aws-10): regional, subnets per AZ · Azure — VNet (az-10): regional · Google Cloud VPCs are global; only subnets are regional`.

### Cost Check box (every sheet except 42–43)

- What you're billed for on this service, the free-tier angle, and the most common surprise bill: `BigQuery on-demand bills per byte scanned: SELECT * on a big table costs real money`.

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
- Sheets: 03, 04, 07, 08, 10, 12, 14, 15, 20, 22, 25, 26, 28, 29, 31, 32, 34, 39, 40 (same numbers as the AWS and Azure sets).

## Groups

### Group 1: Getting Started (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `gcp-01-overview-global-infrastructure.html` | Overview & Global Infrastructure | regions & zones · global vs regional vs zonal resources · Premium vs Standard network tier · organization, folders & projects · project ID vs number · Free Tier & free trial |
| 02 | `gcp-02-projects-billing.html` | Projects & Billing | creating projects · billing accounts · budgets & alerts · labels · billing export to BigQuery · `gcloud services enable` (APIs are off by default) |
| 03 | `gcp-03-gcloud-cli.html` | gcloud CLI | install · `gcloud init` · `gcloud auth login` vs `application-default login` · configurations · `--project` · `--format` / `--filter` · Cloud Shell · `gcloud storage` replaces `gsutil` |
| 04 | `gcp-04-sdks-credentials.html` | Client Libraries & Credentials | Application Default Credentials · lookup order · Python & Node.js client libraries · service account impersonation · metadata server · avoiding key files |

### Group 2: Identity & Security (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `gcp-05-iam-principals-roles.html` | IAM Principals & Roles | principals (users, groups, service accounts) · basic vs predefined vs custom roles · `gcloud projects add-iam-policy-binding` · inheritance down the hierarchy · Google groups for access |
| 06 | `gcp-06-iam-policies.html` | IAM Policies & Conditions | allow policies & bindings · IAM Conditions · deny policies · Organization Policy constraints · Policy Troubleshooter · role recommender |
| 07 | `gcp-07-service-accounts-federation.html` | Service Accounts & Workload Identity Federation | service accounts · attaching to resources · `--impersonate-service-account` · Workload Identity Federation for GitHub Actions · Workload Identity Federation for GKE · disabling key creation |
| 08 | `gcp-08-secret-manager-kms.html` | Secret Manager & Cloud KMS | secrets & versions · `gcloud secrets create` / `versions access` · rotation · key rings & keys · CMEK · envelope encryption |
| 09 | `gcp-09-security-services.html` | Security Services | Cloud Audit Logs · Security Command Center · Cloud Armor · VPC Service Controls · Identity-Aware Proxy · Binary Authorization |

### Group 3: Networking (Sheets 10–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `gcp-10-vpc-basics.html` | VPC Basics | global VPCs · regional subnets · auto vs custom mode · routes · Private Google Access · Shared VPC |
| 11 | `gcp-11-cloud-nat-connectivity.html` | Cloud NAT & Connectivity | Cloud NAT · Cloud Router · Private Service Connect · VPC Network Peering · Cloud VPN · Cloud Interconnect · Network Connectivity Center |
| 12 | `gcp-12-firewall-rules-policies.html` | Firewall Rules & Policies | VPC firewall rules · priorities & implied rules · targets by network tag or service account · hierarchical & network firewall policies · Firewall Rules Logging |
| 13 | `gcp-13-cloud-dns.html` | Cloud DNS | public & private zones · record sets · DNSSEC · routing policies (weighted, geolocation, failover) · `gcloud dns record-sets` · domain registration through a third-party registrar |
| 14 | `gcp-14-cloud-cdn-certificates.html` | Cloud CDN & Certificates | Cloud CDN on an external Application Load Balancer · backend buckets · cache modes & invalidation · Certificate Manager · Google-managed certificates · Media CDN pointer |

### Group 4: Compute (Sheets 15–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `gcp-15-compute-engine-basics.html` | Compute Engine Basics | machine families (E2, N4, C4, Axion C4A) · images · `gcloud compute instances create` · OS Login & `gcloud compute ssh` · startup scripts & metadata · Shielded VM |
| 16 | `gcp-16-compute-engine-operations-pricing.html` | Compute Engine Operations & Pricing | Persistent Disk & Hyperdisk · snapshots · stop vs suspend vs delete · static external IPs · Spot VMs · sustained use & committed use discounts |
| 17 | `gcp-17-cloud-load-balancing.html` | Cloud Load Balancing | Application vs Network Load Balancers · global vs regional · external vs internal · backend services & URL maps · health checks · serverless NEGs |
| 18 | `gcp-18-managed-instance-groups.html` | Managed Instance Groups | instance templates · zonal vs regional MIGs · autoscaling policies · autohealing · rolling updates · stateful MIGs |
| 19 | `gcp-19-choosing-compute.html` | Choosing Compute | Compute Engine vs Cloud Run vs GKE vs App Engine vs Cloud Run functions · Batch · decision table |

### Group 5: Serverless & Messaging (Sheets 20–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `gcp-20-cloud-run-basics.html` | Cloud Run Basics | services · `gcloud run deploy --source` · container contract (`PORT`) · concurrency · min / max instances · revisions & traffic splitting · environment variables & secrets |
| 21 | `gcp-21-cloud-run-functions-jobs.html` | Cloud Run Functions & Jobs | Functions Framework · `gcloud functions deploy` (now Cloud Run functions) · event triggers through Eventarc · Cloud Run jobs · cold starts · CPU allocation & billing modes |
| 22 | `gcp-22-api-gateway-apigee.html` | API Gateway & Apigee | API Gateway with OpenAPI configs · JWT & API key auth · quotas · Apigee for full API management · Cloud Endpoints pointer |
| 23 | `gcp-23-eventarc-workflows-scheduler.html` | Eventarc, Workflows & Scheduler | Eventarc triggers · CloudEvents · Workflows YAML · Cloud Scheduler cron jobs · Cloud Tasks queues |
| 24 | `gcp-24-pub-sub.html` | Pub/Sub | topics & subscriptions · pull vs push · ack deadlines · dead-letter topics · ordering keys · exactly-once delivery · BigQuery & Cloud Storage subscriptions |

### Group 6: Containers (Sheets 25–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `gcp-25-artifact-registry.html` | Artifact Registry | repositories & formats · `gcloud auth configure-docker REGION-docker.pkg.dev` · tag & push · cleanup policies · vulnerability scanning · Container Registry shutdown |
| 26 | `gcp-26-gke-basics.html` | GKE Basics | Autopilot vs Standard · `gcloud container clusters create-auto` · `get-credentials` · node pools · release channels · private clusters |
| 27 | `gcp-27-gke-operations.html` | GKE Operations | Workload Identity Federation for GKE · Gateway API · cluster & Pod autoscaling · upgrades & maintenance windows · fleets & Config Sync pointer |

### Group 7: Storage (Sheets 28–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `gcp-28-cloud-storage-basics.html` | Cloud Storage Basics | buckets & objects · `gcloud storage cp` / `rsync` / `ls` / `rm` · location types (region, dual-region, multi-region) · storage classes (Standard, Nearline, Coldline, Archive) · Autoclass |
| 29 | `gcp-29-cloud-storage-security-features.html` | Cloud Storage Security & Features | uniform bucket-level access · public access prevention · IAM on buckets · signed URLs · object versioning & soft delete · lifecycle rules · static websites behind a load balancer |
| 30 | `gcp-30-disks-filestore-backup.html` | Disks, Filestore & Backup | Persistent Disk vs Hyperdisk types · snapshot schedules · Filestore · Cloud Storage vs disks vs Filestore · Backup and DR Service |

### Group 8: Databases (Sheets 31–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `gcp-31-cloud-sql-alloydb.html` | Cloud SQL & AlloyDB | MySQL, PostgreSQL & SQL Server · regional high availability · read replicas · point-in-time recovery · Cloud SQL Auth Proxy & connectors · IAM database auth · AlloyDB for PostgreSQL |
| 32 | `gcp-32-firestore-spanner.html` | Firestore, Spanner & Bigtable | Firestore documents & collections · queries & indexes · security rules · Spanner (global, strongly consistent SQL) · Bigtable · choosing a NoSQL store |
| 33 | `gcp-33-bigquery-memorystore.html` | BigQuery & Memorystore | datasets & tables · `bq query` · partitioning & clustering · on-demand vs editions pricing · Memorystore for Valkey / Redis · choosing a database · pointer to SQL & NoSQL sets |

### Group 9: Infrastructure as Code (Sheets 34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `gcp-34-terraform-on-google-cloud.html` | Terraform on Google Cloud | `google` & `google-beta` providers · `google_project_service` · Cloud Storage state backend · Workload Identity Federation auth · `terraform plan` / `apply` · Cloud Foundation Toolkit modules |
| 35 | `gcp-35-infrastructure-manager.html` | Infrastructure Manager | managed Terraform runs · `gcloud infra-manager deployments apply` · revisions & previews · service account for deployments · replacing Deployment Manager (end of support March 31, 2026) |
| 36 | `gcp-36-config-connector-choosing-iac.html` | Config Connector & Choosing IaC | Config Connector (Kubernetes-style resources) · exporting existing resources to Terraform · Pulumi pointer · choosing Terraform vs Infrastructure Manager vs Config Connector |

### Group 10: Observability & Deployment (Sheets 37–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `gcp-37-cloud-monitoring.html` | Cloud Monitoring | metrics & resource types · alerting policies · notification channels · uptime checks · dashboards · Managed Service for Prometheus & PromQL |
| 38 | `gcp-38-cloud-logging-trace.html` | Cloud Logging & Trace | Log Router & sinks · log buckets & retention · Logging query language · log-based metrics · Cloud Trace with OpenTelemetry · Error Reporting · `gcloud logging read` |
| 39 | `gcp-39-deploying-to-google-cloud.html` | Deploying to Google Cloud | GitHub Actions `google-github-actions/auth` (Workload Identity Federation) · Cloud Build & `cloudbuild.yaml` · Cloud Deploy pipelines · Cloud Run canary via traffic splitting · labels strategy |

### Group 11: AI & Machine Learning (Sheets 40–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `gcp-40-vertex-ai-gemini.html` | Agent Platform (Vertex AI) & Gemini | Gemini models on Gemini Enterprise Agent Platform (renamed from Vertex AI, April 2026) · Google Gen AI SDK (`google-genai`) · `generate_content` & streaming · grounding with Google Search · RAG Engine / Vertex AI Search · Agent Builder |
| 41 | `gcp-41-ai-ml-services.html` | AI & ML Services | Vertex AI training & endpoints · Model Garden · Vision API · Speech-to-Text · Document AI · Translation · Gemini Code Assist |

### Group 12: Quick Reference (Sheet 42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `gcp-42-quick-reference-gcloud.html` | Quick Reference — gcloud & Service Picker | `gcloud config` / `auth` · `projects` / `iam` · `compute` · `storage` · `run` / `functions` · `container` / `artifacts` · `logging` · `bq` |

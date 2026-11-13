# AWS Reference Guide Outline (42 sheets)

## Metadata

- **Group it belongs to:** Cloud Services
- **Folder Directory:** `Sheets/AWS-Sheets/aws-##-[slug].html`
- **PDF Name:** `AWS Reference Guide.pdf`
- **Groups:** 12
- **Sheets:** 42
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

Amazon Web Services from the developer / operator view, for readers who know the command line, HTTP and basic networking, and ideally the Cloud Foundations, Docker and Kubernetes sets. Each sheet teaches a service through what you'd type and commit: AWS CLI v2 commands, IAM policy JSON, CloudFormation / CDK snippets and short SDK calls (boto3 and the JavaScript SDK v3). The console gets a pointer only where it's the easier path.

Scope is the core services a developer meets on the job: accounts and IAM, networking, compute, serverless, containers, storage, databases, infrastructure as code, observability, deployment, and the AI services (Bedrock). Out of scope: certification-style trivia, data analytics (Redshift, EMR, Glue, Athena get a mention in the service picker only), and enterprise landing-zone design. Service names, limits and pricing details change often, so each sheet should be checked against the AWS docs when it's built.

Ends with a 2-page quick reference: CLI commands, and a "Need → AWS service → Azure / GCP" picker.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Azure / GCP Equivalent** (`section-notes section-equiv`, `id="equiv"`) and **Cost Check** (`section-notes section-cost`, `id="cost"`) under Code Explained on every sheet except the quick references (42–43) · **Security Check** (`section-notes section-security`, `id="security"`) in Row 1 on 19 selected sheets. Details below. · **Limits & Quotas** (`section-notes section-limits`, `id=\"limits\"`) in Row 1 on 19 selected sheets. When a sheet has both Security Check and Limits & Quotas, they stack in Row 1's third column (Security Check on top), the same way Row 2's right column stacks Code Explained and two boxes.
- **Footer row (every sheet except the quick references):** **Do & Don't** (`section-notes section-dos`, `id="dos"`) · **Local Testing** (`section-notes section-local`, `id="local"`) · **Production Checklist** (`section-notes section-prod`, `id="prod"`). This replaces the standard Common Mistakes, Tips & Best Practices and Quick Summary trio. Details below.
- Same 12 groups and the same sheet numbering as the Azure and Google Cloud sets (see Cloud Foundations, "Parallel numbering"): sheet `aws-28`, `az-28` and `gcp-28` all cover object storage basics. Groups follow how you'd build: account, identity, network, compute, serverless, containers, storage, data, IaC, operate.
- Code rows hold AWS CLI commands (`language-bash`), JSON policies (`language-json`), CloudFormation / SAM templates (`language-yaml`) or SDK snippets (`language-python` / `language-javascript`). Some sheets stack two code sections in the left column (CLI + policy, template + CLI).
- Sheet 42 are table-only quick-reference pages with no description or code row.

### Azure / GCP Equivalent box (every sheet except 42–43)

- 1–3 `note-item` lines naming the matching Azure and Google Cloud services with their sheet numbers, plus the biggest difference: `Azure — Blob Storage (az-28): containers ≈ buckets, inside a storage account · GCP — Cloud Storage (gcp-28)`.

### Cost Check box (every sheet except 42–43)

- What you're billed for on this service, the free-tier angle, and the most common surprise bill: `NAT gateway: hourly charge + per-GB processed, even when idle`.

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
- Sheets: 03, 04, 07, 08, 10, 12, 14, 15, 20, 22, 25, 26, 28, 29, 31, 32, 34, 39, 40 (same numbers as the Azure and Google Cloud sets).

## Groups

### Group 1: Getting Started (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `aws-01-overview-global-infrastructure.html` | Overview & Global Infrastructure | Regions · Availability Zones · edge locations · global vs regional services · shared responsibility model · Free Tier · ARNs |
| 02 | `aws-02-account-setup-billing.html` | Account Setup & Billing | root user & MFA · IAM Identity Center · AWS Organizations · AWS Budgets & billing alarms · Cost Explorer · tags for cost allocation |
| 03 | `aws-03-aws-cli.html` | AWS CLI v2 | install · `aws configure` · `aws configure sso` / `aws sso login` · `--profile` · `--region` / `--output` · `--query` (JMESPath) · CloudShell |
| 04 | `aws-04-sdks-credentials.html` | SDKs & Credentials | credential provider chain · `~/.aws/config` & `credentials` · `AWS_PROFILE` env vars · boto3 `Session` / `client` · JS SDK v3 clients · roles over access keys |

### Group 2: Identity & Security (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `aws-05-iam-users-groups-roles.html` | IAM Users, Groups & Roles | users vs roles · groups · `aws iam create-role` · least privilege · access keys · `aws sts get-caller-identity` |
| 06 | `aws-06-iam-policies.html` | IAM Policies | `Effect` / `Action` / `Resource` / `Condition` · managed vs inline · identity vs resource policies · explicit deny wins · policy simulator · permission boundaries |
| 07 | `aws-07-roles-temporary-credentials.html` | Roles & Temporary Credentials | trust policies · `aws sts assume-role` · instance profiles · cross-account roles · OIDC federation (GitHub Actions) · session duration |
| 08 | `aws-08-secrets-keys.html` | Secrets, Parameters & KMS | Secrets Manager · rotation · SSM Parameter Store `SecureString` · KMS keys · envelope encryption · `aws kms encrypt` |
| 09 | `aws-09-security-services.html` | Security & Audit Services | CloudTrail · GuardDuty · Security Hub · AWS Config rules · IAM Access Analyzer · WAF & Shield |

### Group 3: Networking (Sheets 10–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `aws-10-vpc-basics.html` | VPC Basics | CIDR blocks · public vs private subnets · route tables · Internet Gateway · default VPC · subnet per AZ |
| 11 | `aws-11-nat-endpoints-peering.html` | NAT, Endpoints & Connectivity | NAT gateway · gateway vs interface VPC endpoints (PrivateLink) · VPC peering · Transit Gateway · Site-to-Site VPN |
| 12 | `aws-12-security-groups-nacls.html` | Security Groups & NACLs | stateful security groups · SG-to-SG references · stateless NACLs · inbound / outbound rules · ephemeral ports · VPC Flow Logs |
| 13 | `aws-13-route-53.html` | Route 53 | hosted zones · A / AAAA / CNAME / MX / TXT records · alias records · routing policies (weighted, latency, failover) · health checks · domain registration |
| 14 | `aws-14-cloudfront-acm.html` | CloudFront & ACM | distributions · origins & behaviors · Origin Access Control · cache policies & TTLs · invalidations · ACM certificates (us-east-1) |

### Group 4: Compute (Sheets 15–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `aws-15-ec2-basics.html` | EC2 Basics | instance families & sizes · AMIs · key pairs · `aws ec2 run-instances` · user data · IMDSv2 · Graviton |
| 16 | `aws-16-ec2-operations-pricing.html` | EC2 Operations & Pricing | Session Manager · EBS volumes & snapshots · stop vs terminate · Elastic IPs · On-Demand / Spot / Savings Plans · Reserved Instances |
| 17 | `aws-17-load-balancers.html` | Elastic Load Balancing | ALB vs NLB · target groups · listeners & rules · health checks · path / host routing · sticky sessions |
| 18 | `aws-18-auto-scaling.html` | Auto Scaling | launch templates · Auto Scaling groups · desired / min / max · target tracking · scheduled scaling · instance refresh |
| 19 | `aws-19-choosing-compute.html` | Choosing Compute | EC2 vs Lambda vs ECS / Fargate vs EKS · App Runner · Elastic Beanstalk · Lightsail · decision table |

### Group 5: Serverless & Messaging (Sheets 20–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `aws-20-lambda-basics.html` | Lambda Basics | handler signature · runtimes · deploy a zip · `aws lambda invoke` · environment variables · memory & timeout · function URLs |
| 21 | `aws-21-lambda-operations.html` | Lambda Operations | layers · versions & aliases · reserved / provisioned concurrency · cold starts · SnapStart · container images · event source mappings |
| 22 | `aws-22-api-gateway.html` | API Gateway | HTTP API vs REST API · routes & integrations · stages · Lambda / JWT authorizers · CORS · throttling |
| 23 | `aws-23-eventbridge-step-functions.html` | EventBridge & Step Functions | event buses · rules & event patterns · EventBridge Scheduler · Step Functions state machines · Amazon States Language · Standard vs Express |
| 24 | `aws-24-sqs-sns.html` | SQS & SNS | standard vs FIFO queues · visibility timeout · dead-letter queues · SNS topics & subscriptions · fan-out pattern · Lambda triggers |

### Group 6: Containers (Sheets 25–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `aws-25-ecr.html` | Elastic Container Registry | `aws ecr create-repository` · `get-login-password \| docker login` · tag & push · lifecycle policies · image scanning · immutable tags |
| 26 | `aws-26-ecs-fargate.html` | ECS & Fargate | clusters · task definitions · services · Fargate vs EC2 launch type · `awsvpc` networking · task roles · ECS Exec |
| 27 | `aws-27-eks.html` | EKS | `eksctl create cluster` · `aws eks update-kubeconfig` · managed node groups · EKS Auto Mode · Pod Identity · add-ons |

### Group 7: Storage (Sheets 28–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `aws-28-s3-basics.html` | S3 Basics | buckets & keys · `aws s3 cp` / `sync` / `ls` / `rm` · `aws s3api` · storage classes · prefixes · multipart upload |
| 29 | `aws-29-s3-security-features.html` | S3 Security & Features | Block Public Access · bucket policies · presigned URLs · versioning · lifecycle rules · SSE-S3 / SSE-KMS · static website hosting |
| 30 | `aws-30-ebs-efs-backup.html` | EBS, EFS & AWS Backup | EBS volume types (gp3, io2) · snapshots · EFS shared file systems · S3 vs EBS vs EFS · AWS Backup plans |

### Group 8: Databases (Sheets 31–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `aws-31-rds-aurora.html` | RDS & Aurora | engines · Multi-AZ · read replicas · snapshots & PITR · parameter groups · RDS Proxy · Aurora Serverless v2 |
| 32 | `aws-32-dynamodb.html` | DynamoDB | partition & sort keys · `PutItem` / `GetItem` / `Query` / `Scan` · GSIs & LSIs · on-demand vs provisioned · TTL · Streams |
| 33 | `aws-33-elasticache-other-databases.html` | ElastiCache & Other Databases | ElastiCache (Valkey / Redis OSS, Memcached) · DocumentDB · OpenSearch · Neptune · choosing a database · pointer to SQL & NoSQL sets |

### Group 9: Infrastructure as Code (Sheets 34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `aws-34-cloudformation.html` | CloudFormation | template anatomy (`Parameters`, `Resources`, `Outputs`) · `!Ref` / `!Sub` / `!GetAtt` · stacks · change sets · drift detection · `aws cloudformation deploy` |
| 35 | `aws-35-cdk.html` | AWS CDK | `cdk init` · constructs (L1 / L2 / L3) · stacks & apps · `cdk bootstrap` · `cdk synth` / `diff` / `deploy` · TypeScript & Python |
| 36 | `aws-36-sam-terraform.html` | SAM & Terraform on AWS | `sam init` / `build` / `deploy` · `AWS::Serverless` transform · `sam local invoke` · Terraform AWS provider · S3 state backend · choosing an IaC tool |

### Group 10: Observability & Deployment (Sheets 37–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `aws-37-cloudwatch-metrics-alarms.html` | CloudWatch Metrics & Alarms | namespaces & dimensions · `put-metric-data` · alarms & SNS actions · dashboards · composite alarms · anomaly detection |
| 38 | `aws-38-cloudwatch-logs-xray.html` | CloudWatch Logs & Tracing | log groups & streams · retention · Logs Insights queries · metric filters · X-Ray / OpenTelemetry (ADOT) · `aws logs tail --follow` |
| 39 | `aws-39-deploying-to-aws.html` | Deploying to AWS | GitHub Actions + `configure-aws-credentials` (OIDC) · CodeBuild / CodePipeline · blue/green & canary · CodeDeploy · tagging strategy |

### Group 11: AI & Machine Learning (Sheets 40–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `aws-40-bedrock.html` | Amazon Bedrock | model access · `InvokeModel` vs Converse API · streaming · Knowledge Bases (RAG) · Agents · Guardrails |
| 41 | `aws-41-ai-ml-services.html` | AI & ML Services | SageMaker AI · Rekognition · Textract · Transcribe · Comprehend · Amazon Q Developer |

### Group 12: Quick Reference (Sheet 42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `aws-42-quick-reference-cli.html` | Quick Reference — CLI & Service Picker | `aws s3` · `ec2` · `iam` / `sts` · `lambda` · `ecr` / `ecs` / `eks` · `logs` · `cloudformation` |

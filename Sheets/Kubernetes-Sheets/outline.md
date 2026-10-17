# Kubernetes Reference Guide Outline (25 sheets)

## Metadata

- **Group it belongs to:** DevOps & Cloud (new index section; add it to the root index.html when this set is built)
- **Folder Directory:** `Sheets/Kubernetes-Sheets/k8s-##-[slug].html`
- **Groups:** 9
- **Sheets:** 25
- **Drafted Date:** 2026-10-16
- **Verified-Finalized Date:**

## Basic Information

Kubernetes for intermediate users who already know containers (images, Dockerfiles, `docker run`) and are comfortable in a terminal. The set teaches through `kubectl` commands and YAML manifests side by side: what you type, and what you'd commit to a repo. Targets current upstream Kubernetes (1.3x) with vendor-neutral examples; managed services (EKS, GKE, AKS) get short notes only where they behave differently. Gateway API is taught alongside Ingress, with a note that the community ingress-nginx controller has been retired.

Scope is the application developer / operator view: deploying, exposing, configuring, securing, scaling and debugging workloads. Out of scope: building clusters with kubeadm, etcd backup and control-plane administration, writing CRDs or operators, and GitOps tools (Argo CD, Flux), which get a mention on Sheet 23 only.

The set was capped at about 20–25 sheets plus a 1–2 page quick reference, so it runs 23 main sheets plus 2 quick-reference pages, with some related topics merged onto dense sheets.

## Differences in Layout from Basic Structure

- The Outline Guide has no infrastructure/tool category; the standard language groups (data types, operators, OOP) don't apply, so groups follow the life of an app on a cluster: set up, run, expose, configure, place and scale, secure, operate.
- Code rows hold either `kubectl` shell commands (`language-bash`) or YAML manifests (`language-yaml`); some sheets stack two code sections in the left column (e.g. Job + CronJob, Ingress + HTTPRoute, Helm + Kustomize). Every sheet with code loads the Prism bash and yaml components.
- Sheets 24–25 are quick-reference pages: rows of side-by-side tables at 9px with no description or code row, ending with a short footer trio. Sheet 24 uses Command · Does · # (the sheet with details); Sheet 25 has the apiVersion/kind table, YAML snippets, a Status → Likely Cause → Fix table, defaults and selector syntax.

## Groups

### Group 1: Introduction & Setup (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `k8s-01-introduction-architecture.html` | Introduction & Architecture | control plane · kube-apiserver · etcd · scheduler · controller-manager · kubelet · kube-proxy · desired state & reconcile loop |
| 02 | `k8s-02-local-clusters-kubectl.html` | Local Clusters & Installing kubectl | kind · minikube · k3d / k3s · Docker Desktop · kubectl install · version skew · kubectl version · managed EKS / GKE / AKS |
| 03 | `k8s-03-kubeconfig-contexts-namespaces.html` | kubeconfig, Contexts & Namespaces | ~/.kube/config · KUBECONFIG merging · config get-contexts · use-context · set-context --current --namespace · kubectx / kubens · default / kube-system |

### Group 2: kubectl Essentials (Sheets 04–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `k8s-04-kubectl-get-describe-output.html` | Inspecting Resources & Output Formats | get · describe · -o wide / yaml / json · -o jsonpath · custom-columns · -A / -n · --watch · explain · api-resources |
| 05 | `k8s-05-imperative-vs-declarative.html` | Imperative vs Declarative | create · run · expose · apply -f · diff · --dry-run=client -o yaml · edit / patch · --server-side · delete |
| 06 | `k8s-06-manifests-labels-selectors.html` | Manifests, Labels & Selectors | apiVersion / kind / metadata / spec · multi-doc --- · labels · equality vs set-based selectors · -l app=web · annotations · app.kubernetes.io/* labels |

### Group 3: Workloads (Sheets 07–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `k8s-07-pods.html` | Pods | containers · command / args · env · initContainers · sidecars (restartPolicy: Always) · Pod phases · restartPolicy · imagePullPolicy |
| 08 | `k8s-08-deployments-rollouts.html` | Deployments & Rollouts | ReplicaSet · replicas · RollingUpdate maxSurge / maxUnavailable · Recreate · rollout status / history / undo · rollout restart · scale |
| 09 | `k8s-09-statefulsets-daemonsets.html` | StatefulSets & DaemonSets | stable pod names · headless Service · volumeClaimTemplates · podManagementPolicy · DaemonSet per node · updateStrategy · partition |
| 10 | `k8s-10-jobs-cronjobs.html` | Jobs & CronJobs | completions · parallelism · backoffLimit · activeDeadlineSeconds · ttlSecondsAfterFinished · schedule · concurrencyPolicy · timeZone / suspend |
| 11 | `k8s-11-probes-lifecycle.html` | Health Probes & Pod Lifecycle | livenessProbe · readinessProbe · startupProbe · httpGet / tcpSocket / exec / grpc · initialDelaySeconds / periodSeconds · preStop · terminationGracePeriodSeconds |

### Group 4: Networking (Sheets 12–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `k8s-12-services-dns.html` | Services & DNS | ClusterIP · NodePort · LoadBalancer · ExternalName · port vs targetPort · EndpointSlices · CoreDNS · svc.ns.svc.cluster.local |
| 13 | `k8s-13-ingress-gateway-api.html` | Ingress & Gateway API | Ingress rules · ingressClassName · TLS secrets · GatewayClass · Gateway · HTTPRoute · path / header matching · ingress-nginx retirement |
| 14 | `k8s-14-network-policies.html` | Network Policies | default deny · podSelector · namespaceSelector · ingress / egress rules · ipBlock · ports · CNI support (Calico, Cilium) |

### Group 5: Configuration & Storage (Sheets 15–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `k8s-15-configmaps-secrets.html` | ConfigMaps & Secrets | create --from-literal / --from-file / --from-env-file · env valueFrom · envFrom · volume mounts · base64 ≠ encryption · immutable · External Secrets |
| 16 | `k8s-16-volumes-persistent-storage.html` | Volumes & Persistent Storage | emptyDir · hostPath · PersistentVolume · PersistentVolumeClaim · StorageClass · RWO / RWX / RWOP · reclaimPolicy · CSI |

### Group 6: Resources, Scheduling & Scaling (Sheets 17–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `k8s-17-requests-limits-quotas.html` | Requests, Limits & Quotas | requests vs limits · CPU millicores / memory Mi · QoS classes · OOMKilled · CPU throttling · LimitRange · ResourceQuota |
| 18 | `k8s-18-scheduling-node-placement.html` | Scheduling & Node Placement | nodeSelector · node affinity · pod affinity / anti-affinity · taints & tolerations · topologySpreadConstraints · cordon / drain / uncordon |
| 19 | `k8s-19-autoscaling-disruptions.html` | Autoscaling & Disruption Budgets | HorizontalPodAutoscaler (autoscaling/v2) · kubectl autoscale · metrics-server · VerticalPodAutoscaler · Cluster Autoscaler · Karpenter · PodDisruptionBudget |

### Group 7: Security (Sheets 20–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `k8s-20-rbac-serviceaccounts.html` | RBAC & ServiceAccounts | Role / ClusterRole · RoleBinding / ClusterRoleBinding · verbs & resources · ServiceAccount · kubectl create token · auth can-i · --as · automountServiceAccountToken |
| 21 | `k8s-21-pod-security.html` | Pod Security | securityContext · runAsNonRoot / runAsUser · readOnlyRootFilesystem · capabilities drop ALL · allowPrivilegeEscalation · seccompProfile RuntimeDefault · Pod Security Admission (privileged / baseline / restricted) |

### Group 8: Operations & Tooling (Sheets 22–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `k8s-22-debugging-troubleshooting.html` | Debugging & Troubleshooting | logs -f / --previous / -c · exec -it · kubectl debug · port-forward · events --sort-by · top · CrashLoopBackOff / ImagePullBackOff / Pending |
| 23 | `k8s-23-helm-kustomize.html` | Helm & Kustomize | helm repo add · upgrade --install · values.yaml / -f / --set · helm template / rollback · kustomization.yaml · bases & overlays · apply -k |

Sheet 23 closes with a short "Where Next" table naming GitOps (Argo CD, Flux), operators/CRDs, policy engines and service meshes, with no examples.

### Group 9: Quick Reference (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `k8s-24-quick-reference-kubectl.html` | Quick Reference — kubectl Commands | contexts & namespaces · get / describe / output flags · create / apply / delete · rollouts & scaling · logs / exec / port-forward · nodes · auth can-i |
| 25 | `k8s-25-quick-reference-manifests-troubleshooting.html` | Quick Reference — Manifests & Troubleshooting | apiVersion / kind table · short names (po, deploy, svc, cm) · minimal manifest skeletons · probe & resource snippets · Status → cause → fix table |

A compact lookup that condenses Sheets 01–23, with no explanations. Sheet 25's troubleshooting table covers the statuses readers hit most: Pending, ContainerCreating, ImagePullBackOff, CrashLoopBackOff, OOMKilled, Evicted, CreateContainerConfigError, and a Service with no endpoints.

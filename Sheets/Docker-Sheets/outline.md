# Docker Reference Guide Outline (31 sheets)

## Metadata

- **Group it belongs to:** DevOps & Cloud (new index section; add it to the root index.html when this set is built)
- **Folder Directory:** `Sheets/Docker-Sheets/docker-##-[slug].html`
- **Groups:** 10
- **Sheets:** 31
- **Drafted Date:** 2026-10-16
- **Verified-Finalized Date:**

## Basic Information

Docker from the command line and Docker Desktop: running containers, building images with Dockerfiles, storage, networking and multi-container apps with Docker Compose. Written for intermediate developers who know a terminal and want to containerize their own apps, not for cluster operators. Every sheet is code-first: a command or file snippet, then what each flag or key does.

Targets current Docker Engine with BuildKit as the default builder (23.0+), current Docker Desktop (4.x), and Compose v2 (`docker compose`, the Compose Specification, `compose.yaml`). The legacy `docker-compose` binary and the top-level `version:` key get one "legacy" note on Sheet 21 only. Management-command forms (`docker container ls`) are shown next to the short aliases (`docker ps`) the first time each appears.

The set was capped at about 23 topic sheets plus 2 quick-reference pages, then expanded by 3 sheets for Docker Desktop and 3 for Docker Swarm. Out of scope: Kubernetes, which has its own set.

## Differences in Layout from Basic Structure

- The Outline Guide has no CLI-tool category, so groups follow the Docker workflow (set up → run → image → build → store/network → compose → swarm → operate) instead of the standard language groups.
- Docker Desktop sheets (04–06) use settings-path tables (`Settings › Resources › Advanced` · what it controls · default) where a feature has no CLI equivalent, with the `docker desktop` command shown when one exists.
- Dockerfile and Compose sheets use the file being edited (`Dockerfile`, `compose.yaml`) as the code block, with the matching CLI command underneath.
- Sheets 30–31 are quick-reference pages: two side-by-side tables per row (Command/Key · Does · #) at 9px, grouped by task, with no code row and no Description/Notes row.

## Groups

### Group 1: Introduction & Setup (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `docker-01-introduction-architecture.html` | Introduction & Architecture | containers vs VMs · images vs containers · layers · dockerd · containerd / runc · OCI · registries |
| 02 | `docker-02-installation-cli-basics.html` | Installation & CLI Basics | Desktop vs Engine · docker-ce on Linux · docker version / info · docker group · rootless mode · management commands vs aliases · --format |
| 03 | `docker-03-contexts-configuration.html` | Contexts & Configuration | docker context create / use · DOCKER_HOST · ssh:// hosts · ~/.docker/config.json · credsStore · /etc/docker/daemon.json |

### Group 2: Docker Desktop (Sheets 04–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `docker-04-desktop-install-settings.html` | Docker Desktop — Install & Settings | macOS / Windows / Linux installs · WSL 2 backend · CPU / memory / disk limits · file sharing (VirtioFS) · Rosetta on Apple silicon · docker desktop start / stop / status · license terms |
| 05 | `docker-05-desktop-dashboard.html` | Docker Desktop — Dashboard | Containers / Images / Volumes views · logs & terminal · Builds view · Docker Scout tab · Extensions · Ask Gordon |
| 06 | `docker-06-desktop-only-features.html` | Docker Desktop — Desktop-Only Features | built-in Kubernetes · host.docker.internal · Model Runner (docker model) · Enhanced Container Isolation · proxy settings · Troubleshoot / reset to factory defaults |

Sheet 02 covers the Desktop-vs-Engine choice in one box and points here for the details.

### Group 3: Running Containers (Sheets 07–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `docker-07-running-containers.html` | Running Containers | docker run · -d · -it · --rm · --name · -e / --env-file · -w · --entrypoint |
| 08 | `docker-08-container-lifecycle.html` | Container Lifecycle | docker ps -a · start / stop / restart · kill · pause · rm -f · container prune · --restart policies · container states |
| 09 | `docker-09-logs-inspecting.html` | Logs & Inspecting | docker logs -f --tail --since · inspect · --format '{{.State.Status}}' · top · stats · port · diff · events |
| 10 | `docker-10-exec-copy-debug.html` | Exec, Copy & Debugging | docker exec -it sh · exec -u root · attach vs exec · docker cp · docker debug · commit · exit codes 125 / 126 / 127 |
| 11 | `docker-11-resource-limits-runtime.html` | Resource Limits & Runtime Options | --memory · --cpus · --pids-limit · --user · --read-only · --tmpfs · --init · OOMKilled / 137 |

### Group 4: Images & Registries (Sheets 12–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `docker-12-working-with-images.html` | Working with Images | docker pull · image ls · tags vs digests · @sha256: · rmi · image prune -a · history · save / load |
| 13 | `docker-13-tagging-registries.html` | Tagging & Registries | docker tag · login / logout · push · Docker Hub namespaces · ghcr.io / ECR / ACR · registry:2 · --platform |

### Group 5: Dockerfile & Building (Sheets 14–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `docker-14-dockerfile-basics.html` | Dockerfile Basics | FROM · RUN · COPY vs ADD · WORKDIR · EXPOSE · CMD vs ENTRYPOINT · exec vs shell form · .dockerignore |
| 15 | `docker-15-dockerfile-configuration.html` | Dockerfile Configuration Instructions | ENV vs ARG · USER · LABEL · HEALTHCHECK · VOLUME · SHELL · STOPSIGNAL · # syntax= |
| 16 | `docker-16-docker-build-buildkit.html` | docker build & BuildKit | docker build -t · -f · build context · --build-arg · --target · --no-cache · --progress=plain · DOCKER_BUILDKIT |
| 17 | `docker-17-multi-stage-caching.html` | Multi-Stage Builds & Layer Caching | FROM … AS · COPY --from= · layer order · RUN --mount=type=cache · --mount=type=secret · slim / alpine / distroless |
| 18 | `docker-18-buildx-multi-platform.html` | Buildx & Multi-Platform Builds | docker buildx create / use · --platform linux/amd64,linux/arm64 · --push · --cache-to / --cache-from · imagetools inspect · buildx bake |

### Group 6: Storage & Networking (Sheets 19–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `docker-19-volumes-bind-mounts.html` | Volumes & Bind Mounts | volume create / ls / rm · -v vs --mount · named vs anonymous · bind mounts · :ro · tmpfs · volume backup pattern |
| 20 | `docker-20-networking.html` | Networking | -p host:container · network create · bridge / host / none · user-defined bridge DNS · --network · network connect · overlay / macvlan |

### Group 7: Docker Compose (Sheets 21–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `docker-21-compose-basics.html` | Compose Basics | compose.yaml · services · image vs build · docker compose up -d · down · ps / logs · docker init · legacy docker-compose |
| 22 | `docker-22-compose-services.html` | Compose Service Configuration | ports · environment / env_file · command / entrypoint · restart · healthcheck · depends_on: condition · deploy.resources |
| 23 | `docker-23-compose-volumes-networks-secrets.html` | Compose Volumes, Networks & Secrets | top-level volumes / networks · external: true · secrets · configs · .env interpolation · ${VAR:-default} · profiles |
| 24 | `docker-24-compose-workflows.html` | Compose Workflows | compose exec vs run --rm · build --pull · watch / develop.watch · -f override files · compose.override.yaml · config · include · --scale |

### Group 8: Docker Swarm (Sheets 25–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `docker-25-swarm-setup-nodes.html` | Swarm Setup & Nodes | docker swarm init · swarm join · join-token · manager vs worker · node ls / promote / demote · node update --availability drain · Raft quorum |
| 26 | `docker-26-swarm-services-updates.html` | Swarm Services & Rolling Updates | docker service create / ls / ps · service scale · replicated vs global · --update-parallelism · --update-delay · service rollback · --constraint |
| 27 | `docker-27-swarm-stacks-secrets-overlay.html` | Stacks, Secrets & Overlay Networks | docker stack deploy -c · stack ls / ps / rm · deploy: keys · secret create · config create · overlay networks · routing mesh |

Swarm reuses `compose.yaml` files, so Sheet 27 points back to Sheets 21–23 and covers only what changes under `docker stack deploy` (the `deploy:` keys that take effect, and `build:` being ignored). Sheet 26 ends with a short "Swarm vs Kubernetes" box pointing to the Kubernetes set.

### Group 9: Operations & Security (Sheets 28–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `docker-28-cleanup-troubleshooting.html` | Cleanup & Troubleshooting | system df · system prune -a --volumes · builder prune · logging drivers / log-opts · port already allocated · socket permission denied · no space left |
| 29 | `docker-29-security-best-practices.html` | Security & Best Practices | non-root USER · --cap-drop ALL · --security-opt no-new-privileges · secrets not ENV · pin by digest · docker scout cves · SBOM · minimal base images |

### Group 10: Quick Reference (Sheets 30–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `docker-30-quick-reference-cli.html` | Quick Reference — CLI Commands | containers · run flags · images · build · volumes · networks · system · swarm / service / stack · docker desktop |
| 31 | `docker-31-quick-reference-dockerfile-compose.html` | Quick Reference — Dockerfile & Compose | Dockerfile instructions · compose.yaml keys · compose CLI · run flag → Compose key · exit codes · Desktop settings paths |

Sheet 31 includes a small mapping table from common `docker run` flags to their `compose.yaml` keys (`-p` → `ports`, `-v` → `volumes`, `-e` → `environment`, `--restart` → `restart`).

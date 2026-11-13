# Ubuntu Reference Guide Outline (49 sheets)

## Metadata

- **Group it belongs to:** Command Line Interface
- **Folder Directory:** `Sheets/Ubuntu-Sheets/ub-##-[slug].html`
- **PDF Name:** `Ubuntu Reference Guide.pdf`
- **Groups:** 12
- **Sheets:** 49
- **Drafted Date:** 2026-11-13
- **Verified-Finalized Date:**

## Basic Information

Using and administering Ubuntu Linux from the command line, for beginner-to-intermediate readers who are comfortable in a terminal and want to run an Ubuntu desktop or server (a home server, a VPS, a VM). Server-first: most sheets work the same on desktop, and a short Desktop group covers what's different there.

Targets Ubuntu 26.04 LTS with notes for 24.04 LTS where commands or defaults differ (for example `sudo-rs` and the Rust coreutils introduced in 25.10, apt 3.x output, deb822 `.sources` files). Release details and defaults should be re-checked against the Ubuntu release notes when each sheet is built. Shell scripting lives in the Bash set, containers in the Docker set, and Git in the Git set; those sheets here are pointers plus the Ubuntu-specific setup.

Teaching is command-first: every sheet has a working terminal session or config file with inline notes, then reference tables. Ends with a 2-page quick reference.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Other Distros** (`section-notes section-distro`, `id="distro"`) under Code Explained on every sheet except 48–49: 2–3 `note-item` lines for Debian, Fedora/RHEL and macOS (`Fedora — sudo dnf install nginx`, `macOS — brew install nginx`) · **Prefer / Avoid** (`section-notes section-idiom`, `id="idiom"`) under Code Explained on every sheet except 48–49 · **Danger Check** (`section-notes section-danger`, `id="danger"`) in Row 1 on selected sheets: commands that can lose data, break boot or lock you out, and how to make them safe. Sheets: 02, 07, 09, 12, 16, 18, 24, 25, 26, 27, 29, 31, 33, 46, 47.
- Code blocks are terminal sessions (Prism `bash`) or config files (`ini`, `yaml`, `nginx`); prompts are shown as `$` for a user and `#` for root, never mixed in one block.
- Groups follow an admin's workflow (install → files → users → packages → services → storage → network → security → server roles) instead of the standard language group order.
- Sheet CSS is `Sheets/CSS/ub-cheatsheet.css` (Ubuntu-orange sheet-number badge, box colors).
- Sheets 48–49 are table-only quick-reference pages (Command · Does · Sheet #) with no code row.

## Groups

### Group 1: Introduction & Installation (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ub-01-introduction.html` | Introduction & Release Cycle | Canonical · Debian roots · LTS vs interim · `YY.MM` versions & codenames · standard support vs ESM · flavors (Kubuntu, Xubuntu, Server, Core) |
| 02 | `ub-02-installation.html` | Installing Ubuntu | ISO + bootable USB · desktop installer · Subiquity server installer · disk layout choices (LVM, encryption) · OpenSSH option · dual boot |
| 03 | `ub-03-first-boot.html` | First Boot Checklist | `sudo apt update && sudo apt upgrade` · `hostnamectl` · `timedatectl` · locale · create a user · enable SSH · `lsb_release -a` / `/etc/os-release` |
| 04 | `ub-04-getting-help.html` | Getting Help | `man` · `--help` · `apropos` · `tldr` · `info` · `/usr/share/doc` · Ask Ubuntu & Discourse |

### Group 2: Files & the Filesystem (Sheets 05–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `ub-05-filesystem-layout.html` | Filesystem Layout | `/` · `/etc` · `/home` · `/var` · `/usr` · `/opt` · `/tmp` · `/dev` · `/proc` · merged `/usr` |
| 06 | `ub-06-navigating-files.html` | Navigating & Managing Files | `pwd` · `cd` · `ls -lah` · `cp -r` · `mv` · `mkdir -p` · `touch` · globbing |
| 07 | `ub-07-deleting-files.html` | Deleting Files Safely | `rm` / `rm -r` · `rm -i` · `rmdir` · `trash-cli` / `gio trash` · `shred` · no recycle bin on the CLI |
| 08 | `ub-08-viewing-editing.html` | Viewing & Editing Text | `cat` · `less` · `head` / `tail -f` · `nano` · `vim` basics · `sudoedit` · `diff` |
| 09 | `ub-09-permissions-ownership.html` | Permissions & Ownership | `rwx` · `chmod 755` / `u+x` · `chown user:group` · `-R` flag · `ls -l` columns · `stat` |
| 10 | `ub-10-finding-archives.html` | Finding Files & Archives | `find -name -mtime -exec` · `plocate` · `which` / `type` · `grep -r` · `tar -czf` / `-xzf` · `zip` / `unzip` · `zstd` |

### Group 3: Users & Privileges (Sheets 11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `ub-11-users-groups.html` | Users & Groups | `adduser` · `usermod -aG` · `deluser` · `passwd` · `groups` / `id` · `/etc/passwd` · `/etc/group` |
| 12 | `ub-12-sudo.html` | sudo & Root | `sudo` · `sudo -i` · `sudo` group · `visudo` · `/etc/sudoers.d/` · `sudo-rs` (25.10+) · locked root account |
| 13 | `ub-13-acls-special-bits.html` | umask, ACLs & Special Bits | `umask` · `setfacl` / `getfacl` · setuid · setgid on directories · sticky bit · `chattr +i` |

### Group 4: Package Management (Sheets 14–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `ub-14-apt-basics.html` | apt Basics | `apt update` · `install` · `remove` / `purge` · `autoremove` · `search` / `show` · `list --installed` · `apt` vs `apt-get` |
| 15 | `ub-15-repositories-ppas.html` | Repositories & PPAs | main / restricted / universe / multiverse · deb822 `/etc/apt/sources.list.d/ubuntu.sources` · `add-apt-repository` · signed-by keyrings · vendor repos |
| 16 | `ub-16-dpkg-deb.html` | dpkg & .deb Files | `dpkg -i` · `apt install ./file.deb` · `dpkg -l` / `-L` / `-S` · `apt-mark hold` · fixing broken installs `apt --fix-broken install` |
| 17 | `ub-17-snap-flatpak.html` | Snap, Flatpak & Other Formats | `snap install` / `refresh` / `remove` · channels & `--classic` · `snap list` · Flatpak + Flathub · AppImage · when to pick which |
| 18 | `ub-18-updates-upgrades.html` | Updates & Release Upgrades | `unattended-upgrades` · `dpkg-reconfigure` · `needrestart` · `/var/run/reboot-required` · `do-release-upgrade` · LTS-to-LTS upgrade path |

### Group 5: Processes & Services (Sheets 19–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `ub-19-processes.html` | Processes | `ps aux` · `top` / `htop` · `kill` / `pkill` / `killall` · signals (`TERM`, `KILL`, `HUP`) · `nice` / `renice` · `jobs` / `bg` / `fg` · `nohup` |
| 20 | `ub-20-systemctl.html` | systemd & systemctl | units · `systemctl start` / `stop` / `restart` / `status` · `enable --now` · `is-active` · `list-units --failed` · targets |
| 21 | `ub-21-unit-files.html` | Writing Service Units | `/etc/systemd/system/app.service` · `[Unit]` / `[Service]` / `[Install]` · `ExecStart` · `Restart=on-failure` · `User=` · `daemon-reload` · `systemctl edit` overrides |
| 22 | `ub-22-logs-journalctl.html` | Logs & journalctl | `journalctl -u nginx` · `-f` · `--since` · `-p err` · `-b` · `/var/log` · `logrotate` · `dmesg` |
| 23 | `ub-23-scheduling.html` | Scheduling Jobs | `crontab -e` · cron syntax · `/etc/cron.d` · systemd timers · `OnCalendar=` · `systemctl list-timers` · `at` |

### Group 6: Storage & Disks (Sheets 24–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `ub-24-disks-partitions.html` | Disks & Partitions | `lsblk` · `fdisk -l` · `parted` · GPT vs MBR · `/dev/sda` vs `/dev/nvme0n1` · `blkid` · `wipefs` |
| 25 | `ub-25-filesystems-mounting.html` | Filesystems & Mounting | `mkfs.ext4` · `mount` / `umount` · `/etc/fstab` · UUIDs · `nofail` · `mount -a` test · USB & external drives |
| 26 | `ub-26-lvm.html` | LVM | PV / VG / LV · `pvcreate` · `vgcreate` · `lvcreate` · `lvextend -r` · `resize2fs` · snapshots · default Ubuntu Server LVM layout |
| 27 | `ub-27-zfs-raid.html` | ZFS & Software RAID | `zpool create` · mirrors / raidz · `zfs create` · snapshots · `zpool status` · `mdadm` RAID 1/5 · scrubs |

### Group 7: Networking (Sheets 28–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `ub-28-network-basics.html` | Network Basics | `ip a` · `ip route` · `ss -tulpn` · `ping` · `curl` / `wget` · `traceroute` / `mtr` · `nc` |
| 29 | `ub-29-netplan.html` | Netplan | `/etc/netplan/*.yaml` · DHCP vs static IP · `addresses` / `routes` / `nameservers` · `netplan try` · `netplan apply` · Wi-Fi · NetworkManager on desktop |
| 30 | `ub-30-dns-hostnames.html` | DNS & Hostnames | `hostnamectl set-hostname` · `/etc/hosts` · systemd-resolved · `resolvectl status` · `dig` / `nslookup` · mDNS (`.local`) with Avahi |
| 31 | `ub-31-ssh.html` | SSH | `ssh user@host` · `ssh-keygen -t ed25519` · `ssh-copy-id` · `~/.ssh/config` · `sshd_config` & `sshd_config.d/` · disable password login · port forwarding |
| 32 | `ub-32-file-transfer.html` | File Transfer | `scp` · `rsync -avz --delete` · `sftp` · `rsync` over SSH · dry runs `-n` · `wget -c` |

### Group 8: Security (Sheets 33–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `ub-33-ufw.html` | UFW Firewall | `ufw allow OpenSSH` · `ufw enable` · `allow 443/tcp` · `from 192.168.1.0/24` · `status numbered` · `delete` · app profiles |
| 34 | `ub-34-fail2ban-ssh-hardening.html` | fail2ban & SSH Hardening | `fail2ban` jails · `jail.local` · `fail2ban-client status sshd` · key-only auth · `AllowUsers` · non-default port tradeoffs |
| 35 | `ub-35-apparmor.html` | AppArmor | profiles · enforce vs complain · `aa-status` · `aa-complain` / `aa-enforce` · snap confinement · reading denials in logs |
| 36 | `ub-36-ubuntu-pro-security.html` | Ubuntu Pro & Security Updates | `pro attach` · ESM · Livepatch · `pro status` · `apt list --upgradable` · USNs · CIS / USG hardening overview |

### Group 9: Server Roles (Sheets 37–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `ub-37-nginx-tls.html` | Nginx & HTTPS | `apt install nginx` · `sites-available` / `sites-enabled` · server blocks · reverse proxy `proxy_pass` · `nginx -t` · Certbot / Let's Encrypt · Apache note |
| 38 | `ub-38-docker-on-ubuntu.html` | Docker on Ubuntu | Docker's apt repo vs `docker.io` vs snap · `docker` group · Compose plugin · enabling on boot · UFW + Docker caveat · pointer to Docker set |
| 39 | `ub-39-samba-nfs.html` | File Sharing: Samba & NFS | `smb.conf` shares · `smbpasswd -a` · access from macOS/Windows · `nfs-kernel-server` · `/etc/exports` · `exportfs -ra` |
| 40 | `ub-40-vms-lxd-multipass.html` | VMs & System Containers | Multipass (`multipass launch`) · LXD (`lxc launch`) · KVM/QEMU + `virt-manager` · `kvm-ok` · when to use which |
| 41 | `ub-41-cloud-init-autoinstall.html` | cloud-init & Autoinstall | `#cloud-config` · `users` / `packages` / `runcmd` · `cloud-init status` · Subiquity autoinstall YAML · cloud images · repeatable servers |

### Group 10: Desktop (Sheets 42–44)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `ub-42-gnome-desktop.html` | GNOME Desktop & Settings | GNOME Shell · `gsettings` · `dconf` · extensions · Wayland vs X11 · keyboard shortcuts · `.desktop` launchers |
| 43 | `ub-43-drivers-hardware.html` | Drivers & Hardware | `ubuntu-drivers devices` / `install` · NVIDIA drivers · `lspci` / `lsusb` · `lshw` · firmware (`fwupdmgr`) · printers & Bluetooth |
| 44 | `ub-44-wsl.html` | Ubuntu on WSL | `wsl --install -d Ubuntu` · WSL 2 · `/mnt/c` · `wsl.conf` · systemd in WSL · VS Code Remote · Windows ↔ Linux paths |

### Group 11: Monitoring, Troubleshooting & Backup (Sheets 45–47)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 45 | `ub-45-system-info-performance.html` | System Info & Performance | `uname -a` · `lscpu` · `free -h` · `df -h` / `du -sh` / `ncdu` · `uptime` / load average · `vmstat` / `iostat` · `btop` |
| 46 | `ub-46-boot-grub-recovery.html` | Boot, GRUB & Recovery | GRUB menu · `/etc/default/grub` · `update-grub` · recovery mode · `systemd-analyze blame` · kernels (`apt list --installed 'linux-image*'`) · fixing a bad fstab |
| 47 | `ub-47-backup-restore.html` | Backup & Restore | `rsync` backups · `tar` snapshots · Déjà Dup · Timeshift · ZFS/LVM snapshots · `restic` / `borg` · 3-2-1 rule · test restores |

### Group 12: Quick Reference (Sheets 48–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 48 | `ub-48-quick-reference-files-packages.html` | Quick Reference — Files, Users & Packages | file commands · permissions · users & sudo · apt / dpkg / snap · archives · help |
| 49 | `ub-49-quick-reference-system-network.html` | Quick Reference — Services, Storage & Network | systemctl / journalctl · disks & mounts · ip / ss / netplan · SSH & rsync · UFW · key config file paths |

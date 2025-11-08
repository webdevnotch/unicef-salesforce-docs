import{_ as s,c as n,o as a,a as l}from"./app.6a59c4a4.js";const A=JSON.parse('{"title":"Clean VM Setup Guide - Salesforce Middleware","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3AF} Overview","slug":"\u{1F3AF}-overview","link":"#\u{1F3AF}-overview","children":[]},{"level":2,"title":"\u{1F4CB} Table of Contents","slug":"\u{1F4CB}-table-of-contents","link":"#\u{1F4CB}-table-of-contents","children":[]},{"level":2,"title":"\u{1F5A5}\uFE0F System Requirements","slug":"\u{1F5A5}\uFE0F-system-requirements","link":"#\u{1F5A5}\uFE0F-system-requirements","children":[{"level":3,"title":"Minimum Requirements","slug":"minimum-requirements","link":"#minimum-requirements","children":[]},{"level":3,"title":"Recommended for Production","slug":"recommended-for-production","link":"#recommended-for-production","children":[]},{"level":3,"title":"High-Volume Production (450k+ jobs/day)","slug":"high-volume-production-450k-jobs-day","link":"#high-volume-production-450k-jobs-day","children":[]}]},{"level":2,"title":"\u{1F5A5}\uFE0F VM Setup & OS Installation","slug":"\u{1F5A5}\uFE0F-vm-setup-os-installation","link":"#\u{1F5A5}\uFE0F-vm-setup-os-installation","children":[{"level":3,"title":"Step 1: Create Virtual Machine","slug":"step-1-create-virtual-machine","link":"#step-1-create-virtual-machine","children":[]},{"level":3,"title":"Step 2: OS Installation","slug":"step-2-os-installation","link":"#step-2-os-installation","children":[]}]},{"level":2,"title":"\u2699\uFE0F Initial Server Configuration","slug":"\u2699\uFE0F-initial-server-configuration","link":"#\u2699\uFE0F-initial-server-configuration","children":[{"level":3,"title":"Step 1: Update System","slug":"step-1-update-system","link":"#step-1-update-system","children":[]},{"level":3,"title":"Step 2: Configure Firewall","slug":"step-2-configure-firewall","link":"#step-2-configure-firewall","children":[]},{"level":3,"title":"Step 3: Configure Timezone and NTP","slug":"step-3-configure-timezone-and-ntp","link":"#step-3-configure-timezone-and-ntp","children":[]},{"level":3,"title":"Step 4: Create Application User","slug":"step-4-create-application-user","link":"#step-4-create-application-user","children":[]}]},{"level":2,"title":"\u{1F4E6} Software Installation","slug":"\u{1F4E6}-software-installation","link":"#\u{1F4E6}-software-installation","children":[{"level":3,"title":"Step 1: Install Node.js 18+","slug":"step-1-install-node-js-18","link":"#step-1-install-node-js-18","children":[]},{"level":3,"title":"Step 2: Install PostgreSQL 15+","slug":"step-2-install-postgresql-15","link":"#step-2-install-postgresql-15","children":[]},{"level":3,"title":"Step 3: Install Redis 7+","slug":"step-3-install-redis-7","link":"#step-3-install-redis-7","children":[]},{"level":3,"title":"Step 4: Install Nginx","slug":"step-4-install-nginx","link":"#step-4-install-nginx","children":[]},{"level":3,"title":"Step 5: Install PM2 (Process Manager)","slug":"step-5-install-pm2-process-manager","link":"#step-5-install-pm2-process-manager","children":[]},{"level":3,"title":"Step 6: Install Additional Tools","slug":"step-6-install-additional-tools","link":"#step-6-install-additional-tools","children":[]}]},{"level":2,"title":"\u{1F5C4}\uFE0F Database Setup","slug":"\u{1F5C4}\uFE0F-database-setup","link":"#\u{1F5C4}\uFE0F-database-setup","children":[{"level":3,"title":"Step 1: Configure PostgreSQL","slug":"step-1-configure-postgresql","link":"#step-1-configure-postgresql","children":[]},{"level":3,"title":"Step 2: Configure Redis","slug":"step-2-configure-redis","link":"#step-2-configure-redis","children":[]}]},{"level":2,"title":"\u{1F680} Application Deployment","slug":"\u{1F680}-application-deployment","link":"#\u{1F680}-application-deployment","children":[{"level":3,"title":"Step 1: Deploy Application Code","slug":"step-1-deploy-application-code","link":"#step-1-deploy-application-code","children":[]},{"level":3,"title":"Step 2: Create Environment Configuration","slug":"step-2-create-environment-configuration","link":"#step-2-create-environment-configuration","children":[]},{"level":3,"title":"Step 3: Run Database Migrations","slug":"step-3-run-database-migrations","link":"#step-3-run-database-migrations","children":[]},{"level":3,"title":"Step 4: Create PM2 Configuration","slug":"step-4-create-pm2-configuration","link":"#step-4-create-pm2-configuration","children":[]},{"level":3,"title":"Step 5: Create Logs Directory and Start Application","slug":"step-5-create-logs-directory-and-start-application","link":"#step-5-create-logs-directory-and-start-application","children":[]}]},{"level":2,"title":"\u{1F310} Web Server Configuration","slug":"\u{1F310}-web-server-configuration","link":"#\u{1F310}-web-server-configuration","children":[{"level":3,"title":"Step 1: Configure Nginx","slug":"step-1-configure-nginx","link":"#step-1-configure-nginx","children":[]},{"level":3,"title":"Step 2: Enable Site and Test Configuration","slug":"step-2-enable-site-and-test-configuration","link":"#step-2-enable-site-and-test-configuration","children":[]},{"level":3,"title":"Step 3: Setup SSL Certificate","slug":"step-3-setup-ssl-certificate","link":"#step-3-setup-ssl-certificate","children":[]}]},{"level":2,"title":"\u{1F512} Security Hardening","slug":"\u{1F512}-security-hardening","link":"#\u{1F512}-security-hardening","children":[{"level":3,"title":"Step 1: Configure SSH Security","slug":"step-1-configure-ssh-security","link":"#step-1-configure-ssh-security","children":[]},{"level":3,"title":"Step 2: Install and Configure Fail2ban","slug":"step-2-install-and-configure-fail2ban","link":"#step-2-install-and-configure-fail2ban","children":[]},{"level":3,"title":"Step 3: Configure Automatic Security Updates","slug":"step-3-configure-automatic-security-updates","link":"#step-3-configure-automatic-security-updates","children":[]},{"level":3,"title":"Step 4: Configure Firewall Rules","slug":"step-4-configure-firewall-rules","link":"#step-4-configure-firewall-rules","children":[]}]},{"level":2,"title":"\u{1F4CA} Monitoring & Logging","slug":"\u{1F4CA}-monitoring-logging","link":"#\u{1F4CA}-monitoring-logging","children":[{"level":3,"title":"Step 1: Setup Log Rotation","slug":"step-1-setup-log-rotation","link":"#step-1-setup-log-rotation","children":[]},{"level":3,"title":"Step 2: Install and Configure Monitoring Tools","slug":"step-2-install-and-configure-monitoring-tools","link":"#step-2-install-and-configure-monitoring-tools","children":[]},{"level":3,"title":"Step 3: Setup Health Check Scripts","slug":"step-3-setup-health-check-scripts","link":"#step-3-setup-health-check-scripts","children":[]}]},{"level":2,"title":"\u26A1 Performance Optimization","slug":"\u26A1-performance-optimization","link":"#\u26A1-performance-optimization","children":[{"level":3,"title":"Step 1: Kernel Parameters Optimization","slug":"step-1-kernel-parameters-optimization","link":"#step-1-kernel-parameters-optimization","children":[]},{"level":3,"title":"Step 2: Configure System Limits","slug":"step-2-configure-system-limits","link":"#step-2-configure-system-limits","children":[]},{"level":3,"title":"Step 3: Database Performance Tuning","slug":"step-3-database-performance-tuning","link":"#step-3-database-performance-tuning","children":[]}]},{"level":2,"title":"\u{1F527} Troubleshooting","slug":"\u{1F527}-troubleshooting","link":"#\u{1F527}-troubleshooting","children":[{"level":3,"title":"Common Issues and Solutions","slug":"common-issues-and-solutions","link":"#common-issues-and-solutions","children":[]},{"level":3,"title":"Performance Monitoring Commands","slug":"performance-monitoring-commands","link":"#performance-monitoring-commands","children":[]}]},{"level":2,"title":"\u{1F504} Maintenance","slug":"\u{1F504}-maintenance","link":"#\u{1F504}-maintenance","children":[{"level":3,"title":"Daily Maintenance Tasks","slug":"daily-maintenance-tasks","link":"#daily-maintenance-tasks","children":[]},{"level":3,"title":"Weekly Maintenance Tasks","slug":"weekly-maintenance-tasks","link":"#weekly-maintenance-tasks","children":[]},{"level":3,"title":"Monthly Maintenance Tasks","slug":"monthly-maintenance-tasks","link":"#monthly-maintenance-tasks","children":[]},{"level":3,"title":"Backup Procedures","slug":"backup-procedures","link":"#backup-procedures","children":[]}]},{"level":2,"title":"\u{1F4C8} Performance Benchmarks","slug":"\u{1F4C8}-performance-benchmarks","link":"#\u{1F4C8}-performance-benchmarks","children":[{"level":3,"title":"Expected Performance Metrics","slug":"expected-performance-metrics","link":"#expected-performance-metrics","children":[]},{"level":3,"title":"Monitoring Commands","slug":"monitoring-commands","link":"#monitoring-commands","children":[]}]},{"level":2,"title":"\u{1F198} Emergency Procedures","slug":"\u{1F198}-emergency-procedures","link":"#\u{1F198}-emergency-procedures","children":[{"level":3,"title":"Application Recovery","slug":"application-recovery","link":"#application-recovery","children":[]},{"level":3,"title":"Database Recovery","slug":"database-recovery","link":"#database-recovery","children":[]},{"level":3,"title":"Complete System Recovery","slug":"complete-system-recovery","link":"#complete-system-recovery","children":[]}]},{"level":2,"title":"\u{1F4DA} Useful Commands Reference","slug":"\u{1F4DA}-useful-commands-reference","link":"#\u{1F4DA}-useful-commands-reference","children":[{"level":3,"title":"Application Management","slug":"application-management","link":"#application-management","children":[]},{"level":3,"title":"Database Management","slug":"database-management","link":"#database-management","children":[]},{"level":3,"title":"Redis Management","slug":"redis-management","link":"#redis-management","children":[]},{"level":3,"title":"System Monitoring","slug":"system-monitoring","link":"#system-monitoring","children":[]}]},{"level":2,"title":"\u{1F4DD} Configuration Files Summary","slug":"\u{1F4DD}-configuration-files-summary","link":"#\u{1F4DD}-configuration-files-summary","children":[]}],"relativePath":"backend/CLEAN_VM_SETUP.md"}'),e={name:"backend/CLEAN_VM_SETUP.md"},p=l(`<h1 id="clean-vm-setup-guide-salesforce-middleware" tabindex="-1">Clean VM Setup Guide - Salesforce Middleware <a class="header-anchor" href="#clean-vm-setup-guide-salesforce-middleware" aria-hidden="true">#</a></h1><p>Complete guide for setting up the Salesforce Middleware application on a fresh virtual machine from scratch.</p><h2 id="\u{1F3AF}-overview" tabindex="-1">\u{1F3AF} Overview <a class="header-anchor" href="#\u{1F3AF}-overview" aria-hidden="true">#</a></h2><p>This guide will help you set up a production-ready Salesforce Middleware server on a clean VM, capable of handling <strong>450,000+ jobs per day</strong> with high availability and performance.</p><h2 id="\u{1F4CB}-table-of-contents" tabindex="-1">\u{1F4CB} Table of Contents <a class="header-anchor" href="#\u{1F4CB}-table-of-contents" aria-hidden="true">#</a></h2><ol><li><a href="#-system-requirements">System Requirements</a></li><li><a href="#-vm-setup--os-installation">VM Setup &amp; OS Installation</a></li><li><a href="#-initial-server-configuration">Initial Server Configuration</a></li><li><a href="#-software-installation">Software Installation</a></li><li><a href="#-database-setup">Database Setup</a></li><li><a href="#-application-deployment">Application Deployment</a></li><li><a href="#-web-server-configuration">Web Server Configuration</a></li><li><a href="#-security-hardening">Security Hardening</a></li><li><a href="#-monitoring--logging">Monitoring &amp; Logging</a></li><li><a href="#-performance-optimization">Performance Optimization</a></li><li><a href="#-troubleshooting">Troubleshooting</a></li><li><a href="#-maintenance">Maintenance</a></li></ol><hr><h2 id="\u{1F5A5}\uFE0F-system-requirements" tabindex="-1">\u{1F5A5}\uFE0F System Requirements <a class="header-anchor" href="#\u{1F5A5}\uFE0F-system-requirements" aria-hidden="true">#</a></h2><h3 id="minimum-requirements" tabindex="-1">Minimum Requirements <a class="header-anchor" href="#minimum-requirements" aria-hidden="true">#</a></h3><ul><li><strong>CPU</strong>: 4 cores (2.0 GHz+)</li><li><strong>RAM</strong>: 8GB</li><li><strong>Storage</strong>: 50GB SSD</li><li><strong>Network</strong>: 1 Gbps</li><li><strong>OS</strong>: Ubuntu 20.04 LTS / CentOS 8 / RHEL 8</li></ul><h3 id="recommended-for-production" tabindex="-1">Recommended for Production <a class="header-anchor" href="#recommended-for-production" aria-hidden="true">#</a></h3><ul><li><strong>CPU</strong>: 8+ cores (3.0 GHz+)</li><li><strong>RAM</strong>: 16GB+</li><li><strong>Storage</strong>: 100GB+ NVMe SSD</li><li><strong>Network</strong>: 10 Gbps</li><li><strong>OS</strong>: Ubuntu 22.04 LTS / CentOS Stream 9</li></ul><h3 id="high-volume-production-450k-jobs-day" tabindex="-1">High-Volume Production (450k+ jobs/day) <a class="header-anchor" href="#high-volume-production-450k-jobs-day" aria-hidden="true">#</a></h3><ul><li><strong>CPU</strong>: 16+ cores (3.5 GHz+)</li><li><strong>RAM</strong>: 32GB+</li><li><strong>Storage</strong>: 200GB+ NVMe SSD</li><li><strong>Network</strong>: 10 Gbps</li><li><strong>OS</strong>: Ubuntu 22.04 LTS</li></ul><hr><h2 id="\u{1F5A5}\uFE0F-vm-setup-os-installation" tabindex="-1">\u{1F5A5}\uFE0F VM Setup &amp; OS Installation <a class="header-anchor" href="#\u{1F5A5}\uFE0F-vm-setup-os-installation" aria-hidden="true">#</a></h2><h3 id="step-1-create-virtual-machine" tabindex="-1">Step 1: Create Virtual Machine <a class="header-anchor" href="#step-1-create-virtual-machine" aria-hidden="true">#</a></h3><h4 id="for-vmware-vsphere" tabindex="-1">For VMware vSphere: <a class="header-anchor" href="#for-vmware-vsphere" aria-hidden="true">#</a></h4><ol><li>Create new VM with recommended specs</li><li>Install Ubuntu 22.04 LTS Server</li><li>Configure network settings</li><li>Allocate storage (100GB+ recommended)</li></ol><h4 id="for-virtualbox" tabindex="-1">For VirtualBox: <a class="header-anchor" href="#for-virtualbox" aria-hidden="true">#</a></h4><ol><li>Create new VM (Type: Linux, Version: Ubuntu 64-bit)</li><li>Allocate 8GB+ RAM, 4+ CPU cores</li><li>Create 100GB+ dynamic VDI</li><li>Enable PAE/NX, VT-x/AMD-V, Nested Paging</li></ol><h4 id="for-cloud-providers" tabindex="-1">For Cloud Providers: <a class="header-anchor" href="#for-cloud-providers" aria-hidden="true">#</a></h4><ul><li><strong>AWS</strong>: t3.large or c5.2xlarge instances</li><li><strong>Google Cloud</strong>: e2-standard-4 or c2-standard-4</li><li><strong>Azure</strong>: Standard_D4s_v3 or Standard_F8s_v2</li><li><strong>DigitalOcean</strong>: 8GB/4 CPU droplet or higher</li></ul><h3 id="step-2-os-installation" tabindex="-1">Step 2: OS Installation <a class="header-anchor" href="#step-2-os-installation" aria-hidden="true">#</a></h3><h4 id="ubuntu-22-04-lts-installation" tabindex="-1">Ubuntu 22.04 LTS Installation: <a class="header-anchor" href="#ubuntu-22-04-lts-installation" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Download Ubuntu 22.04 LTS Server ISO</span></span>
<span class="line"><span style="color:#676E95;"># Boot from ISO and follow installation wizard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># During installation, configure:</span></span>
<span class="line"><span style="color:#676E95;"># - Hostname: sf-middleware-prod</span></span>
<span class="line"><span style="color:#676E95;"># - Username: admin (or your preferred username)</span></span>
<span class="line"><span style="color:#676E95;"># - Enable SSH server</span></span>
<span class="line"><span style="color:#676E95;"># - Install OpenSSH server</span></span>
<span class="line"><span style="color:#676E95;"># - Configure network (static IP recommended)</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-stream-9-installation" tabindex="-1">CentOS Stream 9 Installation: <a class="header-anchor" href="#centos-stream-9-installation" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Download CentOS Stream 9 ISO</span></span>
<span class="line"><span style="color:#676E95;"># Boot from ISO and follow installation wizard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># During installation:</span></span>
<span class="line"><span style="color:#676E95;"># - Select &quot;Server with GUI&quot; or &quot;Minimal Install&quot;</span></span>
<span class="line"><span style="color:#676E95;"># - Configure network</span></span>
<span class="line"><span style="color:#676E95;"># - Set root password</span></span>
<span class="line"><span style="color:#676E95;"># - Create user account</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u2699\uFE0F-initial-server-configuration" tabindex="-1">\u2699\uFE0F Initial Server Configuration <a class="header-anchor" href="#\u2699\uFE0F-initial-server-configuration" aria-hidden="true">#</a></h2><h3 id="step-1-update-system" tabindex="-1">Step 1: Update System <a class="header-anchor" href="#step-1-update-system" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Update package lists</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt update </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> sudo apt upgrade -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install essential packages</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y curl wget git vim htop net-tools unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Update system</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf update -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install essential packages</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y curl wget git vim htop net-tools unzip epel-release</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-configure-firewall" tabindex="-1">Step 2: Configure Firewall <a class="header-anchor" href="#step-2-configure-firewall" aria-hidden="true">#</a></h3><h4 id="ubuntu-ufw" tabindex="-1">Ubuntu (UFW): <a class="header-anchor" href="#ubuntu-ufw" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Enable UFW</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw </span><span style="color:#82AAFF;">enable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Allow SSH</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Allow HTTP/HTTPS (will configure later)</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 80</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 443</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw status</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-firewalld" tabindex="-1">CentOS/RHEL (firewalld): <a class="header-anchor" href="#centos-rhel-firewalld" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Enable firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Allow SSH</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo firewall-cmd --permanent --add-service=ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Allow HTTP/HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo firewall-cmd --permanent --add-service=http</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo firewall-cmd --permanent --add-service=https</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Reload firewall</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo firewall-cmd --reload</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-configure-timezone-and-ntp" tabindex="-1">Step 3: Configure Timezone and NTP <a class="header-anchor" href="#step-3-configure-timezone-and-ntp" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Set timezone</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo timedatectl set-timezone UTC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Enable NTP</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo timedatectl set-ntp </span><span style="color:#82AAFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify</span></span>
<span class="line"><span style="color:#A6ACCD;">timedatectl status</span></span>
<span class="line"></span></code></pre></div><h3 id="step-4-create-application-user" tabindex="-1">Step 4: Create Application User <a class="header-anchor" href="#step-4-create-application-user" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create dedicated user for the application</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo useradd -m -s /bin/bash sfapp</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo usermod -aG sudo sfapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Set password (optional, recommend SSH keys)</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo passwd sfapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create application directory</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo mkdir -p /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo chown sfapp:sfapp /opt/sf-middleware</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4E6}-software-installation" tabindex="-1">\u{1F4E6} Software Installation <a class="header-anchor" href="#\u{1F4E6}-software-installation" aria-hidden="true">#</a></h2><h3 id="step-1-install-node-js-18" tabindex="-1">Step 1: Install Node.js 18+ <a class="header-anchor" href="#step-1-install-node-js-18" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian-1" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian-1" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Add NodeSource repository</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -fsSL https://deb.nodesource.com/setup_18.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo -E bash -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify installation</span></span>
<span class="line"><span style="color:#A6ACCD;">node --version</span></span>
<span class="line"><span style="color:#A6ACCD;">npm --version</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-1" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel-1" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Add NodeSource repository</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -fsSL https://rpm.nodesource.com/setup_18.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo bash -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify installation</span></span>
<span class="line"><span style="color:#A6ACCD;">node --version</span></span>
<span class="line"><span style="color:#A6ACCD;">npm --version</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-install-postgresql-15" tabindex="-1">Step 2: Install PostgreSQL 15+ <a class="header-anchor" href="#step-2-install-postgresql-15" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian-2" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian-2" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Add PostgreSQL repository</span></span>
<span class="line"><span style="color:#A6ACCD;">wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo apt-key add -</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">deb http://apt.postgresql.org/pub/repos/apt/ </span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">lsb_release -cs</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">-pgdg main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo tee /etc/apt/sources.list.d/pgdg.list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Update package lists</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install PostgreSQL</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y postgresql-15 postgresql-client-15 postgresql-contrib-15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start and enable PostgreSQL</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> postgresql</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-2" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel-2" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install PostgreSQL repository</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install PostgreSQL</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y postgresql15-server postgresql15 postgresql15-contrib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Initialize database</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo /usr/pgsql-15/bin/postgresql-15-setup initdb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start and enable PostgreSQL</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start postgresql-15</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> postgresql-15</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-install-redis-7" tabindex="-1">Step 3: Install Redis 7+ <a class="header-anchor" href="#step-3-install-redis-7" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian-3" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian-3" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start and enable Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start redis-server</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify installation</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-3" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel-3" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start and enable Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start redis</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify installation</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span></code></pre></div><h3 id="step-4-install-nginx" tabindex="-1">Step 4: Install Nginx <a class="header-anchor" href="#step-4-install-nginx" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian-4" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian-4" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start and enable Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status nginx</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-4" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel-4" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start and enable Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="step-5-install-pm2-process-manager" tabindex="-1">Step 5: Install PM2 (Process Manager) <a class="header-anchor" href="#step-5-install-pm2-process-manager" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install PM2 globally</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo npm install -g pm2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Setup PM2 startup script</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Follow the output command (example):</span></span>
<span class="line"><span style="color:#676E95;"># sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u sfapp --hp /home/sfapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Save PM2 configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span></code></pre></div><h3 id="step-6-install-additional-tools" tabindex="-1">Step 6: Install Additional Tools <a class="header-anchor" href="#step-6-install-additional-tools" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install build tools (for native modules)</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y build-essential python3-dev  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf groupinstall -y </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Development Tools</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Git (if not already installed)</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y git  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y git  </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Certbot (for SSL certificates)</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y certbot python3-certbot-nginx  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y certbot python3-certbot-nginx  </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F5C4}\uFE0F-database-setup" tabindex="-1">\u{1F5C4}\uFE0F Database Setup <a class="header-anchor" href="#\u{1F5C4}\uFE0F-database-setup" aria-hidden="true">#</a></h2><h3 id="step-1-configure-postgresql" tabindex="-1">Step 1: Configure PostgreSQL <a class="header-anchor" href="#step-1-configure-postgresql" aria-hidden="true">#</a></h3><h4 id="create-database-and-user" tabindex="-1">Create Database and User: <a class="header-anchor" href="#create-database-and-user" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Switch to postgres user</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo -u postgres psql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create database and user</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE DATABASE sfapi</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE USER sfuser WITH PASSWORD </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your_secure_password_here</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON DATABASE sfapi TO sfuser</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER DATABASE sfapi OWNER TO sfuser</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER USER sfuser CREATEDB</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">\\q</span></span>
<span class="line"></span></code></pre></div><h4 id="configure-postgresql-for-high-volume" tabindex="-1">Configure PostgreSQL for High Volume: <a class="header-anchor" href="#configure-postgresql-for-high-volume" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit PostgreSQL configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/postgresql/15/main/postgresql.conf  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /var/lib/pgsql/15/data/postgresql.conf   </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><p><strong>Add/modify these settings:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># High-volume PostgreSQL configuration</span></span>
<span class="line"><span style="color:#F07178;">max_connections</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 200</span></span>
<span class="line"><span style="color:#F07178;">shared_buffers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 256MB</span></span>
<span class="line"><span style="color:#F07178;">effective_cache_size</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 1GB</span></span>
<span class="line"><span style="color:#F07178;">work_mem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 4MB</span></span>
<span class="line"><span style="color:#F07178;">maintenance_work_mem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 64MB</span></span>
<span class="line"><span style="color:#F07178;">checkpoint_completion_target</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 0.9</span></span>
<span class="line"><span style="color:#F07178;">wal_buffers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 16MB</span></span>
<span class="line"><span style="color:#F07178;">max_wal_size</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 1GB</span></span>
<span class="line"><span style="color:#F07178;">min_wal_size</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 80MB</span></span>
<span class="line"><span style="color:#F07178;">effective_io_concurrency</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 200</span></span>
<span class="line"><span style="color:#F07178;">random_page_cost</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Autovacuum for high volume</span></span>
<span class="line"><span style="color:#F07178;">autovacuum_max_workers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3</span></span>
<span class="line"><span style="color:#F07178;">autovacuum_naptime</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 20s</span></span>
<span class="line"><span style="color:#F07178;">autovacuum_vacuum_threshold</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 50</span></span>
<span class="line"><span style="color:#F07178;">autovacuum_analyze_threshold</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Logging</span></span>
<span class="line"><span style="color:#F07178;">log_min_duration_statement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 1000</span></span>
<span class="line"><span style="color:#F07178;">log_checkpoints</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> on</span></span>
<span class="line"><span style="color:#F07178;">log_connections</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> on</span></span>
<span class="line"><span style="color:#F07178;">log_disconnections</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> on</span></span>
<span class="line"><span style="color:#F07178;">log_lock_waits</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> on</span></span>
<span class="line"><span style="color:#F07178;">log_line_prefix</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="configure-postgresql-access" tabindex="-1">Configure PostgreSQL Access: <a class="header-anchor" href="#configure-postgresql-access" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit pg_hba.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/postgresql/15/main/pg_hba.conf  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /var/lib/pgsql/15/data/pg_hba.conf   </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><p><strong>Add this line for local connections:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Local connections</span></span>
<span class="line"><span style="color:#A6ACCD;">local   all             all                                     md5</span></span>
<span class="line"><span style="color:#A6ACCD;">host    all             all             127.0.0.1/32            md5</span></span>
<span class="line"><span style="color:#A6ACCD;">host    all             all             ::1/128                 md5</span></span>
<span class="line"></span></code></pre></div><h4 id="restart-postgresql" tabindex="-1">Restart PostgreSQL: <a class="header-anchor" href="#restart-postgresql" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl restart postgresql</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-configure-redis" tabindex="-1">Step 2: Configure Redis <a class="header-anchor" href="#step-2-configure-redis" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit Redis configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/redis/redis.conf  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/redis.conf        </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><p><strong>Add/modify these settings:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># High-volume Redis configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">maxmemory 1gb</span></span>
<span class="line"><span style="color:#A6ACCD;">maxmemory-policy allkeys-lru</span></span>
<span class="line"><span style="color:#A6ACCD;">tcp-keepalive 60</span></span>
<span class="line"><span style="color:#A6ACCD;">timeout 300</span></span>
<span class="line"><span style="color:#A6ACCD;">appendonly yes</span></span>
<span class="line"><span style="color:#A6ACCD;">save 900 1</span></span>
<span class="line"><span style="color:#A6ACCD;">save 300 10</span></span>
<span class="line"><span style="color:#A6ACCD;">save 60 10000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Security</span></span>
<span class="line"><span style="color:#A6ACCD;">requirepass your_redis_password_here</span></span>
<span class="line"><span style="color:#A6ACCD;">bind 127.0.0.1</span></span>
<span class="line"></span></code></pre></div><p><strong>Restart Redis:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl restart redis-server  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl restart redis         </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F680}-application-deployment" tabindex="-1">\u{1F680} Application Deployment <a class="header-anchor" href="#\u{1F680}-application-deployment" aria-hidden="true">#</a></h2><h3 id="step-1-deploy-application-code" tabindex="-1">Step 1: Deploy Application Code <a class="header-anchor" href="#step-1-deploy-application-code" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Switch to application user</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo su - sfapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Navigate to application directory</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Clone repository (replace with your actual repository URL)</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://github.com/your-username/sf-middleware.git </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Build application</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Generate Prisma client</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma generate</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-create-environment-configuration" tabindex="-1">Step 2: Create Environment Configuration <a class="header-anchor" href="#step-2-create-environment-configuration" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create environment file</span></span>
<span class="line"><span style="color:#A6ACCD;">nano .env</span></span>
<span class="line"></span></code></pre></div><p><strong>Add all required environment variables:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># Application</span></span>
<span class="line"><span style="color:#A6ACCD;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#A6ACCD;">PORT=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Database</span></span>
<span class="line"><span style="color:#A6ACCD;">DATABASE_URL=postgresql://sfuser:your_secure_password_here@localhost:5432/sfapi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">REDIS_URL=redis://:your_redis_password_here@localhost:6379</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># JWT</span></span>
<span class="line"><span style="color:#A6ACCD;">JWT_SECRET=your-super-secret-jwt-key-change-this-in-production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Salesforce API</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_BASE_ENDPOINT=https://your-salesforce-endpoint.com</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_CLIENT_ID=your-client-id</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_CLIENT_SECRET=your-client-secret</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_RESOURCE_API=your-resource-api-endpoint</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_TOKEN_URL=https://your-token-endpoint.com</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_SUBSCRIPTION_KEY=your-subscription-key</span></span>
<span class="line"><span style="color:#A6ACCD;">SF_SUBSCRIPTION_PAYMENT_KEY=your-payment-key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Queue Configuration (High Volume)</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUE_NAME=sf-queue</span></span>
<span class="line"><span style="color:#A6ACCD;">SALESFORCE_CONCURRENCY=20</span></span>
<span class="line"><span style="color:#A6ACCD;">EMAIL_CONCURRENCY=20</span></span>
<span class="line"><span style="color:#A6ACCD;">NOTIFICATION_CONCURRENCY=20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Monitoring</span></span>
<span class="line"><span style="color:#A6ACCD;">ENABLE_TELEMETRY=true</span></span>
<span class="line"><span style="color:#A6ACCD;">LOG_LEVEL=info</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step-3-run-database-migrations" tabindex="-1">Step 3: Run Database Migrations <a class="header-anchor" href="#step-3-run-database-migrations" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Run Prisma migrations</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma migrate deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create high-volume indexes</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -f scripts/create-indexes.sql</span></span>
<span class="line"></span></code></pre></div><h3 id="step-4-create-pm2-configuration" tabindex="-1">Step 4: Create PM2 Configuration <a class="header-anchor" href="#step-4-create-pm2-configuration" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create PM2 ecosystem file</span></span>
<span class="line"><span style="color:#A6ACCD;">nano ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Main Application</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sf-middleware-app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fork</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">error_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/app-error.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">out_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/app-out.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">log_date_format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY-MM-DD HH:mm:ss Z</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">merge_logs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">ignore_watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Background Worker 1 - Salesforce</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sf-worker-salesforce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">worker:start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fork</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">WORKER_TYPE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">salesforce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">error_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/worker-error.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">out_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/worker-out.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Background Worker 2 - Email</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sf-worker-email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">worker:start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fork</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">WORKER_TYPE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">error_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/worker-error.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">out_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/worker-out.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Background Worker 3 - Notifications</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sf-worker-notifications</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">worker:start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fork</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">WORKER_TYPE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">notifications</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">error_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/worker-error.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">out_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/worker-out.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="step-5-create-logs-directory-and-start-application" tabindex="-1">Step 5: Create Logs Directory and Start Application <a class="header-anchor" href="#step-5-create-logs-directory-and-start-application" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create logs directory</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start application with PM2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Save PM2 configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F310}-web-server-configuration" tabindex="-1">\u{1F310} Web Server Configuration <a class="header-anchor" href="#\u{1F310}-web-server-configuration" aria-hidden="true">#</a></h2><h3 id="step-1-configure-nginx" tabindex="-1">Step 1: Configure Nginx <a class="header-anchor" href="#step-1-configure-nginx" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create Nginx configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/nginx/sites-available/sf-middleware  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/nginx/conf.d/sf-middleware.conf     </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sf_middleware </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> 127.0.0.1:3000;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> keepalive </span><span style="color:#A6ACCD;">64</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># HTTP redirect to HTTPS</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">api.yourdomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># HTTPS configuration</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">api.yourdomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># SSL certificates (setup with Let&#39;s Encrypt)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;">/etc/letsencrypt/live/api.yourdomain.com/fullchain.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">/etc/letsencrypt/live/api.yourdomain.com/privkey.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># SSL configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_protocols </span><span style="color:#A6ACCD;">TLSv1.2 TLSv1.3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_ciphers </span><span style="color:#A6ACCD;">HIGH:!aNULL:!MD5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_prefer_server_ciphers </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Security headers</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">X-Frame-Options </span><span style="color:#C3E88D;">&quot;DENY&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">X-Content-Type-Options </span><span style="color:#C3E88D;">&quot;nosniff&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">X-XSS-Protection </span><span style="color:#C3E88D;">&quot;1; mode=block&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">Strict-Transport-Security </span><span style="color:#C3E88D;">&quot;max-age=31536000; includeSubDomains&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Body size limit</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> client_max_body_size </span><span style="color:#A6ACCD;">10M</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://sf_middleware</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Connection </span><span style="color:#C3E88D;">&#39;upgrade&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_cache_bypass $</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># Timeouts for high volume</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_connect_timeout </span><span style="color:#A6ACCD;">60s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_send_timeout </span><span style="color:#A6ACCD;">60s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_read_timeout </span><span style="color:#A6ACCD;">60s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Rate limiting for high volume</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> limit_req_zone $</span><span style="color:#A6ACCD;">binary_remote_addr zone=api_limit:10m rate=1000r/m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> limit_req </span><span style="color:#A6ACCD;">zone=api_limit burst=20 nodelay</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-enable-site-and-test-configuration" tabindex="-1">Step 2: Enable Site and Test Configuration <a class="header-anchor" href="#step-2-enable-site-and-test-configuration" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian-5" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian-5" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Enable site</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ln -s /etc/nginx/sites-available/sf-middleware /etc/nginx/sites-enabled/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nginx -t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Reload Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl reload nginx</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-5" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel-5" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Test configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nginx -t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Reload Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl reload nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-setup-ssl-certificate" tabindex="-1">Step 3: Setup SSL Certificate <a class="header-anchor" href="#step-3-setup-ssl-certificate" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Obtain SSL certificate</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot --nginx -d api.yourdomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test auto-renewal</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot renew --dry-run</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F512}-security-hardening" tabindex="-1">\u{1F512} Security Hardening <a class="header-anchor" href="#\u{1F512}-security-hardening" aria-hidden="true">#</a></h2><h3 id="step-1-configure-ssh-security" tabindex="-1">Step 1: Configure SSH Security <a class="header-anchor" href="#step-1-configure-ssh-security" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit SSH configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/ssh/sshd_config</span></span>
<span class="line"></span></code></pre></div><p><strong>Modify these settings:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Disable root login</span></span>
<span class="line"><span style="color:#A6ACCD;">PermitRootLogin no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Disable password authentication (use SSH keys)</span></span>
<span class="line"><span style="color:#A6ACCD;">PasswordAuthentication no</span></span>
<span class="line"><span style="color:#A6ACCD;">PubkeyAuthentication yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Change default port (optional)</span></span>
<span class="line"><span style="color:#A6ACCD;">Port 2222</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Disable X11 forwarding</span></span>
<span class="line"><span style="color:#A6ACCD;">X11Forwarding no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Limit users</span></span>
<span class="line"><span style="color:#A6ACCD;">AllowUsers sfapp admin</span></span>
<span class="line"></span></code></pre></div><p><strong>Restart SSH:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl restart ssh</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-install-and-configure-fail2ban" tabindex="-1">Step 2: Install and Configure Fail2ban <a class="header-anchor" href="#step-2-install-and-configure-fail2ban" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install Fail2ban</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y fail2ban  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y fail2ban  </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/fail2ban/jail.local</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[DEFAULT]</span></span>
<span class="line"><span style="color:#F07178;">bantime</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3600</span></span>
<span class="line"><span style="color:#F07178;">findtime</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 600</span></span>
<span class="line"><span style="color:#F07178;">maxretry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[sshd]</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> true</span></span>
<span class="line"><span style="color:#F07178;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ssh</span></span>
<span class="line"><span style="color:#F07178;">logpath</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /var/log/auth.log</span></span>
<span class="line"><span style="color:#F07178;">maxretry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[nginx-http-auth]</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> true</span></span>
<span class="line"><span style="color:#F07178;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nginx-http-auth</span></span>
<span class="line"><span style="color:#F07178;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http,https</span></span>
<span class="line"><span style="color:#F07178;">logpath</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /var/log/nginx/error.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[nginx-limit-req]</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> true</span></span>
<span class="line"><span style="color:#F07178;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nginx-limit-req</span></span>
<span class="line"><span style="color:#F07178;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http,https</span></span>
<span class="line"><span style="color:#F07178;">logpath</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /var/log/nginx/error.log</span></span>
<span class="line"><span style="color:#F07178;">maxretry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 10</span></span>
<span class="line"></span></code></pre></div><p><strong>Start Fail2ban:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl start fail2ban</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> fail2ban</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-configure-automatic-security-updates" tabindex="-1">Step 3: Configure Automatic Security Updates <a class="header-anchor" href="#step-3-configure-automatic-security-updates" aria-hidden="true">#</a></h3><h4 id="ubuntu-debian-6" tabindex="-1">Ubuntu/Debian: <a class="header-anchor" href="#ubuntu-debian-6" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install unattended-upgrades</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y unattended-upgrades</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Configure automatic updates</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/apt/apt.conf.d/50unattended-upgrades</span></span>
<span class="line"></span></code></pre></div><p><strong>Enable security updates:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Unattended-Upgrade::Allowed-Origins {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${distro_id}:\${distro_codename}-security</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${distro_id}ESMApps:\${distro_codename}-apps-security</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${distro_id}ESM:\${distro_codename}-infra-security</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span><span style="color:#676E95;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="centos-rhel-6" tabindex="-1">CentOS/RHEL: <a class="header-anchor" href="#centos-rhel-6" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install dnf-automatic</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y dnf-automatic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Enable automatic updates</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> dnf-automatic.timer</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start dnf-automatic.timer</span></span>
<span class="line"></span></code></pre></div><h3 id="step-4-configure-firewall-rules" tabindex="-1">Step 4: Configure Firewall Rules <a class="header-anchor" href="#step-4-configure-firewall-rules" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Allow only necessary ports</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 22/tcp    </span><span style="color:#676E95;"># SSH</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 80/tcp    </span><span style="color:#676E95;"># HTTP</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 443/tcp   </span><span style="color:#676E95;"># HTTPS</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Deny all other traffic</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw default deny incoming</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw default allow outgoing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Enable firewall</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw </span><span style="color:#82AAFF;">enable</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4CA}-monitoring-logging" tabindex="-1">\u{1F4CA} Monitoring &amp; Logging <a class="header-anchor" href="#\u{1F4CA}-monitoring-logging" aria-hidden="true">#</a></h2><h3 id="step-1-setup-log-rotation" tabindex="-1">Step 1: Setup Log Rotation <a class="header-anchor" href="#step-1-setup-log-rotation" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create logrotate configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/logrotate.d/sf-middleware</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/opt/sf-middleware/logs/*.log {</span></span>
<span class="line"><span style="color:#A6ACCD;">    daily</span></span>
<span class="line"><span style="color:#A6ACCD;">    missingok</span></span>
<span class="line"><span style="color:#A6ACCD;">    rotate 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress</span></span>
<span class="line"><span style="color:#A6ACCD;">    delaycompress</span></span>
<span class="line"><span style="color:#A6ACCD;">    notifempty</span></span>
<span class="line"><span style="color:#A6ACCD;">    create 644 sfapp sfapp</span></span>
<span class="line"><span style="color:#A6ACCD;">    postrotate</span></span>
<span class="line"><span style="color:#A6ACCD;">        pm2 reloadLogs</span></span>
<span class="line"><span style="color:#A6ACCD;">    endscript</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-install-and-configure-monitoring-tools" tabindex="-1">Step 2: Install and Configure Monitoring Tools <a class="header-anchor" href="#step-2-install-and-configure-monitoring-tools" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install monitoring tools</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install -y htop iotop nethogs  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf install -y htop iotop nethogs  </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Prometheus Node Exporter (optional)</span></span>
<span class="line"><span style="color:#A6ACCD;">wget https://github.com/prometheus/node_exporter/releases/latest/download/node_exporter-1.6.1.linux-amd64.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">tar xvfz node_exporter-1.6.1.linux-amd64.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo mv node_exporter-1.6.1.linux-amd64/node_exporter /usr/local/bin/</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo useradd --no-create-home --shell /bin/false node_exporter</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create systemd service</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/systemd/system/node_exporter.service</span></span>
<span class="line"></span></code></pre></div><p><strong>Node Exporter service content:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[Unit]</span></span>
<span class="line"><span style="color:#F07178;">Description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Node Exporter</span></span>
<span class="line"><span style="color:#F07178;">Wants</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">network-online.target</span></span>
<span class="line"><span style="color:#F07178;">After</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[Service]</span></span>
<span class="line"><span style="color:#F07178;">User</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">node_exporter</span></span>
<span class="line"><span style="color:#F07178;">Group</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">node_exporter</span></span>
<span class="line"><span style="color:#F07178;">Type</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">simple</span></span>
<span class="line"><span style="color:#F07178;">ExecStart</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/usr/local/bin/node_exporter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[Install]</span></span>
<span class="line"><span style="color:#F07178;">WantedBy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">multi-user.target</span></span>
<span class="line"></span></code></pre></div><p><strong>Start Node Exporter:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start node_exporter</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> node_exporter</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-setup-health-check-scripts" tabindex="-1">Step 3: Setup Health Check Scripts <a class="header-anchor" href="#step-3-setup-health-check-scripts" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create health check script</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /usr/local/bin/sf-health-check.sh</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Health check script for SF Middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">LOG_FILE=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/var/log/sf-health-check.log</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">DATE=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">date </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+%Y-%m-%d %H:%M:%S</span><span style="color:#89DDFF;">&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if application is running</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> pm2 list </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep -q </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sf-middleware-app.*online</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE</span><span style="color:#C3E88D;">] ERROR: Application is not running</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LOG_FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">    pm2 restart sf-middleware-app</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if database is accessible</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT 1;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /dev/null </span><span style="color:#89DDFF;">2&gt;&amp;1;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE</span><span style="color:#C3E88D;">] ERROR: Database is not accessible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LOG_FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if Redis is accessible</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> redis-cli ping </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /dev/null </span><span style="color:#89DDFF;">2&gt;&amp;1;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE</span><span style="color:#C3E88D;">] ERROR: Redis is not accessible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LOG_FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if Nginx is running</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> systemctl is-active --quiet nginx</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE</span><span style="color:#C3E88D;">] ERROR: Nginx is not running</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LOG_FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">    systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE</span><span style="color:#C3E88D;">] INFO: All services are healthy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LOG_FILE</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"></span></code></pre></div><p><strong>Make executable and setup cron:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo chmod +x /usr/local/bin/sf-health-check.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Add to crontab (check every 5 minutes)</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*/5 * * * * /usr/local/bin/sf-health-check.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo crontab -</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u26A1-performance-optimization" tabindex="-1">\u26A1 Performance Optimization <a class="header-anchor" href="#\u26A1-performance-optimization" aria-hidden="true">#</a></h2><h3 id="step-1-kernel-parameters-optimization" tabindex="-1">Step 1: Kernel Parameters Optimization <a class="header-anchor" href="#step-1-kernel-parameters-optimization" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit sysctl configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/sysctl.conf</span></span>
<span class="line"></span></code></pre></div><p><strong>Add these optimizations:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Network optimizations</span></span>
<span class="line"><span style="color:#F07178;">net.core.rmem_max</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 16777216</span></span>
<span class="line"><span style="color:#F07178;">net.core.wmem_max</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 16777216</span></span>
<span class="line"><span style="color:#F07178;">net.ipv4.tcp_rmem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 4096 65536 16777216</span></span>
<span class="line"><span style="color:#F07178;">net.ipv4.tcp_wmem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 4096 65536 16777216</span></span>
<span class="line"><span style="color:#F07178;">net.core.netdev_max_backlog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 5000</span></span>
<span class="line"><span style="color:#F07178;">net.ipv4.tcp_congestion_control</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bbr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># File descriptor limits</span></span>
<span class="line"><span style="color:#F07178;">fs.file-max</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 2097152</span></span>
<span class="line"><span style="color:#F07178;">fs.nr_open</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 2097152</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Memory management</span></span>
<span class="line"><span style="color:#F07178;">vm.swappiness</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 10</span></span>
<span class="line"><span style="color:#F07178;">vm.dirty_ratio</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 15</span></span>
<span class="line"><span style="color:#F07178;">vm.dirty_background_ratio</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 5</span></span>
<span class="line"></span></code></pre></div><p><strong>Apply changes:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo sysctl -p</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-configure-system-limits" tabindex="-1">Step 2: Configure System Limits <a class="header-anchor" href="#step-2-configure-system-limits" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit limits configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/security/limits.conf</span></span>
<span class="line"></span></code></pre></div><p><strong>Add these limits:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Application user limits</span></span>
<span class="line"><span style="color:#A6ACCD;">sfapp soft nofile 65536</span></span>
<span class="line"><span style="color:#A6ACCD;">sfapp hard nofile 65536</span></span>
<span class="line"><span style="color:#A6ACCD;">sfapp soft nproc 32768</span></span>
<span class="line"><span style="color:#A6ACCD;">sfapp hard nproc 32768</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># PostgreSQL limits</span></span>
<span class="line"><span style="color:#A6ACCD;">postgres soft nofile 65536</span></span>
<span class="line"><span style="color:#A6ACCD;">postgres hard nofile 65536</span></span>
<span class="line"><span style="color:#A6ACCD;">postgres soft nproc 32768</span></span>
<span class="line"><span style="color:#A6ACCD;">postgres hard nproc 32768</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-database-performance-tuning" tabindex="-1">Step 3: Database Performance Tuning <a class="header-anchor" href="#step-3-database-performance-tuning" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create database optimization script</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /usr/local/bin/db-optimize.sh</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Database optimization script</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Starting database optimization...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Vacuum and analyze</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">VACUUM ANALYZE;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Update statistics</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ANALYZE;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check for long-running queries</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">SELECT pid, now() - pg_stat_activity.query_start AS duration, query </span></span>
<span class="line"><span style="color:#C3E88D;">FROM pg_stat_activity </span></span>
<span class="line"><span style="color:#C3E88D;">WHERE (now() - pg_stat_activity.query_start) &gt; interval &#39;5 minutes&#39;;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Database optimization completed.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p><strong>Make executable and schedule:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo chmod +x /usr/local/bin/db-optimize.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Schedule to run daily at 2 AM</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 2 * * * /usr/local/bin/db-optimize.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo crontab -</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F527}-troubleshooting" tabindex="-1">\u{1F527} Troubleshooting <a class="header-anchor" href="#\u{1F527}-troubleshooting" aria-hidden="true">#</a></h2><h3 id="common-issues-and-solutions" tabindex="-1">Common Issues and Solutions <a class="header-anchor" href="#common-issues-and-solutions" aria-hidden="true">#</a></h3><h4 id="_1-application-won-t-start" tabindex="-1">1. Application Won&#39;t Start <a class="header-anchor" href="#_1-application-won-t-start" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PM2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-app --lines 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if port is in use</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart PM2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check environment variables</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show sf-middleware-app</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-database-connection-issues" tabindex="-1">2. Database Connection Issues <a class="header-anchor" href="#_2-database-connection-issues" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PostgreSQL status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check PostgreSQL logs</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tail -f /var/log/postgresql/postgresql-15-main.log  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tail -f /var/lib/pgsql/15/data/log/postgresql-</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.log  </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test connection</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT 1;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check database size</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT pg_size_pretty(pg_database_size(&#39;sfapi&#39;));</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h4 id="_3-redis-connection-issues" tabindex="-1">3. Redis Connection Issues <a class="header-anchor" href="#_3-redis-connection-issues" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check Redis status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status redis-server  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status redis         </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Redis logs</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tail -f /var/log/redis/redis-server.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test Redis connection</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Redis memory usage</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli info memory</span></span>
<span class="line"></span></code></pre></div><h4 id="_4-high-memory-usage" tabindex="-1">4. High Memory Usage <a class="header-anchor" href="#_4-high-memory-usage" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check memory usage</span></span>
<span class="line"><span style="color:#A6ACCD;">free -h</span></span>
<span class="line"><span style="color:#A6ACCD;">htop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check PM2 memory usage</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check for memory leaks</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-app </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">memory\\|leak</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h4 id="_5-high-cpu-usage" tabindex="-1">5. High CPU Usage <a class="header-anchor" href="#_5-high-cpu-usage" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check CPU usage</span></span>
<span class="line"><span style="color:#A6ACCD;">top</span></span>
<span class="line"><span style="color:#A6ACCD;">htop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check specific processes</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check system load</span></span>
<span class="line"><span style="color:#A6ACCD;">uptime</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart workers if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-worker-salesforce</span></span>
<span class="line"></span></code></pre></div><h4 id="_6-nginx-issues" tabindex="-1">6. Nginx Issues <a class="header-anchor" href="#_6-nginx-issues" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check Nginx status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Nginx configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nginx -t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Nginx logs</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tail -f /var/log/nginx/error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tail -f /var/log/nginx/access.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Reload Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl reload nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="performance-monitoring-commands" tabindex="-1">Performance Monitoring Commands <a class="header-anchor" href="#performance-monitoring-commands" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># System overview</span></span>
<span class="line"><span style="color:#A6ACCD;">htop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Memory usage</span></span>
<span class="line"><span style="color:#A6ACCD;">free -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Disk usage</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Network connections</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Process tree</span></span>
<span class="line"><span style="color:#A6ACCD;">pstree -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># System load</span></span>
<span class="line"><span style="color:#A6ACCD;">uptime</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check open files</span></span>
<span class="line"><span style="color:#A6ACCD;">lsof </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> wc -l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check system limits</span></span>
<span class="line"><span style="color:#82AAFF;">ulimit</span><span style="color:#A6ACCD;"> -a</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F504}-maintenance" tabindex="-1">\u{1F504} Maintenance <a class="header-anchor" href="#\u{1F504}-maintenance" aria-hidden="true">#</a></h2><h3 id="daily-maintenance-tasks" tabindex="-1">Daily Maintenance Tasks <a class="header-anchor" href="#daily-maintenance-tasks" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check application health</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs --lines 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check system resources</span></span>
<span class="line"><span style="color:#A6ACCD;">htop</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check error logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/app-error.log</span></span>
<span class="line"></span></code></pre></div><h3 id="weekly-maintenance-tasks" tabindex="-1">Weekly Maintenance Tasks <a class="header-anchor" href="#weekly-maintenance-tasks" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Database maintenance</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/bin/db-optimize.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check disk space</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"><span style="color:#A6ACCD;">du -sh /opt/sf-middleware/logs/</span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Review system logs</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo journalctl --since </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1 week ago</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep -i error</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check security updates</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt list --upgradable  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf check-update        </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span></code></pre></div><h3 id="monthly-maintenance-tasks" tabindex="-1">Monthly Maintenance Tasks <a class="header-anchor" href="#monthly-maintenance-tasks" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Full system update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt update </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> sudo apt upgrade -y  </span><span style="color:#676E95;"># Ubuntu/Debian</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dnf update -y                      </span><span style="color:#676E95;"># CentOS/RHEL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Review and clean logs</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo logrotate -f /etc/logrotate.d/sf-middleware</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check SSL certificate expiration</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot certificates</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Review security logs</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo fail2ban-client status</span></span>
<span class="line"></span></code></pre></div><h3 id="backup-procedures" tabindex="-1">Backup Procedures <a class="header-anchor" href="#backup-procedures" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create backup script</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /usr/local/bin/sf-backup.sh</span></span>
<span class="line"></span></code></pre></div><p><strong>Backup script content:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">BACKUP_DIR=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/opt/backups/sf-middleware</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">DATE=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">date +%Y%m%d_%H%M%S</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create backup directory</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BACKUP_DIR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Backup database</span></span>
<span class="line"><span style="color:#A6ACCD;">pg_dump -U sfuser -d sfapi </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BACKUP_DIR/database_</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Backup application code</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -czf </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BACKUP_DIR/application_</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE.tar.gz /opt/sf-middleware --exclude=node_modules --exclude=logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Backup configuration files</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -czf </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BACKUP_DIR/config_</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE.tar.gz /etc/nginx/sites-available/sf-middleware /opt/sf-middleware/.env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Keep only last 7 days of backups</span></span>
<span class="line"><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BACKUP_DIR -name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.sql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -mtime +7 -delete</span></span>
<span class="line"><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BACKUP_DIR -name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.tar.gz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -mtime +7 -delete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Backup completed: </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DATE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p><strong>Schedule backup:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo chmod +x /usr/local/bin/sf-backup.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Schedule daily backup at 3 AM</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 3 * * * /usr/local/bin/sf-backup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo crontab -</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4C8}-performance-benchmarks" tabindex="-1">\u{1F4C8} Performance Benchmarks <a class="header-anchor" href="#\u{1F4C8}-performance-benchmarks" aria-hidden="true">#</a></h2><h3 id="expected-performance-metrics" tabindex="-1">Expected Performance Metrics <a class="header-anchor" href="#expected-performance-metrics" aria-hidden="true">#</a></h3><p>With this setup, you should achieve:</p><ul><li>\u2705 <strong>450,000+ jobs/day</strong> sustained capacity</li><li>\u2705 <strong>&lt;2 second</strong> average processing time</li><li>\u2705 <strong>&lt;1%</strong> error rate</li><li>\u2705 <strong>&lt;100 jobs</strong> queue depth under normal load</li><li>\u2705 <strong>99.9%</strong> uptime</li><li>\u2705 <strong>&lt;500ms</strong> API response time</li><li>\u2705 <strong>&lt;50ms</strong> database query time</li></ul><h3 id="monitoring-commands" tabindex="-1">Monitoring Commands <a class="header-anchor" href="#monitoring-commands" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check queue status</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/queue/monitor/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check detailed metrics</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/queue/monitor/detailed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check application health</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Monitor system resources</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F198}-emergency-procedures" tabindex="-1">\u{1F198} Emergency Procedures <a class="header-anchor" href="#\u{1F198}-emergency-procedures" aria-hidden="true">#</a></h2><h3 id="application-recovery" tabindex="-1">Application Recovery <a class="header-anchor" href="#application-recovery" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Stop all processes</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Clear Redis queues (if needed)</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli FLUSHALL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart application</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span></code></pre></div><h3 id="database-recovery" tabindex="-1">Database Recovery <a class="header-anchor" href="#database-recovery" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Stop application</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restore from backup</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> /opt/backups/sf-middleware/database_YYYYMMDD_HHMMSS.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start application</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><h3 id="complete-system-recovery" tabindex="-1">Complete System Recovery <a class="header-anchor" href="#complete-system-recovery" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Stop all services</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl stop postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl stop redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restore from backup</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> /opt/backups/sf-middleware/database_YYYYMMDD_HHMMSS.sql</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start redis-server</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4DA}-useful-commands-reference" tabindex="-1">\u{1F4DA} Useful Commands Reference <a class="header-anchor" href="#\u{1F4DA}-useful-commands-reference" aria-hidden="true">#</a></h2><h3 id="application-management" tabindex="-1">Application Management <a class="header-anchor" href="#application-management" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># PM2 commands</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete all</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Application logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/app-error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/app-out.log</span></span>
<span class="line"></span></code></pre></div><h3 id="database-management" tabindex="-1">Database Management <a class="header-anchor" href="#database-management" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># PostgreSQL commands</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl restart postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi</span></span>
<span class="line"><span style="color:#A6ACCD;">\\dt  </span><span style="color:#676E95;"># List tables</span></span>
<span class="line"><span style="color:#A6ACCD;">\\q   </span><span style="color:#676E95;"># Quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Database maintenance</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">VACUUM ANALYZE;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT pg_size_pretty(pg_database_size(&#39;sfapi&#39;));</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="redis-management" tabindex="-1">Redis Management <a class="header-anchor" href="#redis-management" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Redis commands</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl status redis-server</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl restart redis-server</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">ping</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO</span></span>
<span class="line"><span style="color:#A6ACCD;">MONITOR</span></span>
<span class="line"></span></code></pre></div><h3 id="system-monitoring" tabindex="-1">System Monitoring <a class="header-anchor" href="#system-monitoring" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># System commands</span></span>
<span class="line"><span style="color:#A6ACCD;">htop</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"><span style="color:#A6ACCD;">free -h</span></span>
<span class="line"><span style="color:#A6ACCD;">uptime</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4DD}-configuration-files-summary" tabindex="-1">\u{1F4DD} Configuration Files Summary <a class="header-anchor" href="#\u{1F4DD}-configuration-files-summary" aria-hidden="true">#</a></h2><table><thead><tr><th>File</th><th>Location</th><th>Purpose</th></tr></thead><tbody><tr><td>Application</td><td><code>/opt/sf-middleware/</code></td><td>Main application directory</td></tr><tr><td>Environment</td><td><code>/opt/sf-middleware/.env</code></td><td>Environment variables</td></tr><tr><td>PM2 Config</td><td><code>/opt/sf-middleware/ecosystem.config.js</code></td><td>Process manager configuration</td></tr><tr><td>Nginx Config</td><td><code>/etc/nginx/sites-available/sf-middleware</code></td><td>Web server configuration</td></tr><tr><td>PostgreSQL Config</td><td><code>/etc/postgresql/15/main/postgresql.conf</code></td><td>Database configuration</td></tr><tr><td>Redis Config</td><td><code>/etc/redis/redis.conf</code></td><td>Cache configuration</td></tr><tr><td>Logs</td><td><code>/opt/sf-middleware/logs/</code></td><td>Application logs</td></tr><tr><td>Backups</td><td><code>/opt/backups/sf-middleware/</code></td><td>Backup storage</td></tr></tbody></table><hr><p><strong>Last Updated:</strong> November 8, 2025</p><p><strong>Next Steps:</strong> After completing this setup, refer to the <a href="./API_DOCUMENTATION.html">API Documentation</a> for endpoint usage and the <a href="./HIGH_VOLUME_SETUP.html">High Volume Setup Guide</a> for scaling beyond 450k jobs/day.</p>`,241),o=[p];function t(c,r,i,y,d,C){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{A as __pageData,u as default};

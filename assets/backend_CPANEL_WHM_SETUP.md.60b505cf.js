import{_ as s,c as n,o as a,a as l}from"./app.980fc3ea.js";const d=JSON.parse(`{"title":"cPanel/WHM Setup Guide - High Volume Application (450k jobs/day)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3AF} What This Replicates","slug":"\u{1F3AF}-what-this-replicates","link":"#\u{1F3AF}-what-this-replicates","children":[]},{"level":2,"title":"\u2705 Prerequisites","slug":"\u2705-prerequisites","link":"#\u2705-prerequisites","children":[{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]}]},{"level":2,"title":"\u{1F4E6} Step 1: Install Required Software","slug":"\u{1F4E6}-step-1-install-required-software","link":"#\u{1F4E6}-step-1-install-required-software","children":[]},{"level":2,"title":"\u{1F4C2} Step 2: Setup Application Directory","slug":"\u{1F4C2}-step-2-setup-application-directory","link":"#\u{1F4C2}-step-2-setup-application-directory","children":[]},{"level":2,"title":"\u{1F5C4}\uFE0F Step 3: Setup PostgreSQL Database","slug":"\u{1F5C4}\uFE0F-step-3-setup-postgresql-database","link":"#\u{1F5C4}\uFE0F-step-3-setup-postgresql-database","children":[]},{"level":2,"title":"\u2699\uFE0F Step 4: Configure PostgreSQL (High Volume)","slug":"\u2699\uFE0F-step-4-configure-postgresql-high-volume","link":"#\u2699\uFE0F-step-4-configure-postgresql-high-volume","children":[]},{"level":2,"title":"\u{1F534} Step 5: Configure Redis","slug":"\u{1F534}-step-5-configure-redis","link":"#\u{1F534}-step-5-configure-redis","children":[]},{"level":2,"title":"\u{1F510} Step 6: Create Environment File","slug":"\u{1F510}-step-6-create-environment-file","link":"#\u{1F510}-step-6-create-environment-file","children":[]},{"level":2,"title":"\u{1F680} Step 7: Setup PM2 (Process Manager)","slug":"\u{1F680}-step-7-setup-pm2-process-manager","link":"#\u{1F680}-step-7-setup-pm2-process-manager","children":[]},{"level":2,"title":"\u{1F310} Step 8: Setup Nginx Reverse Proxy","slug":"\u{1F310}-step-8-setup-nginx-reverse-proxy","link":"#\u{1F310}-step-8-setup-nginx-reverse-proxy","children":[]},{"level":2,"title":"\u{1F512} Step 9: Setup SSL Certificate (Let's Encrypt)","slug":"\u{1F512}-step-9-setup-ssl-certificate-let-s-encrypt","link":"#\u{1F512}-step-9-setup-ssl-certificate-let-s-encrypt","children":[]},{"level":2,"title":"\u{1F525} Step 10: Configure Firewall","slug":"\u{1F525}-step-10-configure-firewall","link":"#\u{1F525}-step-10-configure-firewall","children":[]},{"level":2,"title":"\u{1F4CA} Step 11: Monitoring & Health Checks","slug":"\u{1F4CA}-step-11-monitoring-health-checks","link":"#\u{1F4CA}-step-11-monitoring-health-checks","children":[{"level":3,"title":"Check Application Status","slug":"check-application-status","link":"#check-application-status","children":[]},{"level":3,"title":"Health Check Endpoints","slug":"health-check-endpoints","link":"#health-check-endpoints","children":[]},{"level":3,"title":"Database Monitoring","slug":"database-monitoring","link":"#database-monitoring","children":[]},{"level":3,"title":"Redis Monitoring","slug":"redis-monitoring","link":"#redis-monitoring","children":[]},{"level":3,"title":"System Monitoring","slug":"system-monitoring","link":"#system-monitoring","children":[]}]},{"level":2,"title":"\u{1F504} Step 12: Setup Auto-Start (Optional)","slug":"\u{1F504}-step-12-setup-auto-start-optional","link":"#\u{1F504}-step-12-setup-auto-start-optional","children":[]},{"level":2,"title":"\u{1F6E0}\uFE0F Troubleshooting","slug":"\u{1F6E0}\uFE0F-troubleshooting","link":"#\u{1F6E0}\uFE0F-troubleshooting","children":[{"level":3,"title":"Application Won't Start","slug":"application-won-t-start","link":"#application-won-t-start","children":[]},{"level":3,"title":"High Memory Usage","slug":"high-memory-usage","link":"#high-memory-usage","children":[]},{"level":3,"title":"Database Connection Issues","slug":"database-connection-issues","link":"#database-connection-issues","children":[]},{"level":3,"title":"Redis Connection Issues","slug":"redis-connection-issues","link":"#redis-connection-issues","children":[]},{"level":3,"title":"High CPU Usage","slug":"high-cpu-usage","link":"#high-cpu-usage","children":[]}]},{"level":2,"title":"\u{1F4C8} Performance Optimization","slug":"\u{1F4C8}-performance-optimization","link":"#\u{1F4C8}-performance-optimization","children":[{"level":3,"title":"Expected Performance","slug":"expected-performance","link":"#expected-performance","children":[]},{"level":3,"title":"Optimization Tips","slug":"optimization-tips","link":"#optimization-tips","children":[]}]},{"level":2,"title":"\u{1F510} Security Checklist","slug":"\u{1F510}-security-checklist","link":"#\u{1F510}-security-checklist","children":[]},{"level":2,"title":"\u{1F4DD} Maintenance Schedule","slug":"\u{1F4DD}-maintenance-schedule","link":"#\u{1F4DD}-maintenance-schedule","children":[{"level":3,"title":"Daily","slug":"daily","link":"#daily","children":[]},{"level":3,"title":"Weekly","slug":"weekly","link":"#weekly","children":[]},{"level":3,"title":"Monthly","slug":"monthly","link":"#monthly","children":[]}]},{"level":2,"title":"\u{1F198} Useful Commands","slug":"\u{1F198}-useful-commands","link":"#\u{1F198}-useful-commands","children":[]},{"level":2,"title":"\u{1F4DA} Useful Files","slug":"\u{1F4DA}-useful-files","link":"#\u{1F4DA}-useful-files","children":[]}],"relativePath":"backend/CPANEL_WHM_SETUP.md"}`),p={name:"backend/CPANEL_WHM_SETUP.md"},e=l(`<h1 id="cpanel-whm-setup-guide-high-volume-application-450k-jobs-day" tabindex="-1">cPanel/WHM Setup Guide - High Volume Application (450k jobs/day) <a class="header-anchor" href="#cpanel-whm-setup-guide-high-volume-application-450k-jobs-day" aria-hidden="true">#</a></h1><p>This guide shows how to replicate the <code>docker-compose.high-volume.yml</code> setup on cPanel/WHM without Docker.</p><h2 id="\u{1F3AF}-what-this-replicates" tabindex="-1">\u{1F3AF} What This Replicates <a class="header-anchor" href="#\u{1F3AF}-what-this-replicates" aria-hidden="true">#</a></h2><p>From <code>docker-compose.high-volume.yml</code>:</p><table><thead><tr><th>Docker Service</th><th>cPanel Equivalent</th><th>Purpose</th></tr></thead><tbody><tr><td><code>app</code> (2 replicas)</td><td>Main Node.js app (PM2)</td><td>API server on port 3000</td></tr><tr><td><code>workers</code> (3 replicas)</td><td>3 Worker processes (PM2)</td><td>Background job processing</td></tr><tr><td><code>redis-cluster</code></td><td>Redis Server</td><td>Queue management (BullMQ)</td></tr><tr><td><code>postgres</code></td><td>PostgreSQL 15</td><td>Database with optimizations</td></tr><tr><td><code>monitoring</code></td><td>Optional: Prometheus</td><td>Monitoring dashboard</td></tr></tbody></table><hr><h2 id="\u2705-prerequisites" tabindex="-1">\u2705 Prerequisites <a class="header-anchor" href="#\u2705-prerequisites" aria-hidden="true">#</a></h2><ul><li><strong>cPanel/WHM</strong> with root or reseller access</li><li><strong>Node.js 18+</strong></li><li><strong>PostgreSQL 15+</strong></li><li><strong>Redis 7+</strong></li><li><strong>PM2</strong> (process manager)</li><li><strong>Nginx/Apache</strong> (web server)</li></ul><h3 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a></h3><ul><li><strong>RAM</strong>: 16GB (8GB minimum)</li><li><strong>CPU</strong>: 8 cores (4 minimum)</li><li><strong>Storage</strong>: 100GB+ SSD</li><li><strong>OS</strong>: CentOS 7/8, CloudLinux, or similar</li></ul><hr><h2 id="\u{1F4E6}-step-1-install-required-software" tabindex="-1">\u{1F4E6} Step 1: Install Required Software <a class="header-anchor" href="#\u{1F4E6}-step-1-install-required-software" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># SSH into your server</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh root@your-server.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Node.js 18</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -fsSL https://rpm.nodesource.com/setup_18.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bash -</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y nodejs</span></span>
<span class="line"><span style="color:#A6ACCD;">node --version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install PostgreSQL 15</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y postgresql15-server postgresql15</span></span>
<span class="line"><span style="color:#A6ACCD;">postgresql-setup --initdb</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Redis 7</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y redis7</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> redis</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install PM2</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g pm2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup systemd</span></span>
<span class="line"><span style="color:#676E95;"># Follow the output command, then:</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4C2}-step-2-setup-application-directory" tabindex="-1">\u{1F4C2} Step 2: Setup Application Directory <a class="header-anchor" href="#\u{1F4C2}-step-2-setup-application-directory" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create application directory</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/sf-middleware</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Upload your code (via Git, SCP, or FTP)</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://your-repo/sf-middleware.git </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#676E95;"># OR use SCP: scp -r . root@server:/opt/sf-middleware/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Generate Prisma client</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma generate</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F5C4}\uFE0F-step-3-setup-postgresql-database" tabindex="-1">\u{1F5C4}\uFE0F Step 3: Setup PostgreSQL Database <a class="header-anchor" href="#\u{1F5C4}\uFE0F-step-3-setup-postgresql-database" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Switch to postgres user</span></span>
<span class="line"><span style="color:#A6ACCD;">su - postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create database and user</span></span>
<span class="line"><span style="color:#A6ACCD;">psql </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">EOF</span></span>
<span class="line"><span style="color:#C3E88D;">CREATE DATABASE sfapi;</span></span>
<span class="line"><span style="color:#C3E88D;">CREATE USER sfuser WITH PASSWORD &#39;your_secure_password_here&#39;;</span></span>
<span class="line"><span style="color:#C3E88D;">GRANT ALL PRIVILEGES ON DATABASE sfapi TO sfuser;</span></span>
<span class="line"><span style="color:#C3E88D;">ALTER DATABASE sfapi OWNER TO sfuser;</span></span>
<span class="line"><span style="color:#C3E88D;">\\q</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Exit postgres user</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Run migrations</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma migrate deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create high-volume indexes</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -f scripts/create-indexes.sql</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u2699\uFE0F-step-4-configure-postgresql-high-volume" tabindex="-1">\u2699\uFE0F Step 4: Configure PostgreSQL (High Volume) <a class="header-anchor" href="#\u2699\uFE0F-step-4-configure-postgresql-high-volume" aria-hidden="true">#</a></h2><p>Edit <code>/var/lib/pgsql/15/data/postgresql.conf</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nano /var/lib/pgsql/15/data/postgresql.conf</span></span>
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
<span class="line"></span></code></pre></div><p><strong>Restart PostgreSQL:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl restart postgresql</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F534}-step-5-configure-redis" tabindex="-1">\u{1F534} Step 5: Configure Redis <a class="header-anchor" href="#\u{1F534}-step-5-configure-redis" aria-hidden="true">#</a></h2><p>Edit <code>/etc/redis/redis.conf</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nano /etc/redis/redis.conf</span></span>
<span class="line"></span></code></pre></div><p><strong>Add/modify these settings:</strong></p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># High-volume Redis configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">maxmemory 1gb</span></span>
<span class="line"><span style="color:#A6ACCD;">maxmemory-policy allkeys-lru</span></span>
<span class="line"><span style="color:#A6ACCD;">tcp-keepalive 60</span></span>
<span class="line"><span style="color:#A6ACCD;">timeout 300</span></span>
<span class="line"><span style="color:#A6ACCD;">appendonly yes</span></span>
<span class="line"><span style="color:#A6ACCD;">save 900 1</span></span>
<span class="line"><span style="color:#A6ACCD;">save 300 10</span></span>
<span class="line"><span style="color:#A6ACCD;">save 60 10000</span></span>
<span class="line"></span></code></pre></div><p><strong>Restart Redis:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl restart redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F510}-step-6-create-environment-file" tabindex="-1">\u{1F510} Step 6: Create Environment File <a class="header-anchor" href="#\u{1F510}-step-6-create-environment-file" aria-hidden="true">#</a></h2><p>Create <code>/opt/sf-middleware/.env</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">nano .env</span></span>
<span class="line"></span></code></pre></div><p><strong>Add all environment variables:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># Application</span></span>
<span class="line"><span style="color:#A6ACCD;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#A6ACCD;">PORT=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Database</span></span>
<span class="line"><span style="color:#A6ACCD;">DATABASE_URL=postgresql://sfuser:your_secure_password_here@localhost:5432/sfapi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Redis (from docker: redis://redis-cluster:6379)</span></span>
<span class="line"><span style="color:#A6ACCD;">REDIS_URL=redis://localhost:6379</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h2 id="\u{1F680}-step-7-setup-pm2-process-manager" tabindex="-1">\u{1F680} Step 7: Setup PM2 (Process Manager) <a class="header-anchor" href="#\u{1F680}-step-7-setup-pm2-process-manager" aria-hidden="true">#</a></h2><p>Create <code>/opt/sf-middleware/ecosystem.config.js</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">nano ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Main Application (replaces docker app service with 2 replicas)</span></span>
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
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// Monitor mode</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">ignore_watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Background Worker 1 - Salesforce (replaces docker workers service with 3 replicas)</span></span>
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
<span class="line"></span></code></pre></div><p><strong>Create logs directory:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/sf-middleware/logs</span></span>
<span class="line"></span></code></pre></div><p><strong>Start the application:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F310}-step-8-setup-nginx-reverse-proxy" tabindex="-1">\u{1F310} Step 8: Setup Nginx Reverse Proxy <a class="header-anchor" href="#\u{1F310}-step-8-setup-nginx-reverse-proxy" aria-hidden="true">#</a></h2><p>Create <code>/etc/nginx/conf.d/sf-middleware.conf</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nano /etc/nginx/conf.d/sf-middleware.conf</span></span>
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
<span class="line"></span></code></pre></div><p><strong>Test and reload Nginx:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload nginx</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F512}-step-9-setup-ssl-certificate-let-s-encrypt" tabindex="-1">\u{1F512} Step 9: Setup SSL Certificate (Let&#39;s Encrypt) <a class="header-anchor" href="#\u{1F512}-step-9-setup-ssl-certificate-let-s-encrypt" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install certbot</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y certbot python3-certbot-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Obtain certificate</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot --nginx -d api.yourdomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Auto-renewal is set up automatically</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot renew --dry-run</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F525}-step-10-configure-firewall" tabindex="-1">\u{1F525} Step 10: Configure Firewall <a class="header-anchor" href="#\u{1F525}-step-10-configure-firewall" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Allow HTTP/HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --add-service=http</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --add-service=https</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Allow PostgreSQL (if remote access needed)</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --add-service=postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Allow Redis (if remote access needed)</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --add-port=6379/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Reload firewall</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4CA}-step-11-monitoring-health-checks" tabindex="-1">\u{1F4CA} Step 11: Monitoring &amp; Health Checks <a class="header-anchor" href="#\u{1F4CA}-step-11-monitoring-health-checks" aria-hidden="true">#</a></h2><h3 id="check-application-status" tabindex="-1">Check Application Status <a class="header-anchor" href="#check-application-status" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># PM2 status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Monitor resources</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart application</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-app</span></span>
<span class="line"></span></code></pre></div><h3 id="health-check-endpoints" tabindex="-1">Health Check Endpoints <a class="header-anchor" href="#health-check-endpoints" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Application health</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Queue monitor</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/queue/monitor/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Detailed metrics</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/queue/monitor/detailed</span></span>
<span class="line"></span></code></pre></div><h3 id="database-monitoring" tabindex="-1">Database Monitoring <a class="header-anchor" href="#database-monitoring" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Connect to database</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check database size</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT pg_size_pretty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pg_database_size</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sfapi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check active connections</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT count</span><span style="color:#89DDFF;">(*)</span><span style="color:#A6ACCD;"> FROM pg_stat_activity</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check table sizes</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT </span></span>
<span class="line"><span style="color:#A6ACCD;">    schemaname,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tablename,</span></span>
<span class="line"><span style="color:#A6ACCD;">    pg_size_pretty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pg_total_relation_size</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">schemaname</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">tablename</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> AS size</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM pg_tables</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE schemaname = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">ORDER BY pg_total_relation_size</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">schemaname</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">tablename</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> DESC</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="redis-monitoring" tabindex="-1">Redis Monitoring <a class="header-anchor" href="#redis-monitoring" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Connect to Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Redis info</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check memory</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO memory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Monitor commands (real-time)</span></span>
<span class="line"><span style="color:#A6ACCD;">MONITOR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check queue length</span></span>
<span class="line"><span style="color:#A6ACCD;">LLEN bull:salesforce:wait</span></span>
<span class="line"><span style="color:#A6ACCD;">LLEN bull:email:wait</span></span>
<span class="line"><span style="color:#A6ACCD;">LLEN bull:notifications:wait</span></span>
<span class="line"></span></code></pre></div><h3 id="system-monitoring" tabindex="-1">System Monitoring <a class="header-anchor" href="#system-monitoring" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check system resources</span></span>
<span class="line"><span style="color:#A6ACCD;">htop</span></span>
<span class="line"><span style="color:#676E95;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">top</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check disk usage</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check memory</span></span>
<span class="line"><span style="color:#A6ACCD;">free -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check network connections</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F504}-step-12-setup-auto-start-optional" tabindex="-1">\u{1F504} Step 12: Setup Auto-Start (Optional) <a class="header-anchor" href="#\u{1F504}-step-12-setup-auto-start-optional" aria-hidden="true">#</a></h2><p>Create systemd service for PM2:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># PM2 startup was already configured, but if not:</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup systemd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Follow the output command, example:</span></span>
<span class="line"><span style="color:#676E95;"># sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u root --hp /root</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F6E0}\uFE0F-troubleshooting" tabindex="-1">\u{1F6E0}\uFE0F Troubleshooting <a class="header-anchor" href="#\u{1F6E0}\uFE0F-troubleshooting" aria-hidden="true">#</a></h2><h3 id="application-won-t-start" tabindex="-1">Application Won&#39;t Start <a class="header-anchor" href="#application-won-t-start" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PM2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-app --lines 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if port is in use</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart PM2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all</span></span>
<span class="line"></span></code></pre></div><h3 id="high-memory-usage" tabindex="-1">High Memory Usage <a class="header-anchor" href="#high-memory-usage" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check memory</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Adjust max_memory_restart in ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><h3 id="database-connection-issues" tabindex="-1">Database Connection Issues <a class="header-anchor" href="#database-connection-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PostgreSQL status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check PostgreSQL logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/lib/pgsql/15/data/log/postgresql-</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test connection</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT 1;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="redis-connection-issues" tabindex="-1">Redis Connection Issues <a class="header-anchor" href="#redis-connection-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check Redis status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Redis logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/redis/redis-server.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test Redis connection</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span></code></pre></div><h3 id="high-cpu-usage" tabindex="-1">High CPU Usage <a class="header-anchor" href="#high-cpu-usage" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check CPU usage</span></span>
<span class="line"><span style="color:#A6ACCD;">top</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check specific process</span></span>
<span class="line"><span style="color:#A6ACCD;">ps aux </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart workers if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-worker-salesforce</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4C8}-performance-optimization" tabindex="-1">\u{1F4C8} Performance Optimization <a class="header-anchor" href="#\u{1F4C8}-performance-optimization" aria-hidden="true">#</a></h2><h3 id="expected-performance" tabindex="-1">Expected Performance <a class="header-anchor" href="#expected-performance" aria-hidden="true">#</a></h3><p>With this setup, you should achieve:</p><ul><li>\u2705 <strong>450,000+ jobs/day</strong> sustained capacity</li><li>\u2705 <strong>&lt;2 second</strong> average processing time</li><li>\u2705 <strong>&lt;1%</strong> error rate</li><li>\u2705 <strong>&lt;100 jobs</strong> queue depth under normal load</li><li>\u2705 <strong>99.9%</strong> uptime</li></ul><h3 id="optimization-tips" tabindex="-1">Optimization Tips <a class="header-anchor" href="#optimization-tips" aria-hidden="true">#</a></h3><ol><li><strong>Database</strong>: Regularly run <code>VACUUM ANALYZE</code>, monitor slow queries</li><li><strong>Redis</strong>: Monitor memory, set TTL for keys</li><li><strong>Node.js</strong>: Enable production mode, monitor memory leaks</li><li><strong>Network</strong>: Use HTTP/2, enable compression</li></ol><hr><h2 id="\u{1F510}-security-checklist" tabindex="-1">\u{1F510} Security Checklist <a class="header-anchor" href="#\u{1F510}-security-checklist" aria-hidden="true">#</a></h2><ul><li>[ ] Change default PostgreSQL password</li><li>[ ] Setup SSL certificates (HTTPS)</li><li>[ ] Configure firewall rules</li><li>[ ] Enable fail2ban for SSH</li><li>[ ] Regular security updates</li><li>[ ] Daily database backups</li><li>[ ] Monitor logs for suspicious activity</li><li>[ ] Use strong JWT secrets</li><li>[ ] Implement rate limiting</li><li>[ ] Restrict database access (localhost only)</li></ul><hr><h2 id="\u{1F4DD}-maintenance-schedule" tabindex="-1">\u{1F4DD} Maintenance Schedule <a class="header-anchor" href="#\u{1F4DD}-maintenance-schedule" aria-hidden="true">#</a></h2><h3 id="daily" tabindex="-1">Daily <a class="header-anchor" href="#daily" aria-hidden="true">#</a></h3><ul><li>Check application health</li><li>Monitor queue depth</li><li>Review error logs</li></ul><h3 id="weekly" tabindex="-1">Weekly <a class="header-anchor" href="#weekly" aria-hidden="true">#</a></h3><ul><li>Database vacuum and analyze</li><li>Review slow queries</li><li>Check disk space</li></ul><h3 id="monthly" tabindex="-1">Monthly <a class="header-anchor" href="#monthly" aria-hidden="true">#</a></h3><ul><li>Security updates</li><li>Performance review</li><li>Backup verification</li><li>Review system logs</li></ul><hr><h2 id="\u{1F198}-useful-commands" tabindex="-1">\u{1F198} Useful Commands <a class="header-anchor" href="#\u{1F198}-useful-commands" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># View all logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart all services</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check service status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status redis</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/app-error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/lib/pgsql/15/data/log/postgresql-</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/redis/redis-server.log</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4DA}-useful-files" tabindex="-1">\u{1F4DA} Useful Files <a class="header-anchor" href="#\u{1F4DA}-useful-files" aria-hidden="true">#</a></h2><ul><li>Application logs: <code>/opt/sf-middleware/logs/</code></li><li>PostgreSQL logs: <code>/var/lib/pgsql/15/data/log/</code></li><li>Redis logs: <code>/var/log/redis/</code></li><li>Nginx logs: <code>/var/log/nginx/</code></li><li>PM2 logs: <code>~/.pm2/logs/</code></li></ul><hr><p><strong>Last Updated:</strong> November 8, 2025</p><p>For Docker-specific setup, refer to <code>docker-compose.high-volume.yml</code></p>`,120),o=[e];function t(c,r,i,y,D,C){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};

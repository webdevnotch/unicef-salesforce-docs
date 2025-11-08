import{_ as s,c as n,o as a,a as e}from"./app.980fc3ea.js";const g=JSON.parse('{"title":"Multi-Environment Setup Guide","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3D7}\uFE0F Architecture Overview","slug":"\u{1F3D7}\uFE0F-architecture-overview","link":"#\u{1F3D7}\uFE0F-architecture-overview","children":[]},{"level":2,"title":"\u{1F680} Quick Start","slug":"\u{1F680}-quick-start","link":"#\u{1F680}-quick-start","children":[{"level":3,"title":"Development Environment","slug":"development-environment","link":"#development-environment","children":[]},{"level":3,"title":"Staging Environment","slug":"staging-environment","link":"#staging-environment","children":[]},{"level":3,"title":"Production Environment","slug":"production-environment","link":"#production-environment","children":[]},{"level":3,"title":"Production2 Environment","slug":"production2-environment","link":"#production2-environment","children":[]}]},{"level":2,"title":"\u{1F527} Environment Configuration","slug":"\u{1F527}-environment-configuration","link":"#\u{1F527}-environment-configuration","children":[{"level":3,"title":"Development","slug":"development","link":"#development","children":[]},{"level":3,"title":"Staging","slug":"staging","link":"#staging","children":[]},{"level":3,"title":"Production","slug":"production","link":"#production","children":[]},{"level":3,"title":"Production2","slug":"production2","link":"#production2","children":[]}]},{"level":2,"title":"\u{1F433} Docker Deployment","slug":"\u{1F433}-docker-deployment","link":"#\u{1F433}-docker-deployment","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]}]},{"level":2,"title":"\u26A1 PM2 Deployment (cPanel/WHM)","slug":"\u26A1-pm2-deployment-cpanel-whm","link":"#\u26A1-pm2-deployment-cpanel-whm","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites-1","link":"#prerequisites-1","children":[]},{"level":3,"title":"Commands","slug":"commands-1","link":"#commands-1","children":[]}]},{"level":2,"title":"\u{1F310} Nginx Configuration","slug":"\u{1F310}-nginx-configuration","link":"#\u{1F310}-nginx-configuration","children":[{"level":3,"title":"SSL Setup","slug":"ssl-setup","link":"#ssl-setup","children":[]},{"level":3,"title":"Configuration Files","slug":"configuration-files","link":"#configuration-files","children":[]}]},{"level":2,"title":"\u{1F4CA} Monitoring","slug":"\u{1F4CA}-monitoring","link":"#\u{1F4CA}-monitoring","children":[{"level":3,"title":"Health Checks","slug":"health-checks","link":"#health-checks","children":[]},{"level":3,"title":"Prometheus (Production)","slug":"prometheus-production","link":"#prometheus-production","children":[]}]},{"level":2,"title":"\u{1F504} Deployment Scripts","slug":"\u{1F504}-deployment-scripts","link":"#\u{1F504}-deployment-scripts","children":[{"level":3,"title":"Automated Deployment","slug":"automated-deployment","link":"#automated-deployment","children":[]},{"level":3,"title":"Environment Management","slug":"environment-management","link":"#environment-management","children":[]}]},{"level":2,"title":"\u{1F5C4}\uFE0F Database Setup","slug":"\u{1F5C4}\uFE0F-database-setup","link":"#\u{1F5C4}\uFE0F-database-setup","children":[{"level":3,"title":"Create Databases","slug":"create-databases","link":"#create-databases","children":[]},{"level":3,"title":"Run Migrations","slug":"run-migrations","link":"#run-migrations","children":[]}]},{"level":2,"title":"\u{1F510} Security Considerations","slug":"\u{1F510}-security-considerations","link":"#\u{1F510}-security-considerations","children":[{"level":3,"title":"Environment Variables","slug":"environment-variables","link":"#environment-variables","children":[]},{"level":3,"title":"SSL/TLS","slug":"ssl-tls","link":"#ssl-tls","children":[]},{"level":3,"title":"Firewall","slug":"firewall","link":"#firewall","children":[]}]},{"level":2,"title":"\u{1F6A8} Troubleshooting","slug":"\u{1F6A8}-troubleshooting","link":"#\u{1F6A8}-troubleshooting","children":[{"level":3,"title":"Common Issues","slug":"common-issues","link":"#common-issues","children":[]},{"level":3,"title":"Logs","slug":"logs","link":"#logs","children":[]}]},{"level":2,"title":"\u{1F4C8} Performance Optimization","slug":"\u{1F4C8}-performance-optimization","link":"#\u{1F4C8}-performance-optimization","children":[{"level":3,"title":"Production Optimizations","slug":"production-optimizations","link":"#production-optimizations","children":[]}]},{"level":2,"title":"\u{1F504} Backup Strategy","slug":"\u{1F504}-backup-strategy","link":"#\u{1F504}-backup-strategy","children":[{"level":3,"title":"Database Backups","slug":"database-backups","link":"#database-backups","children":[]},{"level":3,"title":"Application Backups","slug":"application-backups","link":"#application-backups","children":[]}]},{"level":2,"title":"\u{1F4DA} Additional Resources","slug":"\u{1F4DA}-additional-resources","link":"#\u{1F4DA}-additional-resources","children":[]},{"level":2,"title":"\u{1F198} Support","slug":"\u{1F198}-support","link":"#\u{1F198}-support","children":[]}],"relativePath":"backend/MULTI_ENVIRONMENT_SETUP.md"}'),l={name:"backend/MULTI_ENVIRONMENT_SETUP.md"},o=e(`<h1 id="multi-environment-setup-guide" tabindex="-1">Multi-Environment Setup Guide <a class="header-anchor" href="#multi-environment-setup-guide" aria-hidden="true">#</a></h1><p>This guide covers setting up and managing multiple environments (development, staging, production) for the SF Middleware application.</p><h2 id="\u{1F3D7}\uFE0F-architecture-overview" tabindex="-1">\u{1F3D7}\uFE0F Architecture Overview <a class="header-anchor" href="#\u{1F3D7}\uFE0F-architecture-overview" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">environments/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 development/          # Local development</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 env.template</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 staging/             # Testing environment</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 env.template</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 production/          # Live production</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 prometheus.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 env.template</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 production2/        # Secondary production environment</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 prometheus.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 shared/              # Shared configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 config/</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500\u2500 configuration.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u{1F680}-quick-start" tabindex="-1">\u{1F680} Quick Start <a class="header-anchor" href="#\u{1F680}-quick-start" aria-hidden="true">#</a></h2><h3 id="development-environment" tabindex="-1">Development Environment <a class="header-anchor" href="#development-environment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Using Docker (Recommended)</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/development</span></span>
<span class="line"><span style="color:#A6ACCD;">cp env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Using PM2</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/development</span></span>
<span class="line"><span style="color:#A6ACCD;">cp env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><h3 id="staging-environment" tabindex="-1">Staging Environment <a class="header-anchor" href="#staging-environment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Using Docker</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/staging</span></span>
<span class="line"><span style="color:#A6ACCD;">cp env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Using PM2 (cPanel/WHM)</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/staging</span></span>
<span class="line"><span style="color:#A6ACCD;">cp env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><h3 id="production-environment" tabindex="-1">Production Environment <a class="header-anchor" href="#production-environment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Using Docker</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/production</span></span>
<span class="line"><span style="color:#A6ACCD;">cp env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Using PM2 (cPanel/WHM)</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/production</span></span>
<span class="line"><span style="color:#A6ACCD;">cp env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><h3 id="production2-environment" tabindex="-1">Production2 Environment <a class="header-anchor" href="#production2-environment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Using Docker</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/production2</span></span>
<span class="line"><span style="color:#676E95;"># Note: Production2 may use production .env template</span></span>
<span class="line"><span style="color:#A6ACCD;">cp ../production/env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Using PM2 (cPanel/WHM)</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/production2</span></span>
<span class="line"><span style="color:#A6ACCD;">cp ../production/env.template .env</span></span>
<span class="line"><span style="color:#676E95;"># Edit .env with your values</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F527}-environment-configuration" tabindex="-1">\u{1F527} Environment Configuration <a class="header-anchor" href="#\u{1F527}-environment-configuration" aria-hidden="true">#</a></h2><h3 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h3><ul><li><strong>URL</strong>: <code>http://localhost:3000</code></li><li><strong>Database</strong>: PostgreSQL on port 5432</li><li><strong>Redis</strong>: Redis on port 6379</li><li><strong>Features</strong>: Hot reload, debug logging, admin tools</li><li><strong>Rate Limits</strong>: Lenient for development</li></ul><h3 id="staging" tabindex="-1">Staging <a class="header-anchor" href="#staging" aria-hidden="true">#</a></h3><ul><li><strong>URL</strong>: <a href="https://staging-api.yourdomain.com" target="_blank" rel="noreferrer">https://staging-api.yourdomain.com</a></li><li><strong>Database</strong>: PostgreSQL on port 5433 (Docker) / 5432 (PM2)</li><li><strong>Redis</strong>: Redis on port 6380 (Docker) / 6379 (PM2)</li><li><strong>Features</strong>: Production-like setup, staging APIs</li><li><strong>Rate Limits</strong>: Moderate for testing</li></ul><h3 id="production" tabindex="-1">Production <a class="header-anchor" href="#production" aria-hidden="true">#</a></h3><ul><li><strong>URL</strong>: <a href="https://api.yourdomain.com" target="_blank" rel="noreferrer">https://api.yourdomain.com</a></li><li><strong>Database</strong>: PostgreSQL (optimized for high volume)</li><li><strong>Redis</strong>: Redis cluster (3 nodes)</li><li><strong>Features</strong>: High availability, monitoring, SSL</li><li><strong>Rate Limits</strong>: High volume (450k+ jobs/day)</li></ul><h3 id="production2" tabindex="-1">Production2 <a class="header-anchor" href="#production2" aria-hidden="true">#</a></h3><ul><li><strong>URL</strong>: <a href="https://api2.yourdomain.com" target="_blank" rel="noreferrer">https://api2.yourdomain.com</a> (if configured)</li><li><strong>Database</strong>: PostgreSQL (separate instance)</li><li><strong>Redis</strong>: Redis (can share or use separate instance)</li><li><strong>Features</strong>: Secondary production environment, monitoring</li><li><strong>Rate Limits</strong>: High volume (450k+ jobs/day)</li></ul><h2 id="\u{1F433}-docker-deployment" tabindex="-1">\u{1F433} Docker Deployment <a class="header-anchor" href="#\u{1F433}-docker-deployment" aria-hidden="true">#</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h3><ul><li>Docker and Docker Compose installed</li><li>Environment variables configured</li></ul><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Start environment</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs -f app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Stop environment</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose down</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Rebuild and restart</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d --build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Scale workers</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d --scale workers=5</span></span>
<span class="line"></span></code></pre></div><h2 id="\u26A1-pm2-deployment-cpanel-whm" tabindex="-1">\u26A1 PM2 Deployment (cPanel/WHM) <a class="header-anchor" href="#\u26A1-pm2-deployment-cpanel-whm" aria-hidden="true">#</a></h2><h3 id="prerequisites-1" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites-1" aria-hidden="true">#</a></h3><ul><li>Node.js 18+ installed</li><li>PM2 installed globally</li><li>Environment variables configured</li></ul><h3 id="commands-1" tabindex="-1">Commands <a class="header-anchor" href="#commands-1" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Start environment</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Monitor resources</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Stop environment</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart specific process</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-prod</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F310}-nginx-configuration" tabindex="-1">\u{1F310} Nginx Configuration <a class="header-anchor" href="#\u{1F310}-nginx-configuration" aria-hidden="true">#</a></h2><h3 id="ssl-setup" tabindex="-1">SSL Setup <a class="header-anchor" href="#ssl-setup" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install certbot</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install certbot python3-certbot-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Obtain certificates</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot --nginx -d api.yourdomain.com</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot --nginx -d staging-api.yourdomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test renewal</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot renew --dry-run</span></span>
<span class="line"></span></code></pre></div><h3 id="configuration-files" tabindex="-1">Configuration Files <a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a></h3><ul><li><strong>Development</strong>: <code>environments/development/nginx.conf</code></li><li><strong>Staging</strong>: <code>environments/staging/nginx.conf</code></li><li><strong>Production</strong>: <code>environments/production/nginx.conf</code></li></ul><h2 id="\u{1F4CA}-monitoring" tabindex="-1">\u{1F4CA} Monitoring <a class="header-anchor" href="#\u{1F4CA}-monitoring" aria-hidden="true">#</a></h2><h3 id="health-checks" tabindex="-1">Health Checks <a class="header-anchor" href="#health-checks" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check application health</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check queue health</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/queue/monitor/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check detailed metrics</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.yourdomain.com/queue/monitor/detailed</span></span>
<span class="line"></span></code></pre></div><h3 id="prometheus-production" tabindex="-1">Prometheus (Production) <a class="header-anchor" href="#prometheus-production" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Access Prometheus</span></span>
<span class="line"><span style="color:#A6ACCD;">open http://yourdomain.com:9090</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check metrics</span></span>
<span class="line"><span style="color:#A6ACCD;">curl http://yourdomain.com:9090/api/v1/query</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">query=up</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F504}-deployment-scripts" tabindex="-1">\u{1F504} Deployment Scripts <a class="header-anchor" href="#\u{1F504}-deployment-scripts" aria-hidden="true">#</a></h2><h3 id="automated-deployment" tabindex="-1">Automated Deployment <a class="header-anchor" href="#automated-deployment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Deploy to development</span></span>
<span class="line"><span style="color:#A6ACCD;">./scripts/deploy.sh development docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Deploy to staging</span></span>
<span class="line"><span style="color:#A6ACCD;">./scripts/deploy.sh staging pm2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Deploy to production</span></span>
<span class="line"><span style="color:#A6ACCD;">./scripts/deploy.sh production pm2</span></span>
<span class="line"></span></code></pre></div><h3 id="environment-management" tabindex="-1">Environment Management <a class="header-anchor" href="#environment-management" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Start environment</span></span>
<span class="line"><span style="color:#A6ACCD;">./scripts/start-env.sh development docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Stop environment</span></span>
<span class="line"><span style="color:#A6ACCD;">./scripts/stop-env.sh production pm2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Health check</span></span>
<span class="line"><span style="color:#A6ACCD;">./scripts/health-check.sh staging</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F5C4}\uFE0F-database-setup" tabindex="-1">\u{1F5C4}\uFE0F Database Setup <a class="header-anchor" href="#\u{1F5C4}\uFE0F-database-setup" aria-hidden="true">#</a></h2><h3 id="create-databases" tabindex="-1">Create Databases <a class="header-anchor" href="#create-databases" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Development</span></span>
<span class="line"><span style="color:#A6ACCD;">createdb sfapi_dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Staging</span></span>
<span class="line"><span style="color:#A6ACCD;">createdb sfapi_staging</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Production</span></span>
<span class="line"><span style="color:#A6ACCD;">createdb sfapi_production</span></span>
<span class="line"></span></code></pre></div><h3 id="run-migrations" tabindex="-1">Run Migrations <a class="header-anchor" href="#run-migrations" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Development</span></span>
<span class="line"><span style="color:#A6ACCD;">NODE_ENV=development npx prisma migrate dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Staging</span></span>
<span class="line"><span style="color:#A6ACCD;">NODE_ENV=staging npx prisma migrate deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Production</span></span>
<span class="line"><span style="color:#A6ACCD;">NODE_ENV=production npx prisma migrate deploy</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F510}-security-considerations" tabindex="-1">\u{1F510} Security Considerations <a class="header-anchor" href="#\u{1F510}-security-considerations" aria-hidden="true">#</a></h2><h3 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h3><ul><li>Use strong, unique passwords for each environment</li><li>Rotate secrets regularly</li><li>Never commit <code>.env</code> files to version control</li></ul><h3 id="ssl-tls" tabindex="-1">SSL/TLS <a class="header-anchor" href="#ssl-tls" aria-hidden="true">#</a></h3><ul><li>Use Let&#39;s Encrypt for free SSL certificates</li><li>Enable HSTS headers</li><li>Use strong cipher suites</li></ul><h3 id="firewall" tabindex="-1">Firewall <a class="header-anchor" href="#firewall" aria-hidden="true">#</a></h3><ul><li>Restrict database access to localhost only</li><li>Use strong authentication for Redis</li><li>Monitor access logs</li></ul><h2 id="\u{1F6A8}-troubleshooting" tabindex="-1">\u{1F6A8} Troubleshooting <a class="header-anchor" href="#\u{1F6A8}-troubleshooting" aria-hidden="true">#</a></h2><h3 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-hidden="true">#</a></h3><ol><li><p><strong>Port Conflicts</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check port usage</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Kill process</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> -9 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">PID</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>Database Connection Issues</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check database status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test connection</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U username -d database -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT 1;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>Redis Connection Issues</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check Redis status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test connection</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>SSL Certificate Issues</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check certificate validity</span></span>
<span class="line"><span style="color:#A6ACCD;">openssl x509 -in /etc/letsencrypt/live/api.yourdomain.com/fullchain.pem -text -noout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Renew certificates</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot renew</span></span>
<span class="line"></span></code></pre></div></li></ol><h3 id="logs" tabindex="-1">Logs <a class="header-anchor" href="#logs" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Docker logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs app</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># PM2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-prod</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-worker-prod-salesforce</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># System logs</span></span>
<span class="line"><span style="color:#A6ACCD;">journalctl -u postgresql</span></span>
<span class="line"><span style="color:#A6ACCD;">journalctl -u redis</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F4C8}-performance-optimization" tabindex="-1">\u{1F4C8} Performance Optimization <a class="header-anchor" href="#\u{1F4C8}-performance-optimization" aria-hidden="true">#</a></h2><h3 id="production-optimizations" tabindex="-1">Production Optimizations <a class="header-anchor" href="#production-optimizations" aria-hidden="true">#</a></h3><ol><li><p><strong>Database</strong></p><ul><li>Enable connection pooling</li><li>Create appropriate indexes</li><li>Regular VACUUM and ANALYZE</li></ul></li><li><p><strong>Redis</strong></p><ul><li>Configure memory limits</li><li>Use appropriate eviction policies</li><li>Enable persistence</li></ul></li><li><p><strong>Application</strong></p><ul><li>Use cluster mode for PM2</li><li>Enable gzip compression</li><li>Optimize rate limiting</li></ul></li><li><p><strong>Nginx</strong></p><ul><li>Enable HTTP/2</li><li>Configure caching</li><li>Optimize buffer sizes</li></ul></li></ol><h2 id="\u{1F504}-backup-strategy" tabindex="-1">\u{1F504} Backup Strategy <a class="header-anchor" href="#\u{1F504}-backup-strategy" aria-hidden="true">#</a></h2><h3 id="database-backups" tabindex="-1">Database Backups <a class="header-anchor" href="#database-backups" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create backup script</span></span>
<span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> backup-db.sh </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;"> &#39;</span><span style="color:#89DDFF;">EOF</span><span style="color:#C3E88D;">&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#C3E88D;">DATE=$(date +%Y%m%d_%H%M%S)</span></span>
<span class="line"><span style="color:#C3E88D;">pg_dump -U sfuser_prod -d sfapi_production &gt; /backups/sfapi_production_$DATE.sql</span></span>
<span class="line"><span style="color:#C3E88D;">gzip /backups/sfapi_production_$DATE.sql</span></span>
<span class="line"><span style="color:#C3E88D;">find /backups -name &quot;sfapi_production_*.sql.gz&quot; -mtime +7 -delete</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x backup-db.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Add to crontab</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 2 * * * /path/to/backup-db.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> crontab -</span></span>
<span class="line"></span></code></pre></div><h3 id="application-backups" tabindex="-1">Application Backups <a class="header-anchor" href="#application-backups" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Backup application</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -czf /backups/sf-middleware-</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">date +%Y%m%d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">.tar.gz /opt/sf-middleware/</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F4DA}-additional-resources" tabindex="-1">\u{1F4DA} Additional Resources <a class="header-anchor" href="#\u{1F4DA}-additional-resources" aria-hidden="true">#</a></h2><ul><li><a href="./environments/development/README.html">Development Setup</a></li><li><a href="./environments/staging/README.html">Staging Setup</a></li><li><a href="./environments/production/README.html">Production Setup</a></li><li><a href="./CPANEL_WHM_SETUP_V2.html">cPanel/WHM Setup V2</a> - Complete setup for both sf-middleware and sf-dashboard</li><li><a href="./CPANEL_WHM_SETUP.html">cPanel/WHM Setup</a> - Legacy setup guide</li><li><a href="./API_DOCUMENTATION.html">API Documentation</a></li></ul><h2 id="\u{1F198}-support" tabindex="-1">\u{1F198} Support <a class="header-anchor" href="#\u{1F198}-support" aria-hidden="true">#</a></h2><p>For issues and questions:</p><ol><li>Check the troubleshooting section above</li><li>Review environment-specific README files</li><li>Check application logs</li><li>Verify environment variables</li><li>Test health endpoints</li></ol>`,77),p=[o];function i(t,c,r,d,u,h){return a(),n("div",null,p)}const y=s(l,[["render",i]]);export{g as __pageData,y as default};

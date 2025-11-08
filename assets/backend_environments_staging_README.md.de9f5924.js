import{_ as s,c as n,o as a,a as e}from"./app.2edf4356.js";const y=JSON.parse('{"title":"Staging Environment","description":"","frontmatter":{},"headers":[{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[{"level":3,"title":"Using Docker","slug":"using-docker","link":"#using-docker","children":[]},{"level":3,"title":"Using PM2 (cPanel/WHM)","slug":"using-pm2-cpanel-whm","link":"#using-pm2-cpanel-whm","children":[]}]},{"level":2,"title":"Environment Details","slug":"environment-details","link":"#environment-details","children":[]},{"level":2,"title":"Environment Variables","slug":"environment-variables","link":"#environment-variables","children":[]},{"level":2,"title":"Staging Features","slug":"staging-features","link":"#staging-features","children":[]},{"level":2,"title":"Database Setup","slug":"database-setup","link":"#database-setup","children":[]},{"level":2,"title":"SSL Certificate Setup","slug":"ssl-certificate-setup","link":"#ssl-certificate-setup","children":[]},{"level":2,"title":"Monitoring","slug":"monitoring","link":"#monitoring","children":[{"level":3,"title":"Health Checks","slug":"health-checks","link":"#health-checks","children":[]},{"level":3,"title":"PM2 Monitoring","slug":"pm2-monitoring","link":"#pm2-monitoring","children":[]}]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[{"level":3,"title":"API Testing","slug":"api-testing","link":"#api-testing","children":[]},{"level":3,"title":"Load Testing","slug":"load-testing","link":"#load-testing","children":[]}]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[{"level":3,"title":"Common Issues","slug":"common-issues","link":"#common-issues","children":[]},{"level":3,"title":"Logs","slug":"logs","link":"#logs","children":[]}]},{"level":2,"title":"Deployment","slug":"deployment","link":"#deployment","children":[{"level":3,"title":"Docker Deployment","slug":"docker-deployment","link":"#docker-deployment","children":[]},{"level":3,"title":"PM2 Deployment","slug":"pm2-deployment","link":"#pm2-deployment","children":[]}]}],"relativePath":"backend/environments/staging/README.md"}'),l={name:"backend/environments/staging/README.md"},t=e(`<h1 id="staging-environment" tabindex="-1">Staging Environment <a class="header-anchor" href="#staging-environment" aria-hidden="true">#</a></h1><p>This directory contains the staging environment configuration for testing and integration.</p><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h2><h3 id="using-docker" tabindex="-1">Using Docker <a class="header-anchor" href="#using-docker" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Start staging environment</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/staging</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs -f app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Stop environment</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose down</span></span>
<span class="line"></span></code></pre></div><h3 id="using-pm2-cpanel-whm" tabindex="-1">Using PM2 (cPanel/WHM) <a class="header-anchor" href="#using-pm2-cpanel-whm" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Build application</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start with PM2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Stop</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"></span></code></pre></div><h2 id="environment-details" tabindex="-1">Environment Details <a class="header-anchor" href="#environment-details" aria-hidden="true">#</a></h2><ul><li><strong>Port</strong>: 3001 (Docker) / 3000 (PM2)</li><li><strong>URL</strong>: <a href="https://staging-api.yourdomain.com" target="_blank" rel="noreferrer">https://staging-api.yourdomain.com</a></li><li><strong>Database</strong>: PostgreSQL on port 5433 (Docker) / 5432 (PM2)</li><li><strong>Redis</strong>: Redis on port 6380 (Docker) / 6379 (PM2)</li><li><strong>Admin Tools</strong>: Adminer on port 8083</li></ul><h2 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h2><p>The staging environment uses <code>.env</code> file with the following key settings:</p><ul><li><code>NODE_ENV=staging</code></li><li><code>DATABASE_URL=postgresql://sfuser_staging:password@localhost:5432/sfapi_staging</code></li><li><code>REDIS_URL=redis://localhost:6379/1</code></li><li>Salesforce endpoints point to staging/sandbox environment</li><li>Moderate rate limiting for testing</li></ul><h2 id="staging-features" tabindex="-1">Staging Features <a class="header-anchor" href="#staging-features" aria-hidden="true">#</a></h2><ul><li><strong>Production-like Setup</strong>: Similar to production but with test data</li><li><strong>Staging APIs</strong>: Points to Salesforce staging environment</li><li><strong>Moderate Rate Limits</strong>: Balanced limits for testing</li><li><strong>Health Monitoring</strong>: Health check endpoints</li><li><strong>Logging</strong>: Structured logging for debugging</li></ul><h2 id="database-setup" tabindex="-1">Database Setup <a class="header-anchor" href="#database-setup" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Run migrations</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma migrate deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Create staging database user</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U postgres -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CREATE USER sfuser_staging WITH PASSWORD &#39;staging_password&#39;;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U postgres -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CREATE DATABASE sfapi_staging OWNER sfuser_staging;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="ssl-certificate-setup" tabindex="-1">SSL Certificate Setup <a class="header-anchor" href="#ssl-certificate-setup" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install certbot</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install certbot python3-certbot-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Obtain certificate</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot --nginx -d staging-api.yourdomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test renewal</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo certbot renew --dry-run</span></span>
<span class="line"></span></code></pre></div><h2 id="monitoring" tabindex="-1">Monitoring <a class="header-anchor" href="#monitoring" aria-hidden="true">#</a></h2><h3 id="health-checks" tabindex="-1">Health Checks <a class="header-anchor" href="#health-checks" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Application health</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://staging-api.yourdomain.com/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Queue health</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://staging-api.yourdomain.com/queue/monitor/health</span></span>
<span class="line"></span></code></pre></div><h3 id="pm2-monitoring" tabindex="-1">PM2 Monitoring <a class="header-anchor" href="#pm2-monitoring" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-staging</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Monitor resources</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-staging</span></span>
<span class="line"></span></code></pre></div><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><h3 id="api-testing" tabindex="-1">API Testing <a class="header-anchor" href="#api-testing" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Test token endpoint</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-api-key: sk_test_staging_123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     https://staging-api.yourdomain.com/v1/salesforce/token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test pledge endpoint</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -X POST \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-api-key: sk_test_staging_123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     -d </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;payload&quot;: {&quot;test&quot;: &quot;data&quot;}, &quot;token&quot;: &quot;test_token&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     https://staging-api.yourdomain.com/v1/salesforce/pledge</span></span>
<span class="line"></span></code></pre></div><h3 id="load-testing" tabindex="-1">Load Testing <a class="header-anchor" href="#load-testing" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install artillery</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g artillery</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Run load test</span></span>
<span class="line"><span style="color:#A6ACCD;">artillery run load-test.yml</span></span>
<span class="line"></span></code></pre></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-hidden="true">#</a></h3><ol><li><strong>Port Conflicts</strong>: Make sure ports 3001, 5433, 6380 are available</li><li><strong>SSL Issues</strong>: Check certificate validity and nginx configuration</li><li><strong>Database Connection</strong>: Verify database credentials and connectivity</li><li><strong>Redis Connection</strong>: Check Redis service status</li></ol><h3 id="logs" tabindex="-1">Logs <a class="header-anchor" href="#logs" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Application logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Database logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Redis logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># PM2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-staging</span></span>
<span class="line"></span></code></pre></div><h2 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-hidden="true">#</a></h2><h3 id="docker-deployment" tabindex="-1">Docker Deployment <a class="header-anchor" href="#docker-deployment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Build and deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d --build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Update application</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose pull</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span></code></pre></div><h3 id="pm2-deployment" tabindex="-1">PM2 Deployment <a class="header-anchor" href="#pm2-deployment" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Deploy new version</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span></code></pre></div>`,38),o=[t];function i(p,c,r,d,g,h){return a(),n("div",null,o)}const m=s(l,[["render",i]]);export{y as __pageData,m as default};

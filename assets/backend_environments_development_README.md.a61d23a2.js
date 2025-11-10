import{_ as s,c as n,o as e,a}from"./app.5dbd4e2d.js";const m=JSON.parse('{"title":"Development Environment","description":"","frontmatter":{},"headers":[{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[{"level":3,"title":"Using Docker (Recommended)","slug":"using-docker-recommended","link":"#using-docker-recommended","children":[]},{"level":3,"title":"Using PM2 (Alternative)","slug":"using-pm2-alternative","link":"#using-pm2-alternative","children":[]}]},{"level":2,"title":"Environment Details","slug":"environment-details","link":"#environment-details","children":[]},{"level":2,"title":"Environment Variables","slug":"environment-variables","link":"#environment-variables","children":[]},{"level":2,"title":"Development Features","slug":"development-features","link":"#development-features","children":[]},{"level":2,"title":"Database Setup","slug":"database-setup","link":"#database-setup","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[{"level":3,"title":"Port Already in Use","slug":"port-already-in-use","link":"#port-already-in-use","children":[]},{"level":3,"title":"Database Connection Issues","slug":"database-connection-issues","link":"#database-connection-issues","children":[]},{"level":3,"title":"Redis Connection Issues","slug":"redis-connection-issues","link":"#redis-connection-issues","children":[]}]}],"relativePath":"backend/environments/development/README.md"}'),l={name:"backend/environments/development/README.md"},t=a(`<h1 id="development-environment" tabindex="-1">Development Environment <a class="header-anchor" href="#development-environment" aria-hidden="true">#</a></h1><p>This directory contains the development environment configuration for local development.</p><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h2><h3 id="using-docker-recommended" tabindex="-1">Using Docker (Recommended) <a class="header-anchor" href="#using-docker-recommended" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Start development environment</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> environments/development</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs -f app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Stop environment</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose down</span></span>
<span class="line"></span></code></pre></div><h3 id="using-pm2-alternative" tabindex="-1">Using PM2 (Alternative) <a class="header-anchor" href="#using-pm2-alternative" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install dependencies</span></span>
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
<span class="line"></span></code></pre></div><h2 id="environment-details" tabindex="-1">Environment Details <a class="header-anchor" href="#environment-details" aria-hidden="true">#</a></h2><ul><li><strong>Port</strong>: 3000</li><li><strong>Database</strong>: PostgreSQL on port 5432</li><li><strong>Redis</strong>: Redis on port 6379</li><li><strong>Admin Tools</strong>: <ul><li>Adminer: <code>http://localhost:8081</code></li><li>Redis Commander: <code>http://localhost:8082</code></li></ul></li></ul><h2 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h2><p>The development environment uses <code>.env</code> file with the following key settings:</p><ul><li><code>NODE_ENV=development</code></li><li><code>DATABASE_URL=postgresql://postgres:postgres@localhost:5432/sfapi_dev</code></li><li><code>REDIS_URL=redis://localhost:6379/0</code></li><li>Salesforce endpoints point to sandbox/test environment</li><li>Rate limiting is more lenient for development</li></ul><h2 id="development-features" tabindex="-1">Development Features <a class="header-anchor" href="#development-features" aria-hidden="true">#</a></h2><ul><li><strong>Hot Reload</strong>: Code changes automatically restart the application</li><li><strong>Debug Logging</strong>: Verbose logging for debugging</li><li><strong>Admin Tools</strong>: Database and Redis admin interfaces</li><li><strong>Relaxed Rate Limits</strong>: Higher limits for testing</li><li><strong>Sandbox APIs</strong>: Points to Salesforce test environment</li></ul><h2 id="database-setup" tabindex="-1">Database Setup <a class="header-anchor" href="#database-setup" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Run migrations</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma migrate dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Seed database (if needed)</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma db seed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View database</span></span>
<span class="line"><span style="color:#A6ACCD;">open http://localhost:8081</span></span>
<span class="line"></span></code></pre></div><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Run tests</span></span>
<span class="line"><span style="color:#A6ACCD;">npm </span><span style="color:#82AAFF;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Run e2e tests</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run test:e2e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Run with coverage</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run test:cov</span></span>
<span class="line"></span></code></pre></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="port-already-in-use" tabindex="-1">Port Already in Use <a class="header-anchor" href="#port-already-in-use" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check what&#39;s using port 3000</span></span>
<span class="line"><span style="color:#A6ACCD;">lsof -i :3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Kill process</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> -9 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">PID</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="database-connection-issues" tabindex="-1">Database Connection Issues <a class="header-anchor" href="#database-connection-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PostgreSQL status</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart database</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose restart postgres</span></span>
<span class="line"></span></code></pre></div><h3 id="redis-connection-issues" tabindex="-1">Redis Connection Issues <a class="header-anchor" href="#redis-connection-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check Redis status</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose logs redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test Redis connection</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> redis redis-cli ping</span></span>
<span class="line"></span></code></pre></div>`,25),o=[t];function i(p,c,r,d,h,u){return e(),n("div",null,o)}const v=s(l,[["render",i]]);export{m as __pageData,v as default};

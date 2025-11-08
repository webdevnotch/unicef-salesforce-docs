import{_ as s,c as n,o as a,a as l}from"./app.6a59c4a4.js";const D=JSON.parse(`{"title":"cPanel/WHM Setup Guide V2 - Complete Application Setup","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3AF} What This Guide Covers","slug":"\u{1F3AF}-what-this-guide-covers","link":"#\u{1F3AF}-what-this-guide-covers","children":[{"level":3,"title":"Components Deployed","slug":"components-deployed","link":"#components-deployed","children":[]},{"level":3,"title":"Architecture","slug":"architecture","link":"#architecture","children":[]}]},{"level":2,"title":"\u2705 Prerequisites","slug":"\u2705-prerequisites","link":"#\u2705-prerequisites","children":[{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":3,"title":"Required Software","slug":"required-software","link":"#required-software","children":[]}]},{"level":2,"title":"\u{1F4E6} Step 1: Install Required Software","slug":"\u{1F4E6}-step-1-install-required-software","link":"#\u{1F4E6}-step-1-install-required-software","children":[]},{"level":2,"title":"\u{1F4C2} Step 2: Setup sf-middleware (API Backend)","slug":"\u{1F4C2}-step-2-setup-sf-middleware-api-backend","link":"#\u{1F4C2}-step-2-setup-sf-middleware-api-backend","children":[{"level":3,"title":"2.1 Create Application Directory","slug":"_2-1-create-application-directory","link":"#_2-1-create-application-directory","children":[]},{"level":3,"title":"2.2 Setup PostgreSQL Database","slug":"_2-2-setup-postgresql-database","link":"#_2-2-setup-postgresql-database","children":[]},{"level":3,"title":"2.3 Configure PostgreSQL (High Volume)","slug":"_2-3-configure-postgresql-high-volume","link":"#_2-3-configure-postgresql-high-volume","children":[]},{"level":3,"title":"2.4 Configure Redis","slug":"_2-4-configure-redis","link":"#_2-4-configure-redis","children":[]},{"level":3,"title":"2.5 Create Environment File","slug":"_2-5-create-environment-file","link":"#_2-5-create-environment-file","children":[]},{"level":3,"title":"2.6 Create PM2 Configuration","slug":"_2-6-create-pm2-configuration","link":"#_2-6-create-pm2-configuration","children":[]}]},{"level":2,"title":"\u{1F4C2} Step 3: Setup sf-dashboard (Admin Panel)","slug":"\u{1F4C2}-step-3-setup-sf-dashboard-admin-panel","link":"#\u{1F4C2}-step-3-setup-sf-dashboard-admin-panel","children":[{"level":3,"title":"3.1 Create Dashboard Directory","slug":"_3-1-create-dashboard-directory","link":"#_3-1-create-dashboard-directory","children":[]},{"level":3,"title":"3.2 Create Production Environment Configuration","slug":"_3-2-create-production-environment-configuration","link":"#_3-2-create-production-environment-configuration","children":[]},{"level":3,"title":"3.3 Copy Built Files to Web Directory","slug":"_3-3-copy-built-files-to-web-directory","link":"#_3-3-copy-built-files-to-web-directory","children":[]}]},{"level":2,"title":"\u{1F310} Step 4: Setup Nginx Reverse Proxy","slug":"\u{1F310}-step-4-setup-nginx-reverse-proxy","link":"#\u{1F310}-step-4-setup-nginx-reverse-proxy","children":[{"level":3,"title":"4.1 Configure API Proxy","slug":"_4-1-configure-api-proxy","link":"#_4-1-configure-api-proxy","children":[]},{"level":3,"title":"4.2 Configure Dashboard","slug":"_4-2-configure-dashboard","link":"#_4-2-configure-dashboard","children":[]}]},{"level":2,"title":"\u{1F512} Step 5: Setup SSL Certificates (Let's Encrypt)","slug":"\u{1F512}-step-5-setup-ssl-certificates-let-s-encrypt","link":"#\u{1F512}-step-5-setup-ssl-certificates-let-s-encrypt","children":[{"level":3,"title":"5.1 Install Certbot","slug":"_5-1-install-certbot","link":"#_5-1-install-certbot","children":[]},{"level":3,"title":"5.2 Obtain Certificates","slug":"_5-2-obtain-certificates","link":"#_5-2-obtain-certificates","children":[]},{"level":3,"title":"5.3 Setup Auto-Renewal","slug":"_5-3-setup-auto-renewal","link":"#_5-3-setup-auto-renewal","children":[]}]},{"level":2,"title":"\u{1F525} Step 6: Configure Firewall","slug":"\u{1F525}-step-6-configure-firewall","link":"#\u{1F525}-step-6-configure-firewall","children":[]},{"level":2,"title":"\u{1F4CA} Step 7: Testing & Verification","slug":"\u{1F4CA}-step-7-testing-verification","link":"#\u{1F4CA}-step-7-testing-verification","children":[{"level":3,"title":"7.1 Check Service Status","slug":"_7-1-check-service-status","link":"#_7-1-check-service-status","children":[]},{"level":3,"title":"7.2 Test API Endpoints","slug":"_7-2-test-api-endpoints","link":"#_7-2-test-api-endpoints","children":[]},{"level":3,"title":"7.3 Test Dashboard","slug":"_7-3-test-dashboard","link":"#_7-3-test-dashboard","children":[]},{"level":3,"title":"7.4 View Logs","slug":"_7-4-view-logs","link":"#_7-4-view-logs","children":[]}]},{"level":2,"title":"\u{1F504} Step 8: Setup Auto-Start","slug":"\u{1F504}-step-8-setup-auto-start","link":"#\u{1F504}-step-8-setup-auto-start","children":[]},{"level":2,"title":"\u{1F6E0}\uFE0F Troubleshooting","slug":"\u{1F6E0}\uFE0F-troubleshooting","link":"#\u{1F6E0}\uFE0F-troubleshooting","children":[{"level":3,"title":"Application Won't Start","slug":"application-won-t-start","link":"#application-won-t-start","children":[]},{"level":3,"title":"High Memory Usage","slug":"high-memory-usage","link":"#high-memory-usage","children":[]},{"level":3,"title":"Database Connection Issues","slug":"database-connection-issues","link":"#database-connection-issues","children":[]},{"level":3,"title":"Redis Connection Issues","slug":"redis-connection-issues","link":"#redis-connection-issues","children":[]},{"level":3,"title":"Dashboard Not Loading","slug":"dashboard-not-loading","link":"#dashboard-not-loading","children":[]},{"level":3,"title":"SSL Certificate Issues","slug":"ssl-certificate-issues","link":"#ssl-certificate-issues","children":[]},{"level":3,"title":"CORS Issues","slug":"cors-issues","link":"#cors-issues","children":[]}]},{"level":2,"title":"\u{1F4C8} Performance Optimization","slug":"\u{1F4C8}-performance-optimization","link":"#\u{1F4C8}-performance-optimization","children":[{"level":3,"title":"Expected Performance","slug":"expected-performance","link":"#expected-performance","children":[]},{"level":3,"title":"Optimization Tips","slug":"optimization-tips","link":"#optimization-tips","children":[]}]},{"level":2,"title":"\u{1F510} Security Checklist","slug":"\u{1F510}-security-checklist","link":"#\u{1F510}-security-checklist","children":[]},{"level":2,"title":"\u{1F4DD} Maintenance Schedule","slug":"\u{1F4DD}-maintenance-schedule","link":"#\u{1F4DD}-maintenance-schedule","children":[{"level":3,"title":"Daily","slug":"daily","link":"#daily","children":[]},{"level":3,"title":"Weekly","slug":"weekly","link":"#weekly","children":[]},{"level":3,"title":"Monthly","slug":"monthly","link":"#monthly","children":[]}]},{"level":2,"title":"\u{1F198} Useful Commands","slug":"\u{1F198}-useful-commands","link":"#\u{1F198}-useful-commands","children":[]},{"level":2,"title":"\u{1F4DA} Useful Files","slug":"\u{1F4DA}-useful-files","link":"#\u{1F4DA}-useful-files","children":[{"level":3,"title":"Application Files","slug":"application-files","link":"#application-files","children":[]},{"level":3,"title":"System Files","slug":"system-files","link":"#system-files","children":[]},{"level":3,"title":"Configuration Files","slug":"configuration-files","link":"#configuration-files","children":[]}]},{"level":2,"title":"\u{1F389} Deployment Complete!","slug":"\u{1F389}-deployment-complete","link":"#\u{1F389}-deployment-complete","children":[{"level":3,"title":"Access URLs","slug":"access-urls","link":"#access-urls","children":[]},{"level":3,"title":"Next Steps","slug":"next-steps","link":"#next-steps","children":[]}]},{"level":2,"title":"\u{1F4DE} Support","slug":"\u{1F4DE}-support","link":"#\u{1F4DE}-support","children":[]}],"relativePath":"backend/CPANEL_WHM_SETUP_V2.md"}`),e={name:"backend/CPANEL_WHM_SETUP_V2.md"},p=l(`<h1 id="cpanel-whm-setup-guide-v2-complete-application-setup" tabindex="-1">cPanel/WHM Setup Guide V2 - Complete Application Setup <a class="header-anchor" href="#cpanel-whm-setup-guide-v2-complete-application-setup" aria-hidden="true">#</a></h1><p>This comprehensive guide shows how to deploy <strong>both sf-middleware (API backend) and sf-dashboard (Admin panel)</strong> on cPanel/WHM without Docker for high-volume production use (450k+ jobs/day).</p><hr><h2 id="\u{1F3AF}-what-this-guide-covers" tabindex="-1">\u{1F3AF} What This Guide Covers <a class="header-anchor" href="#\u{1F3AF}-what-this-guide-covers" aria-hidden="true">#</a></h2><h3 id="components-deployed" tabindex="-1">Components Deployed <a class="header-anchor" href="#components-deployed" aria-hidden="true">#</a></h3><table><thead><tr><th>Component</th><th>Description</th><th>URL</th><th>Port</th></tr></thead><tbody><tr><td><strong>sf-middleware</strong></td><td>API Backend + Workers (NestJS with BullMQ)</td><td><a href="https://api.thesubdomain.mydomain.com" target="_blank" rel="noreferrer">https://api.thesubdomain.mydomain.com</a></td><td>3000</td></tr><tr><td><strong>sf-dashboard</strong></td><td>Admin Dashboard (React/Vite)</td><td><a href="https://thesubdomain.mydomain.com" target="_blank" rel="noreferrer">https://thesubdomain.mydomain.com</a></td><td>-</td></tr><tr><td><strong>PostgreSQL 15</strong></td><td>Database</td><td>localhost:5432</td><td>5432</td></tr><tr><td><strong>Redis 7</strong></td><td>Queue Management</td><td>localhost:6379</td><td>6379</td></tr><tr><td><strong>Nginx</strong></td><td>Reverse Proxy</td><td>-</td><td>80/443</td></tr></tbody></table><h3 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502                      cPanel/WHM Server                          \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502                                                                  \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502   Nginx (Port 443) \u2502         \u2502  Nginx (Port 443) \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  api.thesubdomain.mydomain.com\u2502         \u2502thesubdomain.mydomain.com \u2502      \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502           \u2502                              \u2502                      \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502           \u25BC                              \u25BC                      \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502         sf-middleware (NestJS + PM2)             \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502         Port: 3000 (2 cluster instances)        \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502                                                  \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2502  REST API    \u2502  \u2502  BullMQ Processors   \u2502   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2502  Endpoints   \u2502  \u2502  (Workers)           \u2502   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2502              \u2502  \u2502  - Salesforce      \u2502   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2502  /api/*      \u2502  \u2502  - Email           \u2502   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2502  /auth/*      \u2502  \u2502  - Notifications   \u2502   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502                                                  \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u26A1 Workers run automatically via @nestjs/bullmq \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502     No separate worker processes needed!        \u2502            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502           \u2502                                                     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510              \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502                          \u25BC                       \u25BC              \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  PostgreSQL 15   \u2502         \u2502    Redis 7       \u2502             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  Port: 5432      \u2502         \u2502  Port: 6379      \u2502             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502                  \u2502         \u2502  (Job Queues)    \u2502             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518             \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502                                                                  \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Important Architecture Note:</strong></p><ul><li><strong>sf-middleware</strong> is a unified NestJS application that handles <strong>both REST API and background job processing</strong></li><li>Workers are <strong>NOT separate processes</strong> - they run as BullMQ processors (<code>@nestjs/bullmq</code>) within the NestJS app</li><li>Each PM2 instance runs the complete NestJS application with: <ul><li>REST API endpoints</li><li>BullMQ queue processors (automatically process jobs from Redis)</li><li>Scheduled cron jobs (via <code>@nestjs/schedule</code>)</li></ul></li><li>Workers process jobs automatically when the app starts - no separate <code>worker:start</code> command needed</li></ul><hr><h2 id="\u2705-prerequisites" tabindex="-1">\u2705 Prerequisites <a class="header-anchor" href="#\u2705-prerequisites" aria-hidden="true">#</a></h2><h3 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a></h3><ul><li><strong>OS</strong>: CentOS 7/8, CloudLinux, or similar (typical cPanel/WHM)</li><li><strong>RAM</strong>: 16GB (8GB minimum)</li><li><strong>CPU</strong>: 8 cores (4 minimum)</li><li><strong>Storage</strong>: 100GB+ SSD</li><li><strong>Access</strong>: Root or reseller SSH access</li></ul><h3 id="required-software" tabindex="-1">Required Software <a class="header-anchor" href="#required-software" aria-hidden="true">#</a></h3><ul><li>cPanel/WHM installed</li><li>Node.js 18+ (we&#39;ll install)</li><li>PostgreSQL 15+ (we&#39;ll install)</li><li>Redis 7+ (we&#39;ll install)</li><li>PM2 (we&#39;ll install)</li><li>Nginx (typically pre-installed)</li></ul><hr><h2 id="\u{1F4E6}-step-1-install-required-software" tabindex="-1">\u{1F4E6} Step 1: Install Required Software <a class="header-anchor" href="#\u{1F4E6}-step-1-install-required-software" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># SSH into your cPanel/WHM server</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh root@your-server.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Update system packages</span></span>
<span class="line"><span style="color:#A6ACCD;">yum update -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install Node.js 18</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -fsSL https://rpm.nodesource.com/setup_18.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bash -</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y nodejs</span></span>
<span class="line"><span style="color:#A6ACCD;">node --version</span></span>
<span class="line"><span style="color:#A6ACCD;">npm --version</span></span>
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
<span class="line"><span style="color:#676E95;"># Install PM2 globally</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g pm2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup systemd</span></span>
<span class="line"><span style="color:#676E95;"># Follow the output command, then:</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify installations</span></span>
<span class="line"><span style="color:#A6ACCD;">node --version    </span><span style="color:#676E95;"># Should be v18+</span></span>
<span class="line"><span style="color:#A6ACCD;">psql --version    </span><span style="color:#676E95;"># Should be 15+</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli --version  </span><span style="color:#676E95;"># Should be 7+</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 --version</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4C2}-step-2-setup-sf-middleware-api-backend" tabindex="-1">\u{1F4C2} Step 2: Setup sf-middleware (API Backend) <a class="header-anchor" href="#\u{1F4C2}-step-2-setup-sf-middleware-api-backend" aria-hidden="true">#</a></h2><h3 id="_2-1-create-application-directory" tabindex="-1">2.1 Create Application Directory <a class="header-anchor" href="#_2-1-create-application-directory" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create application directory</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/sf-middleware</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Upload your code (via Git, SCP, or cPanel File Manager)</span></span>
<span class="line"><span style="color:#676E95;"># Option 1: Clone from Git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://your-repo/sf-project.git temp</span></span>
<span class="line"><span style="color:#A6ACCD;">mv temp/sf-middleware/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf temp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Option 2: Upload via cPanel File Manager</span></span>
<span class="line"><span style="color:#676E95;"># Extract to /opt/sf-middleware/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Build the application</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Generate Prisma client</span></span>
<span class="line"><span style="color:#A6ACCD;">npx prisma generate</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-2-setup-postgresql-database" tabindex="-1">2.2 Setup PostgreSQL Database <a class="header-anchor" href="#_2-2-setup-postgresql-database" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Switch to postgres user</span></span>
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
<span class="line"></span></code></pre></div><h3 id="_2-3-configure-postgresql-high-volume" tabindex="-1">2.3 Configure PostgreSQL (High Volume) <a class="header-anchor" href="#_2-3-configure-postgresql-high-volume" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit PostgreSQL configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">nano /var/lib/pgsql/15/data/postgresql.conf</span></span>
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
<span class="line"></span></code></pre></div><h3 id="_2-4-configure-redis" tabindex="-1">2.4 Configure Redis <a class="header-anchor" href="#_2-4-configure-redis" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Edit Redis configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">nano /etc/redis/redis.conf</span></span>
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
<span class="line"></span></code></pre></div><h3 id="_2-5-create-environment-file" tabindex="-1">2.5 Create Environment File <a class="header-anchor" href="#_2-5-create-environment-file" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">nano .env</span></span>
<span class="line"></span></code></pre></div><p><strong>Add all environment variables:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># Application</span></span>
<span class="line"><span style="color:#A6ACCD;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#A6ACCD;">PORT=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Database</span></span>
<span class="line"><span style="color:#A6ACCD;">DATABASE_URL=postgresql://sfuser:your_secure_password_here@localhost:5432/sfapi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Redis</span></span>
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
<span class="line"><span style="color:#A6ACCD;"># Note: These control concurrency for BullMQ processors within the NestJS app</span></span>
<span class="line"><span style="color:#A6ACCD;"># Workers run automatically - no separate worker processes needed</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUE_NAME=sf-queue</span></span>
<span class="line"><span style="color:#A6ACCD;">SALESFORCE_CONCURRENCY=20  # Jobs processed concurrently per instance</span></span>
<span class="line"><span style="color:#A6ACCD;">EMAIL_CONCURRENCY=20       # Email jobs processed concurrently per instance</span></span>
<span class="line"><span style="color:#A6ACCD;">NOTIFICATION_CONCURRENCY=20 # Notification jobs processed concurrently per instance</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># CORS (Allow dashboard to access API)</span></span>
<span class="line"><span style="color:#A6ACCD;">CORS_ORIGIN=https://thesubdomain.mydomain.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Rate Limiting</span></span>
<span class="line"><span style="color:#A6ACCD;">HIGH_VOLUME_RATE_LIMIT=1000</span></span>
<span class="line"><span style="color:#A6ACCD;">RATE_LIMIT_MAX=500</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-6-create-pm2-configuration" tabindex="-1">2.6 Create PM2 Configuration <a class="header-anchor" href="#_2-6-create-pm2-configuration" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">nano ecosystem.config.js</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// Production PM2 Configuration (High Volume)</span></span>
<span class="line"><span style="color:#676E95;">// Note: Workers (BullMQ processors) run automatically within the NestJS app</span></span>
<span class="line"><span style="color:#676E95;">// No separate worker processes needed - the app handles both REST API and job processing</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Main Application (handles both REST API and queue workers)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Each instance processes jobs automatically via BullMQ processors</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sf-middleware-prod</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 2 instances for high availability and load distribution</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cluster</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Cluster mode for better performance</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">PORT</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.env</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">error_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/prod-error.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">out_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs/prod-out.log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">log_date_format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY-MM-DD HH:mm:ss Z</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">merge_logs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">ignore_watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// High availability settings</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">min_uptime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_restarts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">restart_delay</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><strong>Important Notes:</strong></p><ul><li><strong>Workers run automatically</strong>: The NestJS application uses <code>@nestjs/bullmq</code> processors (SalesforceProcessor, EmailProcessor, NotificationProcessor) which automatically process jobs from Redis queues</li><li><strong>No separate worker processes</strong>: Workers are part of the NestJS application module system, not separate Node.js processes</li><li><strong>Each instance handles both</strong>: Every PM2 instance runs the full NestJS app which includes: <ul><li>REST API endpoints (on port 3000)</li><li>BullMQ queue processors (automatically process jobs from Redis)</li><li>Cron jobs (via @nestjs/schedule)</li></ul></li><li><strong>Scaling</strong>: Increase <code>instances</code> to scale both API and workers together, or use separate PM2 apps if you need different scaling ratios</li></ul><p><strong>Create logs directory and start:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/sf-middleware/logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start the application</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start ecosystem.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># View logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Monitor resources</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4C2}-step-3-setup-sf-dashboard-admin-panel" tabindex="-1">\u{1F4C2} Step 3: Setup sf-dashboard (Admin Panel) <a class="header-anchor" href="#\u{1F4C2}-step-3-setup-sf-dashboard-admin-panel" aria-hidden="true">#</a></h2><h3 id="_3-1-create-dashboard-directory" tabindex="-1">3.1 Create Dashboard Directory <a class="header-anchor" href="#_3-1-create-dashboard-directory" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create dashboard directory</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/sf-dashboard</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-dashboard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Upload your code (via Git, SCP, or cPanel File Manager)</span></span>
<span class="line"><span style="color:#676E95;"># Option 1: Clone from Git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://your-repo/sf-project.git temp</span></span>
<span class="line"><span style="color:#A6ACCD;">mv temp/sf-dashboard/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf temp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Option 2: Upload via cPanel File Manager</span></span>
<span class="line"><span style="color:#676E95;"># Extract to /opt/sf-dashboard/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Build for production</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-2-create-production-environment-configuration" tabindex="-1">3.2 Create Production Environment Configuration <a class="header-anchor" href="#_3-2-create-production-environment-configuration" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/sf-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">nano .env.production</span></span>
<span class="line"></span></code></pre></div><p><strong>Add environment variables:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">VITE_API_URL=https://api.thesubdomain.mydomain.com</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_WS_URL=wss://api.thesubdomain.mydomain.com</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE=SF Middleware Dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_VERSION=1.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Build with production environment:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Rebuild with production environment</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify build output</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -la dist/</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-3-copy-built-files-to-web-directory" tabindex="-1">3.3 Copy Built Files to Web Directory <a class="header-anchor" href="#_3-3-copy-built-files-to-web-directory" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Navigate to your cPanel user&#39;s public_html directory</span></span>
<span class="line"><span style="color:#676E95;"># Replace &#39;USER&#39; with your actual cPanel username</span></span>
<span class="line"><span style="color:#676E95;"># Replace &#39;thesubdomain&#39; with your actual subdomain name</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /home/USER/public_html/thesubdomain.mydomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># If the directory doesn&#39;t exist, create it</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /home/USER/public_html/thesubdomain.mydomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Copy built files</span></span>
<span class="line"><span style="color:#A6ACCD;">cp -r /opt/sf-dashboard/dist/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> /home/USER/public_html/thesubdomain.mydomain.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Set proper permissions</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R USER:USER /home/USER/public_html/thesubdomain.mydomain.com</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod -R 755 /home/USER/public_html/thesubdomain.mydomain.com</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F310}-step-4-setup-nginx-reverse-proxy" tabindex="-1">\u{1F310} Step 4: Setup Nginx Reverse Proxy <a class="header-anchor" href="#\u{1F310}-step-4-setup-nginx-reverse-proxy" aria-hidden="true">#</a></h2><h3 id="_4-1-configure-api-proxy" tabindex="-1">4.1 Configure API Proxy <a class="header-anchor" href="#_4-1-configure-api-proxy" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create Nginx configuration for API</span></span>
<span class="line"><span style="color:#A6ACCD;">nano /etc/nginx/conf.d/sf-api.conf</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sf_middleware </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> 127.0.0.1:3000;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> keepalive </span><span style="color:#A6ACCD;">64</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># HTTP redirect to HTTPS for API</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">api.thesubdomain.mydomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># HTTPS configuration for API</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">api.thesubdomain.mydomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># SSL certificates (setup with Let&#39;s Encrypt)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;">/etc/letsencrypt/live/api.thesubdomain.mydomain.com/fullchain.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">/etc/letsencrypt/live/api.thesubdomain.mydomain.com/privkey.pem</span><span style="color:#89DDFF;">;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Proxy to sf-middleware</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># WebSocket support</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ws </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://sf_middleware</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Connection </span><span style="color:#C3E88D;">&quot;upgrade&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Rate limiting for high volume</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> limit_req_zone $</span><span style="color:#A6ACCD;">binary_remote_addr zone=api_limit:10m rate=1000r/m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> limit_req </span><span style="color:#A6ACCD;">zone=api_limit burst=20 nodelay</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-2-configure-dashboard" tabindex="-1">4.2 Configure Dashboard <a class="header-anchor" href="#_4-2-configure-dashboard" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Create Nginx configuration for Dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">nano /etc/nginx/conf.d/sf-dashboard.conf</span></span>
<span class="line"></span></code></pre></div><p><strong>Content:</strong></p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># HTTP redirect to HTTPS for Dashboard</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">thesubdomain.mydomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># HTTPS configuration for Dashboard</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">thesubdomain.mydomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># SSL certificates (setup with Let&#39;s Encrypt)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;">/etc/letsencrypt/live/thesubdomain.mydomain.com/fullchain.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">/etc/letsencrypt/live/thesubdomain.mydomain.com/privkey.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># SSL configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_protocols </span><span style="color:#A6ACCD;">TLSv1.2 TLSv1.3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_ciphers </span><span style="color:#A6ACCD;">HIGH:!aNULL:!MD5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_prefer_server_ciphers </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Security headers</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">X-Frame-Options </span><span style="color:#C3E88D;">&quot;SAMEORIGIN&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">X-Content-Type-Options </span><span style="color:#C3E88D;">&quot;nosniff&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">X-XSS-Protection </span><span style="color:#C3E88D;">&quot;1; mode=block&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">Strict-Transport-Security </span><span style="color:#C3E88D;">&quot;max-age=31536000; includeSubDomains&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Root directory</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Replace &#39;USER&#39; with your actual cPanel username</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/home/USER/public_html/thesubdomain.mydomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;">index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Gzip compression</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip_vary </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip_min_length </span><span style="color:#A6ACCD;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip_types </span><span style="color:#A6ACCD;">text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Serve static files</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> try_files $</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># Cache static assets</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> expires </span><span style="color:#A6ACCD;">1y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> add_header </span><span style="color:#A6ACCD;">Cache-Control </span><span style="color:#C3E88D;">&quot;public, immutable&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># API proxy (for CORS and API calls from dashboard)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/api/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:3000/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>Test and reload Nginx:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Test Nginx configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Reload Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload nginx</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F512}-step-5-setup-ssl-certificates-let-s-encrypt" tabindex="-1">\u{1F512} Step 5: Setup SSL Certificates (Let&#39;s Encrypt) <a class="header-anchor" href="#\u{1F512}-step-5-setup-ssl-certificates-let-s-encrypt" aria-hidden="true">#</a></h2><h3 id="_5-1-install-certbot" tabindex="-1">5.1 Install Certbot <a class="header-anchor" href="#_5-1-install-certbot" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Install certbot</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y certbot python3-certbot-nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-2-obtain-certificates" tabindex="-1">5.2 Obtain Certificates <a class="header-anchor" href="#_5-2-obtain-certificates" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Obtain certificate for API</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot --nginx -d api.thesubdomain.mydomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Obtain certificate for Dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot --nginx -d thesubdomain.mydomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test auto-renewal</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot renew --dry-run</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-3-setup-auto-renewal" tabindex="-1">5.3 Setup Auto-Renewal <a class="header-anchor" href="#_5-3-setup-auto-renewal" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Certbot should have already set up auto-renewal</span></span>
<span class="line"><span style="color:#676E95;"># Verify cron job</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -l </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep certbot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># If not present, add it</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0,12 * * * root certbot renew --quiet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> /etc/crontab</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F525}-step-6-configure-firewall" tabindex="-1">\u{1F525} Step 6: Configure Firewall <a class="header-anchor" href="#\u{1F525}-step-6-configure-firewall" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Allow HTTP/HTTPS</span></span>
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
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4CA}-step-7-testing-verification" tabindex="-1">\u{1F4CA} Step 7: Testing &amp; Verification <a class="header-anchor" href="#\u{1F4CA}-step-7-testing-verification" aria-hidden="true">#</a></h2><h3 id="_7-1-check-service-status" tabindex="-1">7.1 Check Service Status <a class="header-anchor" href="#_7-1-check-service-status" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PM2 status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check PostgreSQL</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-2-test-api-endpoints" tabindex="-1">7.2 Test API Endpoints <a class="header-anchor" href="#_7-2-test-api-endpoints" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Health check</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.thesubdomain.mydomain.com/health</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Detailed health check</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.thesubdomain.mydomain.com/healthz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Queue monitor</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://api.thesubdomain.mydomain.com/queue/monitor/health</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-3-test-dashboard" tabindex="-1">7.3 Test Dashboard <a class="header-anchor" href="#_7-3-test-dashboard" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Open in browser</span></span>
<span class="line"><span style="color:#676E95;"># https://thesubdomain.mydomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Or test with curl</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -I https://thesubdomain.mydomain.com</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-4-view-logs" tabindex="-1">7.4 View Logs <a class="header-anchor" href="#_7-4-view-logs" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># PM2 logs (all instances)</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># PM2 logs for specific instance</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-prod --lines 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Nginx logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/nginx/access.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/nginx/error.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Application logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/prod-error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/prod-out.log</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F504}-step-8-setup-auto-start" tabindex="-1">\u{1F504} Step 8: Setup Auto-Start <a class="header-anchor" href="#\u{1F504}-step-8-setup-auto-start" aria-hidden="true">#</a></h2><p>PM2 should already be configured for auto-start. Verify:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PM2 startup configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Save current PM2 process list</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F6E0}\uFE0F-troubleshooting" tabindex="-1">\u{1F6E0}\uFE0F Troubleshooting <a class="header-anchor" href="#\u{1F6E0}\uFE0F-troubleshooting" aria-hidden="true">#</a></h2><h3 id="application-won-t-start" tabindex="-1">Application Won&#39;t Start <a class="header-anchor" href="#application-won-t-start" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PM2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-prod --lines 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if port 3000 is in use</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart PM2</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all</span></span>
<span class="line"></span></code></pre></div><h3 id="high-memory-usage" tabindex="-1">High Memory Usage <a class="header-anchor" href="#high-memory-usage" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Monitor memory</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check memory usage</span></span>
<span class="line"><span style="color:#A6ACCD;">free -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-prod</span></span>
<span class="line"></span></code></pre></div><h3 id="database-connection-issues" tabindex="-1">Database Connection Issues <a class="header-anchor" href="#database-connection-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check PostgreSQL status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status postgresql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check PostgreSQL logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/lib/pgsql/15/data/log/postgresql-</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test connection</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi -c </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SELECT 1;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check DATABASE_URL in .env</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /opt/sf-middleware/.env </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep DATABASE_URL</span></span>
<span class="line"></span></code></pre></div><h3 id="redis-connection-issues" tabindex="-1">Redis Connection Issues <a class="header-anchor" href="#redis-connection-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check Redis status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Redis logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/redis/redis-server.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Test Redis connection</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli ping</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check REDIS_URL in .env</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /opt/sf-middleware/.env </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep REDIS_URL</span></span>
<span class="line"></span></code></pre></div><h3 id="dashboard-not-loading" tabindex="-1">Dashboard Not Loading <a class="header-anchor" href="#dashboard-not-loading" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check file permissions (replace USER with your cPanel username)</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -la /home/USER/public_html/thesubdomain.mydomain.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Nginx configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check Nginx error logs</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/nginx/error.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Verify build output</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -la /opt/sf-dashboard/dist/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check if index.html exists</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -la /home/USER/public_html/thesubdomain.mydomain.com/index.html</span></span>
<span class="line"></span></code></pre></div><h3 id="ssl-certificate-issues" tabindex="-1">SSL Certificate Issues <a class="header-anchor" href="#ssl-certificate-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check certificate validity</span></span>
<span class="line"><span style="color:#A6ACCD;">openssl x509 -in /etc/letsencrypt/live/api.thesubdomain.mydomain.com/fullchain.pem -text -noout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Check certificate expiration</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot certificates</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Renew certificates if needed</span></span>
<span class="line"><span style="color:#A6ACCD;">certbot renew</span></span>
<span class="line"></span></code></pre></div><h3 id="cors-issues" tabindex="-1">CORS Issues <a class="header-anchor" href="#cors-issues" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Check CORS_ORIGIN in .env</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /opt/sf-middleware/.env </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep CORS_ORIGIN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Should match your dashboard URL</span></span>
<span class="line"><span style="color:#676E95;"># Example: CORS_ORIGIN=https://thesubdomain.mydomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Restart after changes</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart sf-middleware-prod</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4C8}-performance-optimization" tabindex="-1">\u{1F4C8} Performance Optimization <a class="header-anchor" href="#\u{1F4C8}-performance-optimization" aria-hidden="true">#</a></h2><h3 id="expected-performance" tabindex="-1">Expected Performance <a class="header-anchor" href="#expected-performance" aria-hidden="true">#</a></h3><p>With this setup, you should achieve:</p><ul><li>\u2705 <strong>450,000+ jobs/day</strong> sustained capacity</li><li>\u2705 <strong>&lt;2 second</strong> average processing time</li><li>\u2705 <strong>&lt;1%</strong> error rate</li><li>\u2705 <strong>&lt;100 jobs</strong> queue depth under normal load</li><li>\u2705 <strong>99.9%</strong> uptime</li><li>\u2705 <strong>Dashboard load time &lt; 3 seconds</strong></li></ul><h3 id="optimization-tips" tabindex="-1">Optimization Tips <a class="header-anchor" href="#optimization-tips" aria-hidden="true">#</a></h3><ol><li><p><strong>Database</strong></p><ul><li>Regularly run <code>VACUUM ANALYZE</code></li><li>Monitor slow queries</li><li>Create appropriate indexes</li></ul></li><li><p><strong>Redis</strong></p><ul><li>Monitor memory usage</li><li>Set TTL for keys</li><li>Use appropriate eviction policies</li></ul></li><li><p><strong>Node.js</strong></p><ul><li>Enable production mode</li><li>Monitor memory leaks</li><li>Use PM2 cluster mode</li></ul></li><li><p><strong>Network</strong></p><ul><li>Use HTTP/2</li><li>Enable gzip compression</li><li>Configure caching headers</li></ul></li><li><p><strong>Dashboard</strong></p><ul><li>Optimize bundle size</li><li>Enable browser caching</li><li>Use CDN for static assets</li></ul></li></ol><hr><h2 id="\u{1F510}-security-checklist" tabindex="-1">\u{1F510} Security Checklist <a class="header-anchor" href="#\u{1F510}-security-checklist" aria-hidden="true">#</a></h2><ul><li>[ ] Change default PostgreSQL password</li><li>[ ] Setup SSL certificates (HTTPS)</li><li>[ ] Configure firewall rules</li><li>[ ] Enable fail2ban for SSH</li><li>[ ] Use strong JWT secrets</li><li>[ ] Implement rate limiting</li><li>[ ] Restrict database access (localhost only)</li><li>[ ] Configure CORS properly</li><li>[ ] Enable security headers</li><li>[ ] Regular security updates</li><li>[ ] Daily database backups</li><li>[ ] Monitor logs for suspicious activity</li></ul><hr><h2 id="\u{1F4DD}-maintenance-schedule" tabindex="-1">\u{1F4DD} Maintenance Schedule <a class="header-anchor" href="#\u{1F4DD}-maintenance-schedule" aria-hidden="true">#</a></h2><h3 id="daily" tabindex="-1">Daily <a class="header-anchor" href="#daily" aria-hidden="true">#</a></h3><ul><li>Check application health</li><li>Monitor queue depth</li><li>Review error logs</li><li>Check disk space</li></ul><h3 id="weekly" tabindex="-1">Weekly <a class="header-anchor" href="#weekly" aria-hidden="true">#</a></h3><ul><li>Database vacuum and analyze</li><li>Review slow queries</li><li>Check system logs</li><li>Verify backups</li></ul><h3 id="monthly" tabindex="-1">Monthly <a class="header-anchor" href="#monthly" aria-hidden="true">#</a></h3><ul><li>Security updates</li><li>Performance review</li><li>Backup verification</li><li>Review system metrics</li><li>Update dependencies</li></ul><hr><h2 id="\u{1F198}-useful-commands" tabindex="-1">\u{1F198} Useful Commands <a class="header-anchor" href="#\u{1F198}-useful-commands" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#676E95;"># PM2 Management</span></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 status                    </span><span style="color:#676E95;"># View all processes</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs                      </span><span style="color:#676E95;"># View all logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs sf-middleware-prod   </span><span style="color:#676E95;"># View specific app logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart all               </span><span style="color:#676E95;"># Restart all processes</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit                     </span><span style="color:#676E95;"># Monitor resources</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop all                  </span><span style="color:#676E95;"># Stop all processes</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save                      </span><span style="color:#676E95;"># Save current process list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#676E95;"># Service Management</span></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status postgresql   </span><span style="color:#676E95;"># PostgreSQL status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status redis        </span><span style="color:#676E95;"># Redis status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx        </span><span style="color:#676E95;"># Nginx status</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart postgresql  </span><span style="color:#676E95;"># Restart PostgreSQL</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart redis       </span><span style="color:#676E95;"># Restart Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload nginx        </span><span style="color:#676E95;"># Reload Nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#676E95;"># Database Management</span></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#A6ACCD;">psql -U sfuser -d sfapi       </span><span style="color:#676E95;"># Connect to database</span></span>
<span class="line"><span style="color:#A6ACCD;">\\dt                           </span><span style="color:#676E95;"># List tables</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT </span><span style="color:#82AAFF;">version</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;"># Check PostgreSQL version</span></span>
<span class="line"><span style="color:#A6ACCD;">\\q                            </span><span style="color:#676E95;"># Exit psql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#676E95;"># Redis Management</span></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli                     </span><span style="color:#676E95;"># Connect to Redis</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO                          </span><span style="color:#676E95;"># View Redis info</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO memory                   </span><span style="color:#676E95;"># View memory info</span></span>
<span class="line"><span style="color:#A6ACCD;">MONITOR                       </span><span style="color:#676E95;"># Monitor commands</span></span>
<span class="line"><span style="color:#A6ACCD;">EXIT                          </span><span style="color:#676E95;"># Exit redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#676E95;"># View Logs</span></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /opt/sf-middleware/logs/prod-error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/lib/pgsql/15/data/log/postgresql-</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/redis/redis-server.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/nginx/access.log</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/nginx/error.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#676E95;"># System Monitoring</span></span>
<span class="line"><span style="color:#676E95;"># ===========================</span></span>
<span class="line"><span style="color:#A6ACCD;">htop                          </span><span style="color:#676E95;"># Process monitor</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h                         </span><span style="color:#676E95;"># Disk usage</span></span>
<span class="line"><span style="color:#A6ACCD;">free -h                       </span><span style="color:#676E95;"># Memory usage</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tulpn </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep :3000   </span><span style="color:#676E95;"># Check port usage</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="\u{1F4DA}-useful-files" tabindex="-1">\u{1F4DA} Useful Files <a class="header-anchor" href="#\u{1F4DA}-useful-files" aria-hidden="true">#</a></h2><h3 id="application-files" tabindex="-1">Application Files <a class="header-anchor" href="#application-files" aria-hidden="true">#</a></h3><ul><li><strong>sf-middleware logs</strong>: <code>/opt/sf-middleware/logs/</code></li><li><strong>sf-dashboard build</strong>: <code>/opt/sf-dashboard/dist/</code></li><li><strong>Dashboard public</strong>: <code>/home/USER/public_html/thesubdomain.mydomain.com/</code> (replace USER with your cPanel username)</li><li><strong>Environment files</strong>: <code>/opt/sf-middleware/.env</code></li></ul><h3 id="system-files" tabindex="-1">System Files <a class="header-anchor" href="#system-files" aria-hidden="true">#</a></h3><ul><li><strong>PostgreSQL logs</strong>: <code>/var/lib/pgsql/15/data/log/</code></li><li><strong>Redis logs</strong>: <code>/var/log/redis/</code></li><li><strong>Nginx logs</strong>: <code>/var/log/nginx/</code></li><li><strong>PM2 logs</strong>: <code>~/.pm2/logs/</code></li></ul><h3 id="configuration-files" tabindex="-1">Configuration Files <a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a></h3><ul><li><strong>Nginx config</strong>: <code>/etc/nginx/conf.d/sf-api.conf</code>, <code>/etc/nginx/conf.d/sf-dashboard.conf</code></li><li><strong>PostgreSQL config</strong>: <code>/var/lib/pgsql/15/data/postgresql.conf</code></li><li><strong>Redis config</strong>: <code>/etc/redis/redis.conf</code></li><li><strong>PM2 config</strong>: <code>/opt/sf-middleware/ecosystem.config.js</code></li></ul><hr><h2 id="\u{1F389}-deployment-complete" tabindex="-1">\u{1F389} Deployment Complete! <a class="header-anchor" href="#\u{1F389}-deployment-complete" aria-hidden="true">#</a></h2><p>Your <strong>sf-middleware</strong> and <strong>sf-dashboard</strong> are now running on cPanel/WHM!</p><h3 id="access-urls" tabindex="-1">Access URLs <a class="header-anchor" href="#access-urls" aria-hidden="true">#</a></h3><ul><li><strong>API Backend</strong>: <a href="https://api.thesubdomain.mydomain.com" target="_blank" rel="noreferrer">https://api.thesubdomain.mydomain.com</a></li><li><strong>Admin Dashboard</strong>: <a href="https://thesubdomain.mydomain.com" target="_blank" rel="noreferrer">https://thesubdomain.mydomain.com</a></li></ul><h3 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-hidden="true">#</a></h3><ol><li><p><strong>Initial Setup</strong></p><ul><li>Login to dashboard (create admin user if needed)</li><li>Configure environment settings</li><li>Create API keys</li><li>Test API endpoints</li></ul></li><li><p><strong>Production Hardening</strong></p><ul><li>Setup database backups</li><li>Configure monitoring alerts</li><li>Setup log rotation</li><li>Review security settings</li></ul></li><li><p><strong>Scaling</strong> (if needed)</p><ul><li>Add more worker instances</li><li>Scale PostgreSQL</li><li>Add Redis cluster</li><li>Configure load balancing</li></ul></li></ol><hr><h2 id="\u{1F4DE}-support" tabindex="-1">\u{1F4DE} Support <a class="header-anchor" href="#\u{1F4DE}-support" aria-hidden="true">#</a></h2><p>For issues and questions:</p><ol><li>Check troubleshooting section above</li><li>Review application logs</li><li>Verify environment variables</li><li>Test health endpoints</li><li>Check system resources</li></ol><p><strong>Last Updated:</strong> November 8, 2025</p><p>For additional information, refer to:</p><ul><li><a href="./MULTI_ENVIRONMENT_SETUP.html">Multi-Environment Setup</a></li><li><a href="./API_DOCUMENTATION.html">API Documentation</a></li><li><a href="./HIGH_VOLUME_SETUP.html">High Volume Setup</a></li></ul>`,157),o=[p];function t(c,r,i,y,d,C){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{D as __pageData,h as default};

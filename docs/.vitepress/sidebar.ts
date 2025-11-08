import { SidebarConfig } from 'vitepress'

export const sidebar: SidebarConfig = {
  '/backend/': [
    {
      text: 'Salesforce Middleware System',
      items: [
        { text: 'System Documentation', link: '/backend/README' },
        { text: 'Tech Stack', link: '/backend/TECH_STACK' },
        { text: 'Changelog', link: '/backend/CHANGELOG' },
      ]
    },
    {
      text: 'API Documentation',
      items: [
        { text: 'API Documentation', link: '/backend/API_DOCUMENTATION' },
        { text: 'UNICEF Salesforce API', link: '/backend/UNICEF_SALESFORCE_MIDDLEWARE_API_DOCUMENTATION' },
        { text: 'Admin Dashboard Specification', link: '/backend/ADMIN_DASHBOARD_SPECIFICATION' },
        { text: 'Custom Headers', link: '/backend/CUSTOM_HEADERS' },
      ]
    },
    {
      text: 'Environment Configuration',
      items: [
        { text: 'Environment Overview', link: '/backend/ENVIRONMENT_SUMMARY' },
        { text: 'Multi-Environment Setup', link: '/backend/MULTI_ENVIRONMENT_SETUP' },
        {
          text: 'Environment Guides',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/backend/environments/README' },
            { text: 'Development', link: '/backend/environments/development/README' },
            { text: 'Staging', link: '/backend/environments/staging/README' },
            { text: 'Production', link: '/backend/environments/production/README' },
          ]
        },
        { text: 'API Keys Configuration', link: '/backend/ENVIRONMENT_API_KEYS' },
        { text: 'High Volume Configuration', link: '/backend/HIGH_VOLUME_SETUP' },
      ]
    },
    {
      text: 'Deployment Guides',
      items: [
        { text: 'Clean VM Setup', link: '/backend/CLEAN_VM_SETUP' },
        { text: 'cPanel/WHM Setup (V2)', link: '/backend/CPANEL_WHM_SETUP_V2' },
        { text: 'cPanel/WHM Setup (Legacy)', link: '/backend/CPANEL_WHM_SETUP' },
        { text: 'cPanel User Management', link: '/backend/CPANEL_USER_SETUP' },
      ]
    },
    {
      text: 'Data & Persistence',
      items: [
        { text: 'Persistence Implementation', link: '/backend/PERSISTENCE_IMPLEMENTED' },
        { text: 'Test Persistence', link: '/backend/TEST_PERSISTENCE' },
      ]
    },
    {
      text: 'Cron Jobs & Queue Management',
      items: [
        { text: 'Cron Jobs Overview', link: '/backend/CRON_JOBS_COMPLETE_SUMMARY' },
        { text: 'Dashboard Integration', link: '/backend/CRON_JOBS_DASHBOARD_INTEGRATION' },
        { text: 'Dashboard Component', link: '/backend/CRON_JOB_DASHBOARD_COMPONENT' },
      ]
    },
    {
      text: 'Configuration & Security',
      items: [
        { text: 'Rate Limiting', link: '/backend/RATE_LIMIT_GUIDE' },
        { text: 'Resolved Warnings', link: '/backend/WARNINGS_FIXED' },
        { text: 'Warning Reference', link: '/backend/WARNING_EXPLANATION' },
      ]
    },
  ],
  '/frontend/': [
    {
      text: 'Salesforce Middleware Dashboard',
      items: [
        { text: 'Dashboard Documentation', link: '/frontend/README' },
        { text: 'Architecture', link: '/frontend/ARCHITECTURE' },
        { text: 'Changelog', link: '/frontend/CHANGELOG' },
      ]
    },
    {
      text: 'User Guides',
      items: [
        { text: 'User Guide', link: '/frontend/USER_GUIDE' },
        { text: 'Export Features', link: '/frontend/EXPORT_FEATURES' },
      ]
    },
    {
      text: 'Development',
      items: [
        { text: 'API Integration', link: '/frontend/API_INTEGRATION' },
        { text: 'Testing Strategy', link: '/frontend/TESTING_STRATEGY' },
        { text: 'Deployment Guide', link: '/frontend/ENVIRONMENT_DEPLOYMENT' },
      ]
    },
    {
      text: 'Operations & Security',
      items: [
        { text: 'Monitoring & Troubleshooting', link: '/frontend/MONITORING_TROUBLESHOOTING' },
        { text: 'Security Guide', link: '/frontend/SECURITY' },
        { text: 'Error Handling', link: '/frontend/SECURITY_ERROR_HANDLING' },
      ]
    },
  ],
}


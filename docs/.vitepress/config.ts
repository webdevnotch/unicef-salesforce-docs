import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { socialLinks } from './social-icons'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    // base: '/unicef-sf-documentation/',
    base: '/unicef-salesforce-docs/',
    title: 'SF Platform Documentation',
    description: 'Complete documentation for Salesforce Middleware System and Dashboard',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    appearance: true, // Enable dark mode toggle
    themeConfig: {
        siteTitle: 'SF Platform Documentation',
        sidebar,
        nav: [
            { text: 'Home', link: '/' },
            { 
                text: 'Salesforce Middleware System', 
                link: '/backend/README',
                activeMatch: '/backend/'
            },
            { 
                text: 'Salesforce Middleware Dashboard', 
                link: '/frontend/README',
                activeMatch: '/frontend/'
            },
        ],
        // Social links - Multiple GitHub repositories
        socialLinks,
        // Footer (optional)
        footer: {
            message: 'Salesforce Middleware Platform Documentation',
            copyright: 'Copyright © 2025'
        },
        // Search (optional - requires plugin)
        // search: {
        //     provider: 'local'
        // },
    },
})

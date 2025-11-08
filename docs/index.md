# SF Platform Master Documentation

Welcome to the central guide for the Salesforce Integration Platform. This document gives product owners, engineers, DevOps, and support staff a curated overview of every asset available in the `sf-dashboard` (frontend) and `sf-middleware` (backend) projects. Use it as your first stop for onboarding, day-to-day reference, and operational readiness.

## Audience & Purpose
- Product managers confirm feature coverage and compliance before releases.
- Frontend and backend engineers locate implementation details and integration contracts.
- DevOps and support teams coordinate deployments, observability, and incident response.
- Stakeholders validate that UNICEF requirements and security expectations are met.

## Quick Start Checklist
1. Read the **System Overview** for a high-level mental model.
2. Complete the environment setup steps that match your role.
3. Review the most relevant feature guides (links throughout this document).
4. Bookmark the monitoring and escalation runbooks before going on-call.

## System Overview
- **Platform goal:** Surface real-time Salesforce telemetry, scheduled job outcomes, queue activity, and user permissions through a unified analytics dashboard.
- **Core components:** React-based `sf-dashboard` frontend, NestJS-based `sf-middleware` backend, PostgreSQL persistence, Salesforce integrations, queue workers, and observability stack.
- **Data flow:** Salesforce events and middleware jobs flow into queues, are processed via workers, persisted, and surfaced through REST/GraphQL endpoints consumed by the dashboard (`./frontend/API_INTEGRATION.md`, `./backend/API_DOCUMENTATION.md`).
- **Architecture deep dive:** See `./frontend/ARCHITECTURE.md` for UI composition and routing, and `./backend/TECH_STACK.md` for service and infrastructure layout.

## Environments & Configuration
- **Deployment matrix:** `./frontend/ENVIRONMENT_DEPLOYMENT.md` and `./backend/ENVIRONMENT_SUMMARY.md` document staging, production, and high-volume topologies.
- **Environment keys & secrets:** Consult `./backend/ENVIRONMENT_API_KEYS.md`; keep Salesforce credentials and encryption keys in secure stores only.
- **High-volume setup:** For load testing and resilience scenarios reference `./backend/HIGH_VOLUME_SETUP.md`.
- **Multi-environment orchestration:** `./backend/MULTI_ENVIRONMENT_SETUP.md` covers traffic routing and cPanel guidance (`./backend/CPANEL_WHM_SETUP.md`, `./backend/CPANEL_WHM_SETUP_V2.md`, `./backend/CPANEL_USER_SETUP.md`).

## Frontend (sf-dashboard)
- **Project overview:** `./frontend/README.md` outlines scripts, dependencies, and core conventions.
- **User experience:** Start with `./frontend/USER_GUIDE.md` for dashboard navigation, API key management, and error drill-down.
- **Feature specifics:**
  - Exports: `./frontend/EXPORT_FEATURES.md`
  - Monitoring panels and troubleshooting advice: `./frontend/MONITORING_TROUBLESHOOTING.md`
  - Security expectations: `./frontend/SECURITY.md` and escalation paths in `./frontend/SECURITY_ERROR_HANDLING.md`
- **Development workflow:** See `./frontend/ARCHITECTURE.md` and `./frontend/TESTING_STRATEGY.md` for component structure, state management, and automated checks.
- **Change history:** `./frontend/CHANGELOG.md` tracks release highlights and regression fixes.

## Backend (sf-middleware)
- **Project overview:** `./backend/README.md` outlines the documentation structure and links to all backend guides.
- **Service overview:** `./backend/TECH_STACK.md` highlights NestJS modules, infrastructure choices, and shared libraries.
- **API contracts:** `./backend/API_DOCUMENTATION.md` (REST/GraphQL endpoints) and the UNICEF-specific specification `./backend/UNICEF_SALESFORCE_MIDDLEWARE_API_DOCUMENTATION.md`.
- **Persistence & data model:** Review `./backend/PERSISTENCE_IMPLEMENTED.md` and `./backend/TEST_PERSISTENCE.md` for schema coverage and testing strategy.
- **Cron & queue processing:** `./backend/CRON_JOBS_COMPLETE_SUMMARY.md`, `./backend/CRON_JOBS_DASHBOARD_INTEGRATION.md`, `./backend/CRON_JOB_DASHBOARD_COMPONENT.md`, plus queue internals in `CRON_JOBS` docs.
- **Configuration automation:** `./backend/CLEAN_VM_SETUP.md`, `./backend/CUSTOM_HEADERS.md`, and warning mitigations in `./backend/WARNINGS_FIXED.md`.
- **Rate limiting & headers:** `./backend/RATE_LIMIT_GUIDE.md` explains traffic protections and policies.
- **Change history:** `./backend/CHANGELOG.md` tracks backend documentation updates and release highlights.

## Operations & Monitoring
- **Dashboard visibility:** Follow `./frontend/MONITORING_TROUBLESHOOTING.md` for widgets, alerts, and error drill-down procedures.
- **Middleware observability:** Pair dashboard insights with backend log aggregation, metrics, and health endpoints described in `./backend/ENVIRONMENT_SUMMARY.md`.
- **Warning catalog:** `./backend/WARNING_EXPLANATION.md` enumerates known edge cases, symptom patterns, and mitigation steps.
- **Incident workflow:** Ensure runbooks from security and CRON sections are attached to your team’s alerting platform.

## Security & Compliance
- **Frontend hardening:** Review `./frontend/SECURITY.md` and `./frontend/SECURITY_ERROR_HANDLING.md` for auth guardrails and escalation protocols.
- **Backend protections:** Enforce API key hygiene per `./backend/ENVIRONMENT_API_KEYS.md` and custom header policies from `./backend/CUSTOM_HEADERS.md`.
- **Audit & permissions:** Backend audit trail coverage is documented in `./backend/ADMIN_DASHBOARD_SPECIFICATION.md`; align with frontend permission checks referenced in `./frontend/USER_GUIDE.md`.

## Testing, Releases & Change Management
- **Frontend pipeline:** `./frontend/TESTING_STRATEGY.md` details unit, integration, and end-to-end coverage, including manual verification steps.
- **Backend QA:** Follow database and persistence validation steps from `./backend/TEST_PERSISTENCE.md`.
- **Release notes:** Combine frontend `./frontend/CHANGELOG.md` and backend `./backend/CHANGELOG.md` with middleware cron and warning summaries to craft sprint announcements.
- **Regression watchlist:** Consult `./backend/WARNINGS_FIXED.md` for historically fragile areas that require targeted testing.

## Support & Troubleshooting Resources
- **Escalation channels:** Document owners are noted within the linked guides—reach out before modifying production policies.
- **Knowledge gaps:** If new scenarios arise, mirror the structure in `./frontend` or `./backend` directories and link them here to keep the master guide authoritative.
- **Feedback loop:** Capture all new operational insights in PRs that update both the master guide and supporting deep-dive documents.

## Appendix: Directory Reference
- `./frontend/` — All source documentation for the `sf-dashboard` React client.
- `./backend/` — Comprehensive middleware guides spanning infrastructure, APIs, and operations.
- Keep the directory names stable to preserve relative links in the wider organization’s knowledge bases.

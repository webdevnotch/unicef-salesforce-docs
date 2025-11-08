# Multi-Environment Setup

This directory contains environment-specific configurations for:
- **Development** - Local development environment
- **Staging** - Testing and integration environment  
- **Production** - Live production environment (high volume)
- **Production2** - Secondary production environment (if configured)

## Directory Structure

```
environments/
├── development/          # Local development
├── staging/             # Staging/sandbox environment
├── production/          # Production environment
├── production2/         # Secondary production environment
└── shared/              # Shared configurations
```

## Quick Start

### Development
```bash
cd environments/development
docker-compose up -d
```

### Staging
```bash
cd environments/staging
docker-compose up -d
# OR for cPanel/WHM
pm2 start ecosystem.config.js
```

### Production
```bash
cd environments/production
docker-compose up -d
# OR for cPanel/WHM
pm2 start ecosystem.config.js
```

### Production2
```bash
cd environments/production2
docker-compose up -d
# OR for cPanel/WHM
pm2 start ecosystem.config.js
```

## Environment URLs

- **Development**: `http://localhost:3000`
- **Staging**: https://staging-api.yourdomain.com
- **Production**: https://api.yourdomain.com
- **Production2**: https://api2.yourdomain.com (if configured)

## Documentation

- [Development Setup](development/README.md)
- [Staging Setup](staging/README.md)
- [Production Setup](production/README.md)
- [cPanel/WHM Setup V2](../CPANEL_WHM_SETUP_V2.md)
- [cPanel/WHM Setup](../CPANEL_WHM_SETUP.md)
- [Multi-Environment Setup](../MULTI_ENVIRONMENT_SETUP.md)

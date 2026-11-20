# Vercel Services Configuration

This document explains the `vercel.json` configuration for deploying InfiniTechnologies as a multi-service project.

## Configuration Overview

```json
{
  "services": {
    "main-site": { ... },
    "medical-shop-demo": { ... }
  },
  "rewrites": [ ... ]
}
```

## Service Details

### Service: `main-site`
```json
{
  "root": ".",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

**Purpose:** InfiniTechnologies marketing website  
**Technology:** Vite + React 19 + Tailwind CSS  
**Public Routes:** All routes EXCEPT `/demo/medical-shop/*`  
**Build Output:** Static files in `dist/`  

**Routes handled:**
- `/` - Homepage
- `/websites/` - Service page
- `/business-systems/` - Service page
- `/whatsapp-assistants/` - Service page
- `/privacy/` - Legal page
- `/terms/` - Legal page
- `/demos/faq-assistant.html` - Static demo
- `/demos/stock-tracker.html` - Static demo

### Service: `medical-shop-demo`
```json
{
  "root": "public/demos/medical-shop",
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

**Purpose:** MedTech Solutions e-commerce demo  
**Technology:** Next.js 16 + TypeScript + Supabase  
**Public Routes:** Only `/demo/medical-shop/*`  
**Build Output:** Next.js server in `.next/`  

**Routes handled:**
- `/demo/medical-shop/` - Homepage (redirects to /shop)
- `/demo/medical-shop/shop` - Product catalog
- `/demo/medical-shop/shop/[category]` - Category pages
- `/demo/medical-shop/product/[slug]` - Product details
- `/demo/medical-shop/cart` - Shopping cart
- `/demo/medical-shop/admin` - Admin dashboard
- `/demo/medical-shop/account` - User account
- And more...

## Rewrites Configuration

### Rewrite 1: Medical Shop Demo (Specific)
```json
{
  "source": "/demo/medical-shop/:path*",
  "destination": {
    "service": "medical-shop-demo",
    "path": "/:path*"
  }
}
```

**Effect:** Routes all `/demo/medical-shop/*` requests to the Next.js service  
**Path Transformation:** `/demo/medical-shop/shop` → `/shop` (in Next.js)  
**Priority:** First (most specific)

### Rewrite 2: Main Site (Catch-all)
```json
{
  "source": "/(.*)",
  "destination": {
    "service": "main-site"
  }
}
```

**Effect:** Routes everything else to the Vite/React site  
**Priority:** Last (catch-all)

## Inter-Service Communication

### ❌ No Bindings Required

This project does NOT require service bindings because:
- `main-site` doesn't call `medical-shop-demo`
- `medical-shop-demo` doesn't call `main-site`
- Only client-side navigation between them (browser redirects)

### Client-Side Linking

The main site links to the demo using relative paths:
```javascript
// In src/data/portfolio.js
link: '/demo/medical-shop'
```

This creates a standard HTML link that the browser navigates to. Vercel's routing handles directing it to the correct service.

## Why This Configuration?

### Path-Based Routing
- **SEO friendly:** Clean URLs without subdomains
- **Shared domain:** Both services under `infinitechnologies.co.ke`
- **No CORS:** Everything is same-origin
- **Simple DNS:** Only one domain to configure

### Independent Services
- **Separate codebases:** Each service has its own dependencies
- **Independent builds:** Failure in one doesn't break the other
- **Technology freedom:** Vite for main site, Next.js for demo
- **Scalable:** Easy to add more services (e.g., `/demo/stock-tracker-app`)

### Performance Benefits
- **Parallel builds:** Both services build simultaneously
- **Edge caching:** Static assets cached at edge locations
- **Smart routing:** Requests go directly to correct service

## How Requests Are Routed

### Example 1: Homepage Request
```
Browser: GET https://infinitechnologies.co.ke/
         ↓
Vercel:  Checks rewrites
         ↓
         Matches "/(.*)" → main-site service
         ↓
Response: Serves dist/index.html from main-site
```

### Example 2: Demo Shop Request
```
Browser: GET https://infinitechnologies.co.ke/demo/medical-shop/shop
         ↓
Vercel:  Checks rewrites
         ↓
         Matches "/demo/medical-shop/:path*" → medical-shop-demo service
         ↓
         Transforms path: /shop (removes /demo/medical-shop prefix)
         ↓
         Routes to medical-shop-demo service
         ↓
Response: Next.js renders shop page
```

### Example 3: User Navigation
```
User clicks portfolio link on main site
         ↓
Browser: Navigate to /demo/medical-shop
         ↓
Vercel:  Routes to medical-shop-demo service
         ↓
Next.js: Redirects to /demo/medical-shop/shop
         ↓
Response: Shop page displayed
```

## Local Development

### Using Vercel Dev (Recommended)
```bash
vercel dev
```
- Runs all services together
- Simulates production routing
- Injects environment variables
- Hot reload for both services

### Using Separate Terminals (Alternative)
```bash
# Terminal 1
npm run dev              # Main site on :5173

# Terminal 2
cd public/demos/medical-shop
npm run dev              # Demo on :3000
```
- Manually access each service on different ports
- No routing simulation
- Faster startup

## Adding a New Service

To add another demo (e.g., stock tracker app):

1. **Add to services:**
```json
"services": {
  "main-site": { ... },
  "medical-shop-demo": { ... },
  "stock-tracker-app": {
    "root": "public/demos/stock-tracker-app",
    "framework": "vite",
    "buildCommand": "npm run build",
    "installCommand": "npm install"
  }
}
```

2. **Add rewrite (before catch-all):**
```json
{
  "source": "/demo/stock-tracker/:path*",
  "destination": {
    "service": "stock-tracker-app",
    "path": "/:path*"
  }
}
```

3. **Update portfolio:**
```javascript
{
  id: 'stock-tracker',
  title: 'Stock Tracker',
  link: '/demo/stock-tracker',
  // ...
}
```

## Common Issues

### Issue: 404 on Demo Routes
**Cause:** Rewrites not applied or in wrong order  
**Fix:** Ensure demo rewrite comes BEFORE catch-all

### Issue: Assets Not Loading
**Cause:** Next.js needs base path configuration  
**Fix:** Next.js handles this automatically with path transformation

### Issue: Environment Variables Not Working
**Cause:** Variables not set in Vercel Dashboard  
**Fix:** Add variables in Project Settings → Environment Variables

### Issue: Build Fails
**Cause:** Missing dependencies in service's package.json  
**Fix:** Ensure each service has complete dependencies

## Best Practices

✅ **DO:**
- Keep each service's dependencies in its own package.json
- Use relative paths for inter-service navigation
- Set environment variables in Vercel Dashboard
- Test with `vercel dev` before deploying

❌ **DON'T:**
- Don't hardcode domains/ports in code
- Don't share node_modules between services
- Don't use absolute URLs between services
- Don't put secrets in code or .env files

## Monitoring

### Build Logs
View in Vercel Dashboard → Deployments → Build Logs

### Runtime Logs
View in Vercel Dashboard → Deployments → Functions

### Metrics
- Response times per service
- Error rates
- Cache hit rates
- Bandwidth usage

## References

- [Vercel Services Documentation](https://vercel.com/docs/services)
- [Vercel Rewrites](https://vercel.com/docs/projects/project-configuration#rewrites)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)

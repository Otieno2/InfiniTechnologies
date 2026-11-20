# Deployment Guide - InfiniTechnologies Multi-Service Project

This repository is configured to deploy as a **single Vercel project** with **multiple services**.

## Architecture

```
your-domain.com              → Main InfiniTechnologies site (Vite/React)
your-domain.com/demo/medical-shop → MedTech Solutions demo (Next.js)
```

## Services

### 1. **main-site** (Primary)
- **Framework:** Vite + React 19
- **Root:** Repository root
- **Purpose:** InfiniTechnologies marketing site
- **Build:** `npm run build` → `dist/`
- **Public:** All routes except `/demo/medical-shop/*`

### 2. **medical-shop-demo** (Internal, mounted at `/demo/medical-shop`)
- **Framework:** Next.js 16
- **Root:** `public/demos/medical-shop/`
- **Purpose:** E-commerce platform demonstration
- **Build:** `npm run build` → `.next/`
- **Public:** Only accessible via `/demo/medical-shop/*` path

## Pre-Deployment Checklist

### 1. Set up Supabase (Required for MedTech demo)
1. Create a Supabase project at https://supabase.com
2. Run migrations from `public/demos/medical-shop/supabase/migrations/` in SQL Editor (in order)
3. Run seed script: `cd public/demos/medical-shop && npm run seed`
4. Copy Supabase URL and anon key for environment variables

### 2. Prepare Environment Variables
See section below for required variables.

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Import Repository**
   - Go to https://vercel.com/new
   - Import `Otieno2/InfiniTechnologies` from GitHub
   - Vercel will auto-detect the `vercel.json` configuration

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add the variables listed below
   - Apply to **Production** environment

3. **Deploy**
   - Click "Deploy"
   - Vercel will build both services in parallel

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# When prompted, set environment variables or add them later in dashboard
```

## Environment Variables

### Main Site (`main-site` service)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_QUOTE_FORM_ENDPOINT` | Optional | Form submission endpoint | `https://formspree.io/f/xxx` |
| `VITE_EVA_API_URL` | Optional | EVA AI assistant API | `https://eva-proxy.workers.dev` |

### Medical Shop Demo (`medical-shop-demo` service)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | **Yes** | Supabase project URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Yes** | Supabase anonymous key | `eyJhbGc...` |
| `NEXT_PUBLIC_SITE_URL` | Auto | Base URL (auto-set by Vercel) | `https://your-domain.com/demo/medical-shop` |
| `NEXT_PUBLIC_CONTACT_PHONE` | Optional | Override default phone | `+254743179786` |
| `NEXT_PUBLIC_CONTACT_WHATSAPP` | Optional | Override default WhatsApp | `254743179786` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Override default email | `info@infinitechnologies.co.ke` |

**Note:** Set environment variables in **Vercel Dashboard** → Project Settings → Environment Variables. 
Apply to **Production** environment.

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `infinitechnologies.co.ke`)
   - Follow DNS setup instructions

2. **Update Environment Variables**
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain path
   - Example: `https://infinitechnologies.co.ke/demo/medical-shop`

3. **Redeploy**
   - Trigger a new deployment to apply changes

## Accessing Your Services

After deployment:

- **Main Site:** `https://your-domain.vercel.app/`
- **MedTech Demo:** `https://your-domain.vercel.app/demo/medical-shop`
- **Demo Shop:** `https://your-domain.vercel.app/demo/medical-shop/shop`
- **Demo Admin:** `https://your-domain.vercel.app/demo/medical-shop/admin`

## Testing Locally with Services

```bash
# Install dependencies for both services
npm install
cd public/demos/medical-shop && npm install && cd ../../..

# Run all services together (requires Vercel CLI)
vercel dev

# OR run separately in different terminals:

# Terminal 1: Main site
npm run dev

# Terminal 2: Medical shop demo
cd public/demos/medical-shop
npm run dev
```

## Post-Deployment Tasks

### 1. Create Demo Admin User
1. Visit `/demo/medical-shop/admin/login`
2. Click "Sign up" and create an account
3. In Supabase SQL Editor, run:
   ```sql
   UPDATE profiles SET role = 'admin' WHERE email = 'your@email.com';
   ```

### 2. Update Portfolio Link (if needed)
The portfolio on the main site now points to `/demo/medical-shop`, which will work after deployment.

### 3. Test All Features
- ✅ Main site loads correctly
- ✅ Portfolio link to demo works
- ✅ MedTech demo shows products
- ✅ Cart and WhatsApp ordering work
- ✅ Admin dashboard accessible
- ✅ Mobile responsive

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure both services' dependencies are listed in their respective `package.json`
- Verify Node.js version compatibility

### Medical Shop Demo Shows Errors
- Verify Supabase environment variables are set
- Check Supabase migrations ran successfully
- Ensure seed data was populated

### Routing Issues
- Verify `vercel.json` rewrites are correct
- Check that paths in code match the `/demo/medical-shop` prefix
- Clear Vercel cache and redeploy

### Environment Variables Not Working
- Ensure variables are set in **Vercel Dashboard**, not `.env` files
- Apply to correct environment (Production)
- Redeploy after adding/updating variables

## Monitoring & Maintenance

### View Logs
- Go to Vercel Dashboard → Deployments → Select deployment → Functions tab
- Monitor errors and performance

### Update Content
- Push changes to GitHub `main` branch
- Vercel auto-deploys on every push
- Or manually deploy via `vercel --prod`

### Database Maintenance
- Regular backups via Supabase dashboard
- Monitor database usage
- Clean up demo orders periodically (reset feature in admin)

## Support

For issues:
1. Check Vercel deployment logs
2. Review Supabase logs
3. Test locally with `vercel dev`
4. Check environment variable configuration

## Architecture Notes

- **No bindings required:** Services don't call each other
- **Shared domain:** Both services use the same domain with path-based routing
- **Independent builds:** Each service builds separately
- **No CORS issues:** Everything under same domain

## Future Enhancements

To add more demos:
1. Add new service in `vercel.json` under `services`
2. Add rewrite rule to route traffic to it
3. Update portfolio to link to new demo
4. Configure environment variables if needed

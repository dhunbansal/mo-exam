# Firebase Hosting Setup Guide

## Prerequisites

- Node.js installed
- Firebase account
- Firebase CLI installed globally

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

## Step 3: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter your project name (e.g., "online-kaksha")
4. Follow the setup wizard

## Step 4: Update Firebase Configuration

### Update `.firebaserc`

Replace `your-firebase-project-id` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "online-kaksha"
  }
}
```

### Update `.env.local` (create this file)

Copy `.env.example` to `.env.local` and fill in your Firebase credentials:

```bash
cp .env.example .env.local
```

Get your Firebase config from:

1. Firebase Console → Project Settings
2. Scroll down to "Your apps"
3. Click "Web app" or create one
4. Copy the config values

## Step 5: Build and Deploy

### Build the project

```bash
npm run build
```

### Deploy to Firebase

```bash
npm run deploy
```

Or deploy manually:

```bash
firebase deploy
```

## Step 6: Test Locally (Optional)

```bash
npm run firebase:serve
```

Visit `http://localhost:5000` to test your app locally.

## Project Structure

```
online/
├── .firebaserc          # Firebase project configuration
├── firebase.json        # Firebase hosting configuration
├── next.config.ts       # Next.js config (configured for static export)
├── out/                 # Build output (created after build)
└── public/              # Static assets
```

## Important Notes

1. **Static Export**: This project is configured for static export (`output: 'export'`)
2. **Images**: Image optimization is disabled (`unoptimized: true`) for static hosting
3. **Build Output**: The build creates an `out/` directory that Firebase will serve
4. **Cache Headers**: Configured for optimal caching of static assets

## Deployment Commands

| Command                  | Description                           |
| ------------------------ | ------------------------------------- |
| `npm run dev`            | Start development server              |
| `npm run build`          | Build for production                  |
| `npm run export`         | Same as build (creates static export) |
| `npm run deploy`         | Build and deploy to Firebase          |
| `npm run firebase:serve` | Test Firebase hosting locally         |

## Custom Domain (Optional)

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (15 minutes - 24 hours)

## Troubleshooting

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`

### Deployment Issues

- Check Firebase CLI version: `firebase --version`
- Re-login to Firebase: `firebase login --reauth`
- Verify project ID in `.firebaserc`

### 404 Errors

- Check `firebase.json` rewrites configuration
- Ensure `out/` directory exists after build

## Environment Variables

Add any environment variables to `.env.local` (not committed to git).
Prefix public variables with `NEXT_PUBLIC_` to expose them to the browser.

## Support

For issues, check:

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

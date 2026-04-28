# Quick Deployment to Firebase

## 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

## 2. Login

```bash
firebase login
```

## 3. Update Project ID

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID.

## 4. Deploy

```bash
npm run deploy
```

That's it! Your app will be live at: `https://your-project-id.web.app`

## Need Help?

See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions.

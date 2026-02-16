# Quick Setup Guide

## Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd trello-frontend
npm install
```

### Step 2: Configure Environment
Create a `.env` file in the root directory:
```
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser!

## What You'll See

1. **Login/Register Pages** - Beautiful authentication screens
2. **Dashboard** - View and create boards
3. **Board View** - Manage cards within each board

## Features Included

✅ User authentication (register/login)
✅ Create and view boards
✅ Add cards to boards
✅ Delete cards
✅ Responsive design (mobile, tablet, desktop)
✅ Modern UI with Cal.com color scheme
✅ Protected routes
✅ Loading states
✅ Empty states with CTAs

## Troubleshooting

**Port already in use?**
Edit `vite.config.js` and change the port:
```javascript
server: {
  port: 3001, // or any other port
}
```

**API not connecting?**
Make sure your backend is running and the `VITE_API_URL` in `.env` is correct.

**Styling issues?**
Run:
```bash
npm install -D tailwindcss postcss autoprefixer
```

## Next Steps

- Customize colors in `tailwind.config.js`
- Add more features (drag & drop, due dates, etc.)
- Deploy to Vercel, Netlify, or your preferred host

Happy coding! 🚀

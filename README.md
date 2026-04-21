# 🍹 Grace's Natural Juices — Website

A beautiful, professional single-page React website for Grace's Natural Juices in Yaoundé, Simbock.

---

## 🚀 How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm

### Steps

```bash
# 1. Go into the project folder
cd grace-juices

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site will open at **http://localhost:3000**

---

## 🏗️ How to Build for Production

```bash
npm run build
```

This creates a `build/` folder you can upload to any web host (Netlify, Vercel, GitHub Pages, etc.).

---

## 🖼️ How to Replace Photos

All photos are in `src/App.js`. Search for `REPLACE` comments and swap the `src` URLs with your real photos.

**3 places to update:**
1. **Hero section** — main hero image (line ~125 in App.js)
2. **Events section** — bulk/event juice image (line ~220 in App.js)

### Tip: Use local images
1. Put your photo in `src/assets/` (e.g., `src/assets/hero-juice.jpg`)
2. Import it at the top of App.js: `import heroImg from './assets/hero-juice.jpg';`
3. Replace the `src="..."` URL with `src={heroImg}`

---

## 📱 WhatsApp Number
The WhatsApp number `237674681144` is set at the top of `src/App.js`:
```js
const WHATSAPP_NUMBER = '237674681144';
```
Change it there if needed — all WhatsApp links update automatically.

---

## 🎨 Customising Colours & Fonts
Edit `src/index.css` — the `:root` section has all colour variables.

---

## 📦 Deploying to Netlify (Free)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → New site → Drag & drop the `build/` folder
3. Done! Your site is live.

---

Made with 💚 for Grace's Natural Juices, Yaoundé.

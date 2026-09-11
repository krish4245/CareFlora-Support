# Careflora — Support & Privacy Policy Web Portal

Official Support and Privacy Policy web portal for **Careflora: Plant Care, AR & Community** (iOS).

## 🚀 Two Instant Ways to Deploy to Netlify

### Option 1: Drag & Drop the `dist/` Folder (Full Framer Motion React App)
1. Run `npm run build` (or use the pre-built `dist/` folder).
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder.
4. Netlify will deploy it instantly! Because of `_redirects`, both:
   - `your-site.netlify.app/support`
   - `your-site.netlify.app/privacy-policy`
   will open the corresponding tab with fluid Framer Motion animations.

### Option 2: Drag & Drop the `careflora-site/` Folder (Static Pure HTML/CSS)
If you want a zero-dependency static folder with no build step:
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `careflora-site/` folder.
3. It has physical folders:
   - `careflora-site/support/index.html` -> resolves at `/support`
   - `careflora-site/privacy-policy/index.html` -> resolves at `/privacy-policy`

---

## 🌿 App Details & Tech Specs
- **App Name**: Careflora
- **Subtitle**: Plant Care, AR & Community
- **Target Platform**: Apple iPhone (UIKit/SwiftUI + RealityKit AR, requires LiDAR or A12+ Bionic)
- **Support Contact**: `leafora070511@gmail.com`
- **Security & Privacy**: End-to-End Encrypted chat (X25519 + AES-256-GCM), zero advertising trackers, local iOS sandbox caching.

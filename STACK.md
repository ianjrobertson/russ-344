# Technology Stack - The Veiled Archive

## Core Technologies
- **React 18** with **TypeScript** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework

## Key Libraries
- `react-zoom-pan-pinch` - Zoomable canvas with touch support
- `framer-motion` - Animation library for reveal transitions
- `react-use` - Utility hooks for responsive behavior

## Deployment
- **GitHub Pages** via GitHub Actions
- Automated deployment on push to main branch

## Development Tools
- ESLint + Prettier - Code quality
- TypeScript - Type safety
- Vite dev server - Fast HMR

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Asset Management
- Images: WebP with PNG fallback
- Optimization: vite-plugin-imagetools
- Structure: `/public/assets/` directory

## Project initialized with
```bash
npm create vite@latest . -- --template react-ts
npm install react-zoom-pan-pinch framer-motion react-use
npm install -D tailwindcss postcss autoprefixer vite-plugin-imagetools
npx tailwindcss init -p
```

## GitHub Pages Configuration
- Base path: `/russ-344/`
- Build output: `dist/`
- Deploy via GitHub Actions workflow

---

## Complete Dependencies

### Production Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-zoom-pan-pinch": "^3.4.0",
  "framer-motion": "^11.0.0",
  "react-use": "^17.5.0"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.3.0",
  "@types/react-dom": "^18.3.0",
  "@typescript-eslint/eslint-plugin": "^7.0.0",
  "@typescript-eslint/parser": "^7.0.0",
  "@vitejs/plugin-react": "^4.3.0",
  "autoprefixer": "^10.4.19",
  "eslint": "^8.57.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.6",
  "postcss": "^8.4.38",
  "prettier": "^3.2.5",
  "tailwindcss": "^3.4.3",
  "typescript": "^5.4.5",
  "vite": "^5.2.10",
  "vite-plugin-imagetools": "^7.0.0"
}
```

---

## Why This Stack?

### Vite over Create React App
- 10-100x faster dev server startup
- Instant hot module replacement
- Optimized production builds
- Simple GitHub Pages deployment
- Better TypeScript support out of the box

### Tailwind CSS
- Rapid prototyping for artistic layouts
- Mobile-first responsive utilities
- Small production bundle (only used classes)
- Easy dark theme implementation (matches "Wall of Silence" aesthetic)

### Framer Motion
- Professional-grade animations
- Click-to-toggle transitions feel smooth and intentional
- Layout animations for responsive design
- Gesture support (drag, tap, hover)

### react-zoom-pan-pinch
- Best-in-class zoom/pan library for React
- Native touch gesture support
- Configurable boundaries and limits
- Active maintenance and TypeScript support

### react-use
- Battle-tested hooks library
- `useMedia` for responsive breakpoints
- `useKey` for keyboard shortcuts
- Lightweight and tree-shakeable

---

## Architecture Highlights

### Click-to-Toggle Reveal Pattern
```typescript
const [isRevealed, setIsRevealed] = useState(false);

<div onClick={() => setIsRevealed(!isRevealed)}>
  <AnimatePresence mode="wait">
    <motion.img
      key={isRevealed ? 'revealed' : 'censored'}
      src={isRevealed ? uncensoredSrc : censoredSrc}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    />
  </AnimatePresence>
</div>
```

### Mobile-First Responsive Design
- Touch targets: minimum 44x44px
- Instructions adapt: "Tap" vs "Click"
- Zoom limits prevent over-zooming on mobile
- Optimized images for mobile bandwidth

### Performance Strategy
- Lazy load images outside viewport
- Code splitting by route
- Manual chunks for vendor libraries
- WebP with PNG fallback
- Asset optimization during build

---

## Next Steps

1. Run `npm create vite@latest . -- --template react-ts`
2. Install dependencies
3. Configure Tailwind CSS
4. Set up GitHub Actions workflow
5. Begin component implementation

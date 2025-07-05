# Cloudflare Fullstack Template (RVHS)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/claudio-silva/cloudflare-fullstack-template-rvhs)

This template provides a complete fullstack setup for building modern React applications with TypeScript, Vite, Hono backend, Cloudflare Workers, and shadcn/ui components. It features hot module replacement, ESLint integration, Tailwind CSS styling, and the flexibility of Workers deployments.

![React + TypeScript + Vite + Hono + Cloudflare Workers + shadcn/ui](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/fc7b4b62-442b-4769-641b-ad4422d74300/public)

<!-- dash-content-start -->

🚀 Supercharge your web development with this powerful stack:

- [**React**](https://react.dev/) - A modern UI library for building interactive interfaces
- [**Vite**](https://vite.dev/) - Lightning-fast build tooling and development server
- [**Hono**](https://hono.dev/) - Ultralight, modern backend framework
- [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) - Edge computing platform for global deployment
- [**shadcn/ui**](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI and Tailwind CSS
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development

### ✨ Key Features

- 🔥 Hot Module Replacement (HMR) for rapid development
- 📦 TypeScript support out of the box
- 🛠️ ESLint configuration included
- ⚡ Zero-config deployment to Cloudflare's global network
- 🎯 API routes with Hono's elegant routing
- 🔄 Full-stack development setup
- 🎨 Pre-configured shadcn/ui components with default theme
- 🌈 Tailwind CSS v3.x for styling
- 🌓 Dark/light theme support
- 📱 Responsive design ready

Get started in minutes with local development or deploy directly via the Cloudflare dashboard. Perfect for building modern, performant web applications at the edge with beautiful UI components.

<!-- dash-content-end -->

## Getting Started

### Clone this template

```bash
git clone https://github.com/claudio-silva/cloudflare-fullstack-template-rvhs.git your-project-name
cd your-project-name
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## What's Included

### Frontend Stack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v3.x** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible components

### Backend Stack
- **Hono** - Lightweight web framework
- **Cloudflare Workers** - Edge runtime environment

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Wrangler** - Cloudflare Workers CLI

### UI Components
- Most official shadcn/ui components are already preinstalled in this template. You can use them directly from `@/components/ui/`.
- To add new or updated components as they become available, use:

```bash
npx shadcn-ui@latest add [component-name]
```

Available components include: accordion, alert, avatar, badge, button, card, checkbox, dialog, dropdown-menu, form, input, label, popover, select, sheet, table, tabs, toast, tooltip, and many more.

### Path Aliases

- Use `@/components/ui/` to import any shadcn/ui component (e.g., `import { Button } from "@/components/ui/button"`)
- Use `@/lib/` to import utility helpers (e.g., `import { cn } from "@/lib/utils"`)

### shadcn/ui Theme & Customization

- The template comes with the official shadcn/ui theme, supporting light and dark mode out of the box.
- Theme colors and radii are easily customizable via CSS variables in `src/react-app/index.css`.

### Utilities

- Common utility helpers (like `cn` for class merging) are available in `src/react-app/lib/utils.ts`.

## Project Structure

```
├── src/
│   ├── react-app/          # React application
│   │   ├── components/     # React components
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── lib/           # Utility functions
│   │   ├── assets/        # Static assets
│   │   └── ...
│   └── worker/            # Cloudflare Worker (API)
├── public/                # Public assets
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── wrangler.json         # Cloudflare Workers configuration
```

## Development

### Adding New Components

To add a new shadcn/ui component:

```bash
npx shadcn-ui@latest add [component-name]
```

### API Development

Edit `src/worker/index.ts` to add new API endpoints:

```typescript
app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})
```

### Styling

This template uses Tailwind CSS for styling. You can:
- Use utility classes directly in your components
- Customize the theme in `tailwind.config.js`
- Add custom CSS in `src/react-app/index.css`

## Production

### Build for production

```bash
npm run build
```

### Test the built app locally

After building, you can preview the production build locally with:

```bash
npm run preview
```

This will start a local server (by default at [http://localhost:4173](http://localhost:4173)) serving the built app as it would appear in production.

### Deploy to Cloudflare Workers

```bash
npm run deploy
```

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Hono Documentation](https://hono.dev/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This template is open source and available under the [MIT License](LICENSE).  
It was based on the [Cloudflare Fullstack Template](https://github.com/cloudflare/templates/tree/main/vite-react-template)

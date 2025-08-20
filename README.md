# Cloudflare Fullstack Template (RVHS)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/claudio-silva/cloudflare-fullstack-template-rvhs)

This template provides a complete fullstack setup for building modern React applications with TypeScript, Vite, Hono backend, Cloudflare Workers, and shadcn/ui components. It features hot module replacement, ESLint integration, Tailwind CSS styling, and the flexibility of Workers deployments.

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

| Component Name | Description |
|----------------|-------------|
| Accordion | A vertically stacked set of interactive headings that each reveal a section of content. |
| Alert Dialog | A modal dialog for displaying important messages or confirmations to the user. |
| Alert | Displays important messages or notifications to the user. |
| Aspect Ratio | Maintains a consistent width-to-height ratio for responsive design elements. |
| Avatar | Represents a user or entity with an image or initials. |
| Badge | Small count or status indicators for UI elements. |
| Breadcrumb | Navigational aid that displays the user's current location within a hierarchy. |
| Button | Clickable element used to trigger actions. |
| Calendar | Displays a calendar interface for date selection. |
| Card | A flexible and extensible content container. |
| Carousel | A slideshow component for cycling through elements. |
| Chart | Visual representation of data using various chart types. |
| Checkbox | Allows the user to select one or more options from a set. |
| Collapsible | A component that can expand or collapse to show or hide content. |
| Command | Provides a command-line interface experience within the UI. |
| Context Menu | A menu that appears upon user interaction, offering contextual actions. |
| Dialog | A modal window that overlays the main content to capture user attention. |
| Drawer | Sliding panel that enters from the side of the screen to display additional content. |
| Dropdown Menu | Toggleable menu that allows users to choose from a list of options. |
| Form | Collection of input fields and controls for user data entry. |
| Hover Card | Displays additional information when a user hovers over an element. |
| Input OTP | Specialized input for one-time password (OTP) entry. |
| Input | Field for user text input. |
| Label | Text label associated with a form control. |
| Menubar | Horizontal menu for navigating application sections. |
| Navigation Menu | Component for primary site navigation. |
| Pagination | Controls for navigating through paginated content. |
| Popover | Small overlay that provides additional information or actions. |
| Progress | Visual indicator of task completion status. |
| Radio Group | Set of options where only one can be selected at a time. |
| Resizable | Allows elements to be resized by the user. |
| Scroll-area | Container that enables custom scroll behavior. |
| Select | Dropdown list for selecting options. |
| Separator | Visual divider between content sections. |
| Sheet | Overlay panel that slides in from the side or bottom. |
| Sidebar | Vertical navigation component typically placed on the side of the screen. |
| Skeleton | Placeholder component used while content is loading. |
| Slider | Allows users to select a value from a range by moving a handle. |
| Sonner | Component for displaying toast notifications. |
| Switch | Toggle between two states, such as on and off. |
| Table | Displays data in rows and columns. |
| Tabs | Allows users to switch between different views or sections. |
| Textarea | Multi-line text input field. |
| Toggle Group | Group of toggle buttons that function as a single selection. |
| Toggle | Button that switches between two states. |
| Tooltip | Small pop-up box that provides additional information about an element. |

### Path Aliases

- Use `@/components/ui/` to import any shadcn/ui component (e.g., `import { Button } from '@/components/ui/button'`)
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

(c) 2025 Claudio Silva
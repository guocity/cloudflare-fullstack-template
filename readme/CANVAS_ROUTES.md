# Canvas Route Generation Script

This script automatically generates and updates the canvas routes in your React application.

## Overview

The `generate-canvas-routes.js` script scans the `src/react-app/canvas` directory for all canvas page components and automatically:

1. Generates import statements for each canvas page
2. Creates route definitions in `App.tsx`
3. Updates `canvas_index.tsx` with all available canvas pages

## Usage

### Automatic (Recommended)

Run the npm script:

```bash
npm run generate-canvas
```

### Manual

You can also run the script directly:

```bash
node scripts/generate-canvas-routes.js
```

## How It Works

1. **Discovery**: The script scans `src/react-app/canvas` for all `.tsx` files (excluding `index.tsx`)
2. **Import Generation**: Creates import statements for each discovered component
3. **Route Generation**: Generates route definitions based on file names
4. **File Updates**: Updates `App.tsx` and `canvas_index.tsx` with the generated content

## Adding New Canvas Pages

To add a new canvas page:

1. Create a new `.tsx` file in `src/react-app/canvas/` directory
   ```
   src/react-app/canvas/MyNewPage.tsx
   ```

2. Run the generation script:
   ```bash
   npm run generate-canvas
   ```

3. The script will:
   - Add an import statement to `App.tsx`
   - Add a route definition to `App.tsx`
   - Add the page to `canvas_index.tsx` listing

## Example

If you have these files in `src/react-app/canvas/`:
- `postman.tsx`
- `Page2.tsx`
- `Page3.tsx`
- `MyNewPage.tsx` (newly added)

The script will generate:

### App.tsx (imports and routes section)
```tsx
import CanvasPagepostman from "./canvas/postman";
import CanvasPagePage2 from "./canvas/Page2";
import CanvasPagePage3 from "./canvas/Page3";
import CanvasPageMyNewPage from "./canvas/MyNewPage";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/canvas" element={<CanvasIndex />} />
  <Route path="/canvas/postman" element={<CanvasPagepostman />} />
  <Route path="/canvas/page2" element={<CanvasPagePage2 />} />
  <Route path="/canvas/page3" element={<CanvasPagePage3 />} />
  <Route path="/canvas/mynewpage" element={<CanvasPageMyNewPage />} />
</Routes>
```

### canvas_index.tsx
The script will also update the canvas pages list with proper formatting and links.

## File Structure

```
src/react-app/
├── App.tsx                 (auto-updated with routes)
├── Home.tsx               (showcases UI components)
├── canvas_index.tsx       (auto-updated with page listings)
├── canvas/
│   ├── postman.tsx
│   ├── Page2.tsx
│   ├── Page3.tsx
│   └── (new pages go here)
└── components/
    └── ui/
        └── (shadcn/ui components)
```

## Notes

- The script is idempotent - running it multiple times produces the same result
- File names are automatically converted to component names and URL paths
- Routes are sorted alphabetically for consistency
- The script preserves existing code structure and only updates route-related sections

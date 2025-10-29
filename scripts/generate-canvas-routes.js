#!/usr/bin/env node

/**
 * Auto-update App.tsx to include all canvas pages
 * This script scans the canvas folder for all .tsx files (except index.tsx)
 * and automatically generates import statements and routes for App.tsx
 * 
 * Usage: node scripts/generate-canvas-routes.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CANVAS_DIR = path.join(__dirname, '../src/react-app/canvas');
const APP_TSX_PATH = path.join(__dirname, '../src/react-app/App.tsx');
const CANVAS_INDEX_PATH = path.join(__dirname, '../src/react-app/canvas_index.tsx');

/**
 * Get all canvas page files from the canvas directory
 * Filters out non-tsx files and index.tsx
 */
function getCanvasPages() {
  try {
    const files = fs.readdirSync(CANVAS_DIR);
    const canvasPages = files
      .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
      .map(file => {
        const nameWithoutExt = file.replace('.tsx', '');
        
        // Create a consistent component name (CamelCase)
        // Handle special cases and ensure proper capitalization
        let componentName = nameWithoutExt;
        if (nameWithoutExt.toLowerCase() === 'postman') {
          componentName = 'Postman';
        } else if (/^page\d+$/i.test(nameWithoutExt)) {
          // Handle page2, page3, etc.
          componentName = nameWithoutExt.charAt(0).toUpperCase() + nameWithoutExt.slice(1);
        } else {
          // General CamelCase conversion
          componentName = nameWithoutExt
            .split(/[-_]/)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
        }
        
        const fullComponentName = `CanvasPage${componentName}`;
        
        // Create consistent route path (lowercase)
        const route = `/canvas/${nameWithoutExt.toLowerCase()}`;
        
        return {
          filename: file,
          name: nameWithoutExt,
          componentName: fullComponentName,
          route: route
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return canvasPages;
  } catch (error) {
    console.error('Error reading canvas directory:', error);
    return [];
  }
}

/**
 * Generate import statements for all canvas pages
 */
function generateImports(canvasPages) {
  const homeImport = 'import Home from "./Home";';
  const canvasIndexImport = 'import CanvasIndex from "./canvas_index";';
  
  const pageImports = canvasPages.map(page => {
    return `import ${page.componentName} from "./canvas/${page.name}";`;
  }).join('\n');

  return `${homeImport}\n${canvasIndexImport}\n${pageImports}`;
}

/**
 * Generate route definitions for all canvas pages
 */
function generateRoutes(canvasPages) {
  const baseRoutes = `        <Route path="/" element={<Home />} />
        <Route path="/canvas" element={<CanvasIndex />} />`;

  const pageRoutes = canvasPages.map(page => {
    return `        <Route path="${page.route}" element={<${page.componentName} />} />`;
  }).join('\n');

  return `${baseRoutes}\n${pageRoutes}`;
}

/**
 * Update canvas_index.tsx with all canvas pages
 */
function updateCanvasIndex(canvasPages) {
  const pagesArrayContent = canvasPages.map(page => {
    // Format the title from the filename
    const title = page.name
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
      .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
      .trim();
    
    // Add custom descriptions for known pages
    let description = '';
    if (page.name.toLowerCase() === 'postman') {
      description = 'Postman Popular APIs - Browse and explore popular APIs from Postman';
    } else if (page.name.toLowerCase() === 'page2') {
      description = 'Text Input Demo - Interactive text input canvas application';
    } else if (page.name.toLowerCase() === 'page3') {
      description = 'List Manager - Manage and organize items in a list format';
    } else {
      description = `${title} - Canvas application`;
    }

    return `  {
    id: "${page.name}",
    title: "${title}",
    description: "${description}",
    path: "${page.route}"
  }`;
  }).join(',\n');

  const canvasIndexContent = `import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// List of all canvas pages
const canvasPages = [
${pagesArrayContent}
];

export default function CanvasIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Gemini Canvas Pages</h1>
          <p className="text-lg text-muted-foreground">
            Select a canvas page to explore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {canvasPages.map((page) => (
            <Card key={page.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{page.title}</CardTitle>
                <CardDescription>{page.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={page.path}>
                  <Button className="w-full">Open Canvas</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
`;

  try {
    fs.writeFileSync(CANVAS_INDEX_PATH, canvasIndexContent);
    console.log('✓ Updated canvas_index.tsx');
  } catch (error) {
    console.error('Error updating canvas_index.tsx:', error);
  }
}

/**
 * Update App.tsx with new imports and routes
 */
function updateAppTsx(canvasPages) {
  try {
    let appContent = fs.readFileSync(APP_TSX_PATH, 'utf-8');

    // Generate new imports and routes
    const newImports = generateImports(canvasPages);
    const newRoutes = generateRoutes(canvasPages);

    // Find and replace imports section - match all CanvasPage imports
    const importsRegex = /import\s+Home\s+from\s+"\.\/Home";\nimport\s+CanvasIndex\s+from\s+"\.\/canvas_index";\n(import\s+CanvasPage\w+\s+from\s+"\.\/canvas\/[^"]+";?\n)*/;
    appContent = appContent.replace(importsRegex, newImports + '\n');

    // Also try the old pattern for backwards compatibility
    appContent = appContent.replace(
      /import\s+CanvasIndex\s+from\s+"\.\/canvas\/index";/,
      'import CanvasIndex from "./canvas_index";'
    );

    // Find and replace routes section
    const routesRegex = /<Routes>[\s\S]*?<\/Routes>/;
    const newRoutesContent = `<Routes>
${newRoutes}
      </Routes>`;
    appContent = appContent.replace(routesRegex, newRoutesContent);

    fs.writeFileSync(APP_TSX_PATH, appContent);
    console.log('✓ Updated App.tsx with canvas routes');
  } catch (error) {
    console.error('Error updating App.tsx:', error);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔄 Generating canvas routes...\n');

  const canvasPages = getCanvasPages();

  if (canvasPages.length === 0) {
    console.log('⚠️  No canvas pages found in', CANVAS_DIR);
    return;
  }

  console.log(`Found ${canvasPages.length} canvas page(s):`);
  canvasPages.forEach(page => {
    console.log(`  - ${page.name} → ${page.route}`);
  });
  console.log();

  // Update both App.tsx and canvas_index.tsx
  updateAppTsx(canvasPages);
  updateCanvasIndex(canvasPages);

  console.log('\n✅ Canvas routes generated successfully!');
}

// Run the script
main();

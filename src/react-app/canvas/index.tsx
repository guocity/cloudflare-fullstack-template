import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// List of all canvas pages
const canvasPages = [
  {
    id: "page1",
    title: "Canvas Page 1",
    description: "First Gemini canvas page",
    path: "/canvas/page1"
  },
  {
    id: "page2",
    title: "Canvas Page 2",
    description: "Second Gemini canvas page",
    path: "/canvas/page2"
  },
  {
    id: "page3",
    title: "Canvas Page 3",
    description: "Third Gemini canvas page",
    path: "/canvas/page3"
  }
];

export default function CanvasIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Gemini Canvas Pages</h1>
          <p className="text-lg text-muted-foreground">
            Select a canvas page to view
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {canvasPages.map((page) => (
            <Card key={page.id} className="hover:shadow-lg transition-shadow">
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

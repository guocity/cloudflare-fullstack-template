import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// List of all canvas pages
const canvasPages = [
  {
    id: "sample1",
    title: "Sample1",
    description: "Sample1 - Canvas application",
    path: "/canvas/sample1"
  },
  {
    id: "sample2",
    title: "Sample2",
    description: "Sample2 - Canvas application",
    path: "/canvas/sample2"
  }
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

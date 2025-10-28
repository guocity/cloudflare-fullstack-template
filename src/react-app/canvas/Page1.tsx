import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CanvasPage1() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/canvas">
            <Button variant="outline">← Back to Canvas Index</Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Canvas Page 1</h1>
          <p className="text-lg text-muted-foreground">
            A single page application with interactive canvas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
              <CardDescription>
                This is an example interactive component on Canvas Page 1
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="text-6xl font-bold">{count}</div>
              <div className="flex gap-4">
                <Button onClick={() => setCount(count - 1)} variant="outline">
                  Decrement
                </Button>
                <Button onClick={() => setCount(0)} variant="secondary">
                  Reset
                </Button>
                <Button onClick={() => setCount(count + 1)}>
                  Increment
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Canvas Area</CardTitle>
              <CardDescription>
                Placeholder for Gemini canvas content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center min-h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">
                  Your Gemini canvas content goes here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

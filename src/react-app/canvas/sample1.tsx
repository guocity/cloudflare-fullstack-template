import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CanvasPage2() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/canvas">
            <Button variant="outline">← Back to Canvas Index</Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Canvas Page 2</h1>
          <p className="text-lg text-muted-foreground">
            A single page application with text input canvas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Text Input Demo</CardTitle>
              <CardDescription>
                This is an example text input component on Canvas Page 2
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {text && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">You typed:</p>
                  <p className="mt-2">{text}</p>
                </div>
              )}
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CanvasPage3() {
  const [items, setItems] = useState<string[]>([]);
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    setItems([...items, `Item ${nextId}`]);
    setNextId(nextId + 1);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/canvas">
            <Button variant="outline">← Back to Canvas Index</Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Canvas Page 3</h1>
          <p className="text-lg text-muted-foreground">
            A single page application with list management canvas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>List Manager</CardTitle>
              <CardDescription>
                This is an example list management component on Canvas Page 3
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={addItem}>Add Item</Button>
              <div className="space-y-2">
                {items.length === 0 ? (
                  <p className="text-muted-foreground">No items yet. Click "Add Item" to get started.</p>
                ) : (
                  items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <Badge>{item}</Badge>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                )}
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

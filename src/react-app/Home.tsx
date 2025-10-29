// src/react-app/Home.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Info } from "lucide-react";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");
  const [textInput, setTextInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(50);
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectValue, setSelectValue] = useState("react");
  const [progress, setProgress] = useState(65);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all animate-spin" alt="React logo" />
          </a>
          <a href="https://hono.dev/" target="_blank" rel="noopener noreferrer">
            <img src={honoLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all" alt="Hono logo" />
          </a>
          <a href="https://workers.cloudflare.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={cloudflareLogo}
              className="logo cloudflare"
              alt="Cloudflare logo"
            />
          </a>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Cloudflare Fullstack Template
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="default">React 19</Badge>
            <Badge variant="secondary">Vite</Badge>
            <Badge variant="outline">Hono</Badge>
            <Badge variant="secondary">Cloudflare</Badge>
            <Badge variant="default">shadcn/ui</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A modern fullstack template with React, Vite, Hono, and shadcn/ui components
          </p>
        </div>

        {/* Featured Demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Counter Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Counter Demo</CardTitle>
              <CardDescription>
                React state management example
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Button
                onClick={() => setCount((count) => count + 1)}
                aria-label="increment"
                size="lg"
              >
                count is {count}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Click to increment the counter
              </p>
            </CardContent>
          </Card>
          
          {/* API Demo */}
          <Card>
            <CardHeader>
              <CardTitle>API Demo</CardTitle>
              <CardDescription>
                Hono backend on Cloudflare Workers
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Button
                onClick={() => {
                  fetch("/api/")
                    .then((res) => res.json() as Promise<{ name: string }>)
                    .then((data) => setName(data.name));
                }}
                aria-label="get name"
                variant="secondary"
                size="lg"
              >
                Name: {name}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Fetch data from API
              </p>
            </CardContent>
          </Card>

          {/* Canvas Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Gemini Canvas</CardTitle>
              <CardDescription>
                Explore canvas pages
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Link to="/canvas" className="w-full">
                <Button className="w-full" size="lg">
                  Open Canvas Pages
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground text-center">
                View all available canvas applications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* UI Components Showcase */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">UI Components Showcase</h2>
          
          <Tabs defaultValue="forms" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="interactive">Interactive</TabsTrigger>
            </TabsList>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Input Components</CardTitle>
                  <CardDescription>Text inputs, selects, and textareas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="text-input">Text Input</Label>
                    <Input
                      id="text-input"
                      placeholder="Enter text..."
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="select">Select Component</Label>
                    <Select value={selectValue} onValueChange={setSelectValue}>
                      <SelectTrigger id="select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="textarea">Textarea</Label>
                    <Textarea
                      id="textarea"
                      placeholder="Enter multiple lines..."
                      className="resize-none"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>Checkboxes, radios, switches, and sliders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="checkbox" 
                      checked={isChecked} 
                      onCheckedChange={(checked) => setIsChecked(checked === true)} 
                    />
                    <Label htmlFor="checkbox" className="font-normal cursor-pointer">
                      Accept terms and conditions
                    </Label>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Radio Group</Label>
                    <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option1" id="option1" />
                        <Label htmlFor="option1" className="font-normal cursor-pointer">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option2" id="option2" />
                        <Label htmlFor="option2" className="font-normal cursor-pointer">Option 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option3" id="option3" />
                        <Label htmlFor="option3" className="font-normal cursor-pointer">Option 3</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <Label htmlFor="switch" className="font-normal">
                      Enable notifications
                    </Label>
                    <Switch id="switch" checked={isEnabled} onCheckedChange={setIsEnabled} />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="slider">Slider (Value: {sliderValue})</Label>
                    <Slider
                      id="slider"
                      min={0}
                      max={100}
                      step={1}
                      value={[sliderValue]}
                      onValueChange={(value) => setSliderValue(value[0])}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                  <CardDescription>Different alert types and styles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Info Alert</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message. Use it for general information.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error Alert</AlertTitle>
                    <AlertDescription>
                      This is an error alert. Use it for important warnings and errors.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>Progress bar component</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Progress: {progress}%</Label>
                    <Progress value={progress} className="w-full" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                      Decrease
                    </Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                      Increase
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Layout Tab */}
            <TabsContent value="layout" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>Expandable content sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Component 1: Button</AccordionTrigger>
                      <AccordionContent>
                        A versatile button component with multiple variants, sizes, and states.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Component 2: Card</AccordionTrigger>
                      <AccordionContent>
                        A layout container component for grouping related content.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Component 3: Badge</AccordionTrigger>
                      <AccordionContent>
                        A small label component for categorizing or highlighting content.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                  <CardDescription>Visual divider between content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Content above separator</p>
                  <Separator />
                  <p>Content below separator</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Interactive Tab */}
            <TabsContent value="interactive" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tooltip</CardTitle>
                  <CardDescription>Hover over elements to see tooltips</CardDescription>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip message</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popover</CardTitle>
                  <CardDescription>Click to open a popover</CardDescription>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button>Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Popover Content</h4>
                        <p className="text-sm text-muted-foreground">
                          This is a popover with custom content and styling.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Button Variants */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>All available button styles and sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Click on the logos to learn more about each technology</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

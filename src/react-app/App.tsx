// src/App.tsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { toast } from "sonner";
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts";
import { Toaster } from "@/components/ui/sonner";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [progress, setProgress] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date());
  const [otpValue, setOtpValue] = useState("");
  const [togglePressed, setTogglePressed] = useState(false);
  const [toggleGroupValue, setToggleGroupValue] = useState("left");

  const form = useForm({
    resolver: zodResolver(zod.object({
      email: zod.string().email(),
      password: zod.string().min(6),
    })),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">shadcn/ui Components Showcase</h1>
        <Tabs defaultValue="layout" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="data">Data Display</TabsTrigger>
            <TabsTrigger value="overlay">Overlay</TabsTrigger>
          </TabsList>
          <TabsContent value="layout">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Aspect Ratio</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
                    <div className="text-muted-foreground">16:9</div>
                  </AspectRatio>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is a card content.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Collapsible</CardTitle>
                </CardHeader>
                <CardContent>
                  <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline">Toggle Collapsible</Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      This content is collapsible.
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resizable</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Panel 1</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Panel 2</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scroll Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="text-sm">Item {i + 1}</div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>Above separator</div>
                    <Separator />
                    <div>Below separator</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Skeleton</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">Content for Tab 1</TabsContent>
                    <TabsContent value="tab2">Content for Tab 2</TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="forms">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Button</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={calendarDate}
                    onSelect={setCalendarDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Checkbox</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="checkbox"
                      checked={checkboxChecked}
                      onCheckedChange={setCheckboxChecked}
                    />
                    <Label htmlFor="checkbox">Accept terms</Label>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Command</CardTitle>
                </CardHeader>
                <CardContent>
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>Enter your email address.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something..."
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input OTP</CardTitle>
                </CardHeader>
                <CardContent>
                  <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Label</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="label-input">This is a label</Label>
                  <Input id="label-input" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Radio Group</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Select</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectValue} onValueChange={setSelectValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Slider</CardTitle>
                </CardHeader>
                <CardContent>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="mt-2">Value: {sliderValue[0]}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Switch</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="switch"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="switch">Toggle switch</Label>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Textarea</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    placeholder="Type something..."
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Toggle</CardTitle>
                </CardHeader>
                <CardContent>
                  <Toggle pressed={togglePressed} onPressedChange={setTogglePressed}>
                    Toggle
                  </Toggle>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Toggle Group</CardTitle>
                </CardHeader>
                <CardContent>
                  <ToggleGroup type="single" value={toggleGroupValue} onValueChange={setToggleGroupValue}>
                    <ToggleGroupItem value="left">Left</ToggleGroupItem>
                    <ToggleGroupItem value="right">Right</ToggleGroupItem>
                  </ToggleGroup>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="feedback">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Alert</CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components to your app using the cli.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="w-full" />
                  <Button onClick={() => setProgress((prev) => (prev + 10) % 110)} className="mt-2">
                    Increase Progress
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sonner</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => toast("This is a toast message")}>Show Toast</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tooltip</CardTitle>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="navigation">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Breadcrumb</CardTitle>
                </CardHeader>
                <CardContent>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Menu</CardTitle>
                </CardHeader>
                <CardContent>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Menubar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>New</MenubarItem>
                        <MenubarItem>Open</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Save</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Navigation Menu</CardTitle>
                </CardHeader>
                <CardContent>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pagination</CardTitle>
                </CardHeader>
                <CardContent>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="data">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Badge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Carousel</CardTitle>
                </CardHeader>
                <CardContent>
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      <CarouselItem>Slide 1</CarouselItem>
                      <CarouselItem>Slide 2</CarouselItem>
                      <CarouselItem>Slide 3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="min-h-[200px]">
                    <BarChart data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>A list of recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="overlay">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Alert Dialog</CardTitle>
                </CardHeader>
                <CardContent>
                  <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Show Alert Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Context Menu</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Profile</ContextMenuItem>
                      <ContextMenuItem>Billing</ContextMenuItem>
                      <ContextMenuItem>Team</ContextMenuItem>
                      <ContextMenuItem>Subscription</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          This is a dialog description.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button onClick={() => setDialogOpen(false)}>Close</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Drawer</CardTitle>
                </CardHeader>
                <CardContent>
                  <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Drawer Title</DrawerTitle>
                        <DrawerDescription>
                          This is a drawer description.
                        </DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter>
                        <Button onClick={() => setDrawerOpen(false)}>Close</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Hover Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Popover</CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Dimensions</h4>
                          <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sheet</CardTitle>
                </CardHeader>
                <CardContent>
                  <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet Title</SheetTitle>
                        <SheetDescription>
                          This is a sheet description.
                        </SheetDescription>
                      </SheetHeader>
                      <SheetFooter>
                        <Button onClick={() => setSheetOpen(false)}>Close</Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}

export default App;

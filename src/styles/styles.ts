export const mainClass = "flex flex-col px-8 min-h-screen w-screen";
export const headerClass =
  "sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60";
export const flexRow = "flex flex-row";

export interface Theme {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  radius: string;
  // Add more properties as needed
}
// --background: 0 0% 100%;
//     --foreground: 0 0% 3.9%;
//     --card: 0 0% 100%;
//     --card-foreground: 0 0% 3.9%;
//     --popover: 0 0% 100%;
//     --popover-foreground: 0 0% 3.9%;
//     --primary: 0 72.2% 50.6%;
//     --primary-foreground: 0 85.7% 97.3%;
//     --secondary: 0 0% 96.1%;
//     --secondary-foreground: 0 0% 9%;
//     --muted: 0 0% 96.1%;
//     --muted-foreground: 0 0% 45.1%;
//     --accent: 0 0% 96.1%;
//     --accent-foreground: 0 0% 9%;
//     --destructive: 0 84.2% 60.2%;
//     --destructive-foreground: 0 0% 98%;
//     --border: 0 0% 89.8%;
//     --input: 0 0% 89.8%;
//     --ring: 0 72.2% 50.6%;
//     --radius: 0.75rem;
//     --chart-1: 12 76% 61%;
//     --chart-2: 173 58% 39%;
//     --chart-3: 197 37% 24%;
//     --chart-4: 43 74% 66%;
//     --chart-5: 27 87% 67%;
// Example theme object
export const themeColor: Theme = {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  card: "hsl(var(--card))",
  cardForeground: "hsl(var(--card-foreground))",
  popover: "hsl(var(--popover))",
  popoverForeground: "hsl(var(--popover-foreground))",
  primary: "hsl(var(--primary))",
  primaryForeground: "hsl(var(--primary-foreground))",
  secondary: "hsl(var(--secondary))",
  secondaryForeground: "hsl(var(--secondary-foreground))",
  muted: "hsl(var(--muted))",
  mutedForeground: "hsl(var(--muted-foreground))",
  accent: "hsl(var(--accent))",
  accentForeground: "hsl(var(--accent-foreground))",
  destructive: "hsl(var(--destructive))",
  destructiveForeground: "hsl(var(--destructive-foreground))",
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  chart1: "hsl(var(--chart-1))",
  chart2: "hsl(var(--chart-2))",
  chart3: "hsl(var(--chart-3))",
  chart4: "hsl(var(--chart-4))",
  chart5: "hsl(var(--chart-5))",
  radius: "hsl(var(--radius))",
  // Add more properties as needed
};

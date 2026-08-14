import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartStaker - Best Stake Automation Tool | Dice, Limbo, Mines & Slots",
  description:
    "SmartStaker automates Stake Dice, Limbo, Mines, Plinko and 31+ slot providers. Smart strategies, bonus hunting, real-time stats. Free for Windows, macOS and Linux.",
  keywords: [
    "SmartStaker",
    "stake bot",
    "stake slot bot",
    "stake automation tool",
    "stake dice",
    "stake limbo",
    "stake mines",
    "stake plinko",
    "stake slots",
    "stake strategy",
    "stake original games",
    "code claimer",
    "reload claimer",
    "stake code claimer",
    "stake reload claimer",
    "stake bonus code",
    "stake automation",
    "stake bonus hunt",
  ],
  authors: [{ name: "SmartStaker" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SmartStaker - Best Stake Automation Tool | Dice, Limbo, Mines & Slots",
    description:
      "The #1 Stake automation tool & strategy optimizer. Automate Dice, Limbo, Mines, Plinko, Slots with smart strategies and real-time stats. Free download.",
    url: "https://smartstaker.cc",
    siteName: "SmartStaker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartStaker - Best Stake Bot | Automate Dice, Limbo, Mines & Slots",
    description:
      "The #1 Stake automation tool. Smart strategies, real-time stats, bonus hunting. Free download.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${cormorant.variable} ${karla.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Inter, Instrument_Serif, EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";

const instrumentSerif = Instrument_Serif({subsets:['latin'],weight:'400',variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const ebGaramond = EB_Garamond({subsets:['latin'],weight:'500',variable:'--font-garamond'});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task manager app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-garamond min-h-screen bg-background flex flex-col", inter.variable, instrumentSerif.variable, ebGaramond.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            <main className="max-w-7xl mx-auto w-full flex-1">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/landing/theme-provider";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "StartupIndia Directory",
  description: "Top funded Indian startups",
  openGraph: {
    title: "StartupIndia",
    description: "Explore India's top startups",
    url: "https://localhost.com",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
             defaultTheme="dark"
          > 
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>   
      </body>
    </html>
  );
}

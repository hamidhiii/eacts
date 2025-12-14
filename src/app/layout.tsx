import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "E-ACTS - Build Your Extracurricular Journey",
  description: "Smart announcements, personalized roadmaps, and prep hubs for students to excel in extracurricular activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-background">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
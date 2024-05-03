import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
weight: ["400", "500", "600", "700"],
variable: '--font-poppins'

 });

export const metadata: Metadata = {
  title: "UPCOMING",
  description: "A place to find local events",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
  
}
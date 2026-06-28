import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickRent - Property Rental and Booking Platform",
  description: "A secure property rental and booking platform where property owners can list properties and tenants can search, book, and pay online. Includes role-based access, booking management, payments, reviews, and admin moderation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased text-zinc-950`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToastProvider placement="top" />
      </body>
    </html>
  );
}

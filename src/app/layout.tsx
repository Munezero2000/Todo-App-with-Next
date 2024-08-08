import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../lib/providers/query-provider";
import AuthProvider from "@/lib/providers/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List",
  description: "Made by Mag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <AuthProvider>
            <ReactQueryProvider>
              <main>{children}</main>
            </ReactQueryProvider>
          </AuthProvider>
        }
      </body>
    </html>
  );
}

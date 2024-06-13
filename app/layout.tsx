
import type { Metadata } from "next";
import {  Work_Sans, Spicy_Rice } from "next/font/google";
import "./globals.css";
import Provider from "@/components/redux/provider";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import SessionWrapper from "./sessionwrapper";
import Disable from "./disableFooter";

const DynamicNav = dynamic(() => import("../components/nav"), {
  ssr: false
});

export const inter = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const spicy = Spicy_Rice({ subsets: ["latin"], weight: ["400"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <main >
            <Toaster richColors />
            <Provider>
              <DynamicNav />
              {children}
              <Disable/>
            </Provider>
          </main>
        </SessionWrapper>
      </body>
    </html>
  );
}

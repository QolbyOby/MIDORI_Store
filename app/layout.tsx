
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Prvider from "@/components/redux/provider";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("../components/nav"), {
  ssr: false
});


const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Toaster richColors />
          <Prvider>
              <DynamicNav />
              {children}
          </Prvider>
        </main>
      </body>
    </html>
  );
}

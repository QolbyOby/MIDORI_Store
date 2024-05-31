"use client";

import { useEffect, useState } from "react";
import { animatePageIn } from "./utils/animations";
import { animatePageOut } from "./utils/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
      animatePageIn();
  }, []);

  return (
      <div>
          <div id="banner-1" className="banner min-h-screen bg-[#1A4D2E] z-20 fixed top-0 left-0 w-1/4 lg:w-1/4" />
          <div id="banner-2" className="banner min-h-screen bg-[#1A4D2E] z-20 fixed top-0 left-1/4 w-1/4 lg:w-1/4" />
          <div id="banner-3" className="banner min-h-screen bg-[#1A4D2E] z-20 fixed top-0 left-2/4 w-1/4 lg:w-1/4" />
          <div id="banner-4" className="banner min-h-screen bg-[#1A4D2E] z-20 fixed top-0 left-3/4 w-1/4 lg:w-1/4" />
          {children}
      </div>
  );
}

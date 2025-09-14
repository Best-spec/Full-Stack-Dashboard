"use client";
import { useState } from "react";
import { Menu, LayoutDashboard } from "lucide-react";
import Sidebar from "./sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-lg h-16 fixed w-full z-50">
        <div className="flex justify-between items-center h-full px-6 md:px-16">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Logo menu (desktop) */}
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Title */}
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Dashboard
            </span>
          </div>

          {/* Right Section (desktop only) */}
          <div className="hidden lg:flex gap-8 items-center">
            <span>role</span>
            <span>username</span>
            <button className="p-3 bg-red-500 text-white rounded-xl hover:scale-105 active:scale-95 shadow-md hover:shadow-lg transition-all duration-300">
              ออกจากระบบ
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

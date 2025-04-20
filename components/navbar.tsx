"use client";

import { Menu, Moon, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/logo_ne.png";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { School } from 'lucide-react';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Institute Repository", href: "http://172.105.56.86:4000/home" },
  { name: "Onos", href: "https://www.onos.gov.in/ums/index" },
  {
    name: "Institute",
    items: [
      { name: "College of Biotechnology", href: "#biotechnology" },
      { name: "College of Technology", href: "#technology" },
    ],
  },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Banner Section - Not Fixed */}
      <div className="w-full bg-background">
        <div className="relative w-full h-32 mt-16">
          <Image
            src={img}
            alt="SVPUAT Library Banner"
            fill
            className="object-center object-contain bg-primary"
            priority
          />
        </div>
      </div>

      {/* Navigation Bar - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center px-4 border-b m-auto">
          <div className="flex gap-6 md:gap-10">
            <div className="hidden md:flex gap-6">
              {navigation.map((item) =>
                item.items ? (
                  <div key={item.name} className="relative group">
                    <button className="text-sm font-medium transition-colors hover:text-primary my-auto flex justify-center items-center">
                      {item.name}
                    </button>
                    <div className="absolute left-0 top-full hidden group-hover:block min-w-[200px] bg-background border rounded-md shadow-md p-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-muted rounded-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right side with Search and Theme Toggle */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* Search Bar */}
            <div className="relative w-full max-w-[200px] hidden sm:block">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 pr-4 h-9 rounded-full border-muted-foreground/20"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                {/* Mobile Search Bar */}
                <div className="mb-4 mt-4">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 rounded-full border-muted-foreground/20"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                {/* Mobile Navigation */}
                <div className="flex flex-col gap-4 mt-4">
                  {navigation.map((item) =>
                    item.items ? (
                      <div key={item.name} className="space-y-2">
                        <div className="font-medium">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm transition-colors hover:text-primary"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      {/* <div className="h-16" /> */}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FolderKanban, GraduationCap, Home, Moon, Sun } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const applyTheme = (theme: "light" | "dark") => {
      const darkMode = theme === "dark";

      document.documentElement.classList.toggle("dark", darkMode);
      document.documentElement.classList.toggle("light", !darkMode);
      document.documentElement.style.colorScheme = theme;

      setIsDark(darkMode);
    };

    const savedTheme = localStorage.getItem("theme");

    const systemTheme: "light" | "dark" = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
      ? "dark"
      : "light";

    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : systemTheme;

    applyTheme(initialTheme);

    // Synchronize the theme with other browser tabs
    const handleThemeSync = (event: StorageEvent) => {
      if (
        event.key === "theme" &&
        (event.newValue === "dark" || event.newValue === "light")
      ) {
        applyTheme(event.newValue);
      }
    };

    window.addEventListener("storage", handleThemeSync);

    return () => {
      window.removeEventListener("storage", handleThemeSync);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: "light" | "dark" = isDark ? "light" : "dark";
    const nextIsDark = nextTheme === "dark";

    // Immediately update the current tab
    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.classList.toggle("light", !nextIsDark);
    document.documentElement.style.colorScheme = nextTheme;

    setIsDark(nextIsDark);

    // This updates the other open tabs
    localStorage.setItem("theme", nextTheme);
  };

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: GraduationCap, label: "Education", href: "#education" },
    { icon: FolderKanban, label: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-out ${
        isScrolled
          ? "bg-background/40 backdrop-blur-xl px-4 py-2 rounded-full border border-border/80 shadow-lg"
          : "bg-background/30 backdrop-blur-lg px-6 py-3 rounded-full border border-border/80 shadow-lg"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-2 text-sm font-medium transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary"
            >
              <Icon
                size={isScrolled ? 18 : 20}
                className="transition-[width,height] duration-150 ease-out"
              />
              <span
                className={`transition-transform duration-200 ease-out group-hover:translate-x-0.5 ${
                  isScrolled ? "hidden" : "inline"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="group relative flex size-8 cursor-pointer items-center justify-center rounded-full text-foreground transition-[color,transform] duration-200 ease-out hover:scale-110 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {isDark ? (
            <Sun
              size={18}
              className="transition-transform duration-300 ease-out group-hover:rotate-45"
            />
          ) : (
            <Moon
              size={18}
              className="transition-transform duration-300 ease-out group-hover:-rotate-12"
            />
          )}

          {/* Smooth tooltip */}
          <span className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 -translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
            {isDark ? "Switch to light mode" : "Switch to dark mode"}
          </span>
        </button>
      </div>
    </nav>
  );
}

"use client"

import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="flex items-center w-16 h-8 relative bg-secondary dark:bg-secondary-dark cursor-pointer border border-primary dark:border-primary-dark shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] rounded-full p-1 overflow-hidden"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon
        className="text-primary-dark"
        size={18}
      />
      <div
        className="absolute bg-accent dark:bg-primary-dark w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 shadow-[9px_9px_16px_rgba(0,0,0,0.4),-9px_-9px_16px_rgba(73,73,73,0.6)]"
        style={{ left: darkMode ? "2px" : "auto", right: darkMode ? "auto" : "2px" }}
      >
      </div>
      <BsSunFill
        className="ml-auto text-accent"
        size={18}
      />
    </div>
  )
}

export default ThemeToggle;
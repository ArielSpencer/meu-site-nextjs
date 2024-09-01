"use client"

import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])
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
        className="absolute bg-accent dark:bg-primary-dark w-6 h-6 rounded-full shadom-md transform transition-transform duration-300 shadow-[9px_9px_16px_rgba(0,0,0,0.4),-9px_-9px_16px_rgba(73,73,73,0.6)]"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
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
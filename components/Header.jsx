import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return <header className="py-8 xl:py-12 text-writing dark:text-writing-dark">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Ariel <span className="text-accent dark:text-accent-dark">Spencer</span>
        </h1>
      </Link>

      <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <ThemeToggle />
        <Link href="https://wa.me/5511991007079">
          <Button>Olá!</Button>
        </Link>
      </div>

      <div className="xl:hidden">
        <MobileNav />
      </div>
    </div>
  </header>;
}

export default Header
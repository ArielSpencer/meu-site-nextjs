import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
      {/* logo here */}
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Ariel <span className="text-accent">Spencer</span>
        </h1>
      </Link>

      {/* desktop nav */}
      <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="https://wa.me/5511991007079">
          {/* <Button className="capitalize font-medium hover:text-accent translation-all">Olá!</Button> */}
          <Button>Olá!</Button>
        </Link>
      </div>

      {/* mobile nav */}
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </div>
  </header>;
}

export default Header
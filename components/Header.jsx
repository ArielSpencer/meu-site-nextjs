import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";

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
      <div className="hidden xl:flex item-center gap-8">
        <Nav />
        <Link href="/contact">
          <Button className="capitalize font-medium hover:text-accent translation-all">Olá!</Button>
        </Link>
      </div>

      {/* mobile nav */}
      <div className="xl:hidden">mobile-nav</div>
    </div>
  </header>;
}

export default Header
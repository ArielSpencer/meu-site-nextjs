"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'início',
    path: '/home'
  },
  {
    name: 'serviços',
    path: '/servicos'
  },
  {
    name: 'sobre mim',
    path: '/sobre-mim'
  },
  {
    name: 'portfólio',
    path: '/portfolio'
  },
  {
    name: 'contato',
    path: '/contato'
  },
]

import React from "react"

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
            capitalize font-medium hover:text-accent translation-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  )
}

export default Nav
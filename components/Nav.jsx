"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    name: 'início',
    path: '/'
  },
  {
    id: 2,
    name: 'serviços',
    path: '/servicos'
  },
  {
    id: 3,
    name: 'sobre mim',
    path: '/sobre-mim'
  },
  {
    id: 4,
    name: 'portfólio',
    path: '/portfolio'
  },
  {
    id: 5,
    name: 'contato',
    path: '/contato'
  },
]

import React from "react"

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link) => {
        return (
          <Link href={link.path} key={link.id}
            className={`${link.path === pathname && "text-accent dark:text-accent-dark border-b-2 border-accent dark:border-accent-dark"}
            capitalize font-medium hover:text-accent dark:hover:text-accent-hover translation-all`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
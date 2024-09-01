"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Developer",
    description: "Criação de interfaces front-end interativas e responsivas utilizando linguagens como HTML, CSS, JavaScript, React, JSX e Next.js.",
    href: "https://wa.me/5511991007079",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Criação de interfaces e revisão de projetos com foco em experiências de usuário otimizadas, priorizando a usabilidade e a satisfação do usuário final.",
    href: "https://wa.me/5511991007079",
  },
  {
    num: "03",
    title: "SEO",
    description: "Otimização de sites, e-commerces e blogs para motores de busca, aumentando a visibilidade e o tráfego orgânico com estratégias avançadas de SEO on-page e off-page.",
    href: "https://wa.me/5511991007079",
  },
  {
    num: "04",
    title: "Marketing Digital",
    description: "Planejamento e execução de campanhas de marketing digital, visando aumentar a presença online e o engajamento através de diversas plataformas digitais.",
    href: "https://wa.me/5511991007079",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => {
            return (
              <div
                key={service.num}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <Link href={service.href}>
                    <div className="text-5xl font-extrabold text-outline dark:text-dark-outline text-transparent group-hover:text-outline-hover dark:group-hover:text-dark-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                  </Link>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-writing-rel dark:bg-accent-dark group-hover:bg-accent dark:group-hover:bg-accent-darkhover transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                  >
                    <BsArrowDownRight
                      className="text-primary group-hover:text-writing-dark dark:group-hover:text-writing text-3xl"
                    />
                  </Link>
                </div>

                <Link href={service.href}>
                  <h2 className="text-[42px] font-bold leading-none text-accent-dark group-hover:text-accent dark:group-hover:text-writing-rel transition-all duration-500">{service.title}</h2>
                </Link>
                <p className="text-writing/60 dark:text-writing-dark">{service.description}</p>

                <div
                  className="border-b border-white/20 w-full">

                </div>
              </div>
            )
          })}
        </motion.div>
      </div >
    </section >
  )
}

export default Services
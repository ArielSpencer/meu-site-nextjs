"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsBehance } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Fokus Pomodoro",
    description: "Bem-vindo ao Fokus Pomodoro, uma ferramenta de produtividade com a técnica Pomodoro. Inclui uma lista de tarefas para priorizar o que é mais importante.",
    stack: [
      { name: "javascript" },
      { name: "html 5" },
      { name: "css 3" },
    ],
    image: "/assets/portfolio/app-fokus-pomodoro-desenvolvido-por-ariel-spencer.webp",
    imageAlt: "app fokus pomodoro desenvolvido por ariel spencer",
    live: "https://pomodoro.arielspencer.com.br/",
    repository: "https://github.com/ArielSpencer/fokus-pomodoro/",
    favorite: "true",
  },
  {
    num: "02",
    category: "wordpress",
    title: "Estima Nutrição",
    description: "A Estima Nutrição é uma empresa especializada em atendimento nutricional que visa melhorar a qualidade de vida e o bem-estar das pessoas por meio da alimentação.",
    stack: [
      { name: "ux" },
      { name: "elementor" },
      { name: "html 5" },
      { name: "css 3" },
    ],
    image: "/assets/portfolio/site-estima-nutricao-desenvolvido-por-ariel-spencer.webp",
    imageAlt: "site estima nutrição desenvolvido por ariel spencer",
    live: "https://estimanutricao.com.br/",
    repository: "https://www.behance.net/gallery/143522415/Estima-Nutricao/",
    favorite: "true",
  },
  {
    num: "03",
    category: "wordpress",
    title: "Walljobs",
    description: "O Clube do RH é uma iniciativa do grupo WallJobs para criar uma comunidade entre os profissionais do RH, mantendo-os informados com cursos, notícias e eventos.",
    stack: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "elementor" },
      { name: "learndash" },
    ],
    image: "/assets/portfolio/site-walljobs-desenvolvido-por-ariel-spencer.webp",
    imageAlt: "site dc beauty studio desenvolvido por ariel spencer",
    live: "https://in.walljobs.com.br/",
    repository: "https://www.behance.net/gallery/143950669/O-Clube-do-RH/",
    favorite: "true",
  },
  {
    num: "04",
    category: "wordpress",
    title: "DC Beauty Studio",
    description: "Visando uma experiência intuitiva. O site oferece um sistema de agendamento de serviços e a organização de agenda funcional para os clientes e colaboradores.",
    stack: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "divi" },
      { name: "bookly" },
    ],
    image: "/assets/portfolio/site-dc-beauty-studio-desenvolvido-por-ariel-spencer.webp",
    imageAlt: "site dc beauty studio desenvolvido por ariel spencer",
    live: "https://dcbeautystudio.com.br/",
    repository: "",
    favorite: "true",
  },
];


const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  const IconRepository = project.category === "wordpress" ? BsBehance : BsGithub;
  const hiddenRepository = project.repository === "" ? "hidden" : "";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/80">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-accent uppercase"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && " ·"}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          projeto
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.repository}
                  className={hiddenRepository}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <IconRepository
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          repositório
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 buttom-0 w-full bg-black/10 z-10">
                      </div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover object-top"
                          alt={project.imageAlt}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 960px) 33vw, 25vw"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio
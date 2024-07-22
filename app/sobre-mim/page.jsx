"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaWordpress, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiVite, SiSqlite } from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// data:
const resume = {
  title: "Sobre mim",
  tip: "Role o texto para para continuar lendo",
  description: [
    {
      primary: "Sou desenvolvedor front-end, especializado em HTML, CSS e JavaScript, com ênfase em UX Design. Com experiência em projetos focados em solucionar as dores dos clientes e da equipe.",
      secundary: "Antes de me especializar em desenvolvimento front-end, empreendi em agências de marketing digital e criação de sites em WordPress. A busca por soluções mais personalizadas me levou a estudar programação e me encontrar no front-end. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FAM.",
      conclusion: "Estou sempre em busca de novos conhecimentos por meio de cursos, workshops e palestras. Apaixonado por inovação e ávido por novos desafios, estou agora em busca da oportunidade de transformar meu conhecimento em cases de sucesso como programador front-end.",
    }
  ],
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Ariel Spencer",
      href: "",
    },
    {
      fieldName: "Modalidade",
      fieldValue: "Freela · PJ · CTL",
      href: "",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "11 99100 7079",
      href: "https://wa.me/5511991007079",
    },
    {
      fieldName: "Email",
      fieldValue: "arielspencer.log@gmail.com",
      href: "mailto:arielspencer.log@gmail.com",
    },
    {
      fieldName: "Brasil",
      fieldValue: "São Paulo/SP",
      href: "",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português · Inglês",
      href: "",
    },
  ],
};

const skills = {
  title: "Minhas Skills",
  description: "Tecnologias e ferramentas que utilizo para oferecer soluções criativas e eficazes.",
  skillList: [
    {
      name: "HTML 5",
      icon: <FaHtml5 />,
      tip: "HTML 5",
    },
    {
      name: "CSS 3",
      icon: <FaCss3 />,
      tip: "CSS 3",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      tip: "JavaScript",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      tip: "React.js",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      tip: "Next.js",
    },
    {
      name: "Tailwind.css",
      icon: <SiTailwindcss />,
      tip: "Tailwind.css",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      tip: "Node.js",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      tip: "Figma",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      tip: "GitHub",
    },
    {
      name: "SQLite",
      icon: <SiSqlite />,
      tip: "SQLite",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      tip: "Vite",
    },
    {
      name: "WordPress",
      icon: <FaWordpress />,
      tip: "WordPress",
    },
  ],
};

const education = {
  title: "Formação acadêmica",
  icon: "/assets/resume/cap.svg",
  description: "Aqui está um resumo da minha jornada acadêmica.",
  items: [
    {
      institution: "FAM",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "ago de 2024 · dez de 2027",
    },
    {
      institution: "Alura",
      degree: "+23 cursos concluídos",
      duration: "2024",
    },
    {
      institution: "Coursera - Google Career",
      degree: "UX Design",
      duration: "mai de 2022 · nov de 2022",
    },
    {
      institution: "Digital House Brasil",
      degree: "Analista de Marketing Digital",
      duration: "jan de 2019 · jul de 2019",
    },
  ],
};

const experience = {
  title: "Experiências",
  icon: "/assets/resume/badge.svg",
  description: "Cada passo na minha trajetória profissional foi uma oportunidade de aprendizado e evolução.",
  items: [
    {
      company: "Sua Empresa",
      position: "Front-End Developer",
      duration: "await",
    },
    {
      company: "Criteria Partners",
      position: "Product Manager",
      duration: "set de 2022 · out de 2023",
    },
    {
      company: "ImóvelP",
      position: "UX Designer",
      duration: "set de 2022 · mai de 2023",
    },
    {
      company: "Frellancer",
      position: "Marketing Digital & WordPress",
      duration: "ago de 2020 · jun de 2024",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
      }}
      className=" min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">

        {/* content selector */}
        <Tabs defaultValue="resume" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="resume">
              Resume
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
          </TabsList>

          {/* content container */}
          <div className="min-h-[100vh] w-full">
            {/* resume */}
            <TabsContent value="resume" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{resume.title}</h3>
                <div className="max-w-[620px] text-white/60 mx-auto xl:mx-0">
                  {resume.description.map((item, index) => {
                    return (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <ScrollArea key={item.index} className="h-[250px] w-full text-center xl:text-left">
                              <div className="max-w-[98%]">
                                <p>
                                  {item.primary}
                                </p>
                                <p className='py-[30px]'>
                                  {item.secundary}
                                </p>
                                <p>
                                  {item.conclusion}
                                </p>
                              </div>
                            </ScrollArea>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p>{resume.tip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )
                  })}
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {resume.info.map((item, index) => {
                    return (
                      <li key={resume.index} className="flex items-center justify-center xl:justify-start gap-3">
                        <span className="text-white/60">{item.fieldName}</span>
                        <a href={item.href} className={`${item.href != "" ? 'hover:text-accent' : 'pointer-events-none cursor-default'}`}>{item.fieldValue}</a>
                      </li>
                    )
                  })}
                </ul>

              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={skills.index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>

                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl group">
                                <div className='flex flex-col gap-3 justify-center items-center group-hover:text-accent transition-all duration-300'>
                                  <div className="text-4xl">
                                    {skill.icon}
                                  </div>
                                  <p className="capitalize">{skill.name}</p>
                                </div>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p className="capitalize">{skill.tip}</p>
                              </TooltipContent>

                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {education.title}
                </h3>
                <p className='text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={education.index}
                          className="bg-[#232329] h-[235px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[2] min-h-[80px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">
                              {/* dot */}
                            </span>
                            <p className="text-white/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {experience.title}
                </h3>
                <p className='text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={experience.index}
                          className="bg-[#232329] h-[235px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[2] min-h-[80px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">
                              {/* dot */}
                            </span>
                            <p className="text-white/60">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div >
    </motion.div >
  )
}

export default About
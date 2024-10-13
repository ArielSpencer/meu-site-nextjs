import { FiDownload } from "react-icons/fi";

import Rel from "@/components/Relevant";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-[100vh]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Olá, sou Ariel Spencer.
            </span>
            <h1 className="h1 mb-6">
              Desenvolvedor <br /><span className="text-accent dark:text-accent-dark">Front-end</span>
            </h1>
            <p className="max-w-[500px] mb-9">
              Focado em <Rel>ReactJS</Rel>, <Rel>HTML</Rel> e <Rel>CSS</Rel>,
              especializado em <Rel>UX Design</Rel>, com experiência em <Rel>Marketing Digital</Rel>, <Rel>SEO</Rel> e <Rel>SEM</Rel>.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/cv-ariel-spencer-programador-front-end.pdf"
                download="cv-ariel-spencer-programador-front-end.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>
                    Download CV
                  </span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent dark:border-accent-dark dark:hover:border-accent-darkhover rounded-full flex justify-center items-center text-accent-dark text-base hover:bg-accent dark:hover:bg-accent-darkhover hover:text-primary dark:hover:text-primary-dark hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo
              src="/assets/ariel-spencer-developer-front-end.webp"
              alt="Ariel Spencer Desenvolvedor Front-End"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;
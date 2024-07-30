import { FiDownload } from "react-icons/fi";

import Rel from "@/components/Relevant";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Olá, sou Ariel Spencer.
            </span>
            <h1 className="h1 mb-6">
              Desenvolvedor <br /><span className="text-accent">Front-end</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Focado em <Rel tp>ReactJS</Rel>, <Rel tp>HTML</Rel> e <Rel tp>CSS</Rel>,
              especializado em <Rel tp>UX Design</Rel>, com experiência em <Rel tp>Marketing Digital</Rel>, <Rel tp>SEO</Rel> e <Rel tp>SEM</Rel>.
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
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;
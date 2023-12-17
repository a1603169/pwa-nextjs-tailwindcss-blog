import Transition from "@/components/Transition";
import { GiSouthKorea } from "react-icons/gi";
import { FaJava } from "react-icons/fa";
import {
  SiSass,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiGithub,
  SiShopify,
  SiMongodb,
  SiRedux,
  SiKotlin,
  SiSpring,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const EXPERIENCES = [
  {
    title: "Korea Army",
    date: "2018.07.31 - 2020.03.19",
    description: "Sergeant",
  },
  {
    title: "Suomen Sulkapalloliitto",
    date: "2020.08.31 - 2023.06.30",
    description: "Freelance Interpreter",
  },
  {
    title: "KISED",
    date: "2020.08.31 - 2023.06.30",
    description: "Freelance Interpreter",
  },
  {
    title: "Beesh Oy",
    date: "2021.07.01 - 2021.10.31",
    description: "Software Developer",
  },
  {
    title: "Rens Original Oy",
    date: "2021.11.01 - 2022.05.30",
    description: "Frontend Developer",
  },
  {
    title: "Haaga-Helia",
    date: "2016.08.31 - 2023.06.30",
    description: "Bachelor IT Business",
  },
  {
    title: "新明工業株式会社",
    date: "2023.09.01 - CURRENT",
    description: "Software Engineer",
  },
];

export default function AboutPage() {
  return (
    <Transition>
      <div className="flex pb-40 mx-5">
        <div className="flex flex-col justify-center items-start text-indigo-400">
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">{`<NAME>`}</h1>
            <p className="text-2xl max-lg:text-lg">SEUNGHUN BANG</p>
          </div>
          <br className="my-14" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">{`<BORN>`}</h1>
            <p className="text-2xl max-lg:text-lg">01.05.1997</p>
          </div>
          <br className="my-14" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">{`<NATIONALITY>`}</h1>
            <p className="text-2xl flex max-lg:text-lg items-center">
              REPUBLIC OF KOREA
              <GiSouthKorea />
            </p>
          </div>
          <br className="my-14" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">{`<SKILLS>`}</h1>
            <div className="grid grid-cols-4 gap-5 text-2xl">
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiReact />: ReactJS
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiTypescript />: Typescript
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <TbBrandNextjs /> : NextJS
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <FaJava /> : Java
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiSpring /> : Spring
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiKotlin /> : Kotlin
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiTailwindcss /> : Tailwind
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiHtml5 /> : HTML
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiCss3 /> : CSS
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiJavascript /> : Javascript
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiPostman /> : Postman
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiGithub />: Github
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <FaNodeJs />: NodeJS
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiMongodb />: MongoDB
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiRedux /> : Redux
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiShopify />: LiquidJS
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiShopify />: Shopify
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiReact /> : RNative
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                <SiSass /> : Sass/Scss
              </div>
            </div>
          </div>
          <br className="my-14" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">{`<EXPERIENCES>`}</h1>
            <ul className="text-2xl max-lg:text-lg">
              <div className="grid gap-6 grid-flow-row">
                {EXPERIENCES.map((experience, idx) => (
                  <li key={idx} className="flex flex-col justify-between dire">
                    <p>{experience.date}</p>
                    <p>
                      {experience.title} / {experience.description}
                    </p>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <br className="my-14" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">{`<LANGUAGES>`}</h1>
            <div className="grid grid-cols-4 gap-5 text-2xl">
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                Korean
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                English
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                Japanese
              </div>
              <div className="flex items-center max-lg:text-lg max-md:text-xs">
                Finnish
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

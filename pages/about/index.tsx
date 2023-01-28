import Transition from "@/components/Transition";
import { GiSouthKorea } from "react-icons/gi";
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
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
export default function AboutPage() {
  return (
    <Transition>
      <div className="flex justify-center pb-20 mx-5">
        <div className="flex flex-col justify-center items-start text-indigo-400">
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">NAME</h1>
            <p className="text-2xl max-lg:text-lg">SEUNGHUN BANG</p>
          </div>
          <br className="my-5" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">BORN</h1>
            <p className="text-2xl max-lg:text-lg">01.05.1997</p>
          </div>
          <br className="my-5" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">NATIONALITY</h1>
            <p className="text-2xl flex max-lg:text-lg">
              REPUBLIC OF KOREA
              <GiSouthKorea />
            </p>
          </div>
          <br className="my-5" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">SKILLS</h1>
            <div className="grid grid-cols-3 gap-5 text-2xl">
              <div className="flex items-center max-lg:text-lg">
                <SiReact />: ReactJS
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiTypescript /> : Typescript
              </div>
              <div className="flex items-center max-lg:text-lg">
                <TbBrandNextjs /> : NextJS
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiTailwindcss /> : Tailwind CSS
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiHtml5 /> : HTML
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiCss3 /> : CSS
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiJavascript /> : Javascript
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiPostman /> : Postman
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiGithub /> : Github
              </div>
              <div className="flex items-center max-lg:text-lg">
                <FaNodeJs /> : NodeJS
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiMongodb /> : MongoDB
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiRedux /> : Redux
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiShopify />: LiquidJS
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiShopify />: Shopify
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiReact /> : React Native
              </div>
              <div className="flex items-center max-lg:text-lg">
                <SiSass /> : Sass/Scss
              </div>
            </div>
          </div>
          <br className="my-5" />
          <div>
            <h1 className="text-4xl mb-3 max-lg:text-3xl">EXPERIENCES</h1>
            <ul className="text-2xl max-lg:text-lg">
              <li>
                <p>
                  2021.07.01 - 2021.10.31 / Beesh Oy / FRONTEND DEVELOPER INTERN
                </p>
              </li>
              <li>
                <p>
                  2021.11.01 - 2022.05.12 / Rens Original / FRONTEND DEVELOPER{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  );
}

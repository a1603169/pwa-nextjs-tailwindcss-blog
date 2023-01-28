import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function SocialLinks() {
  return (
    <div className="border-t-2 border-solid border-indigo-300 pt-5">
      <div className="flex justify-center items-center flex-col ">
        <div className="flex justify-center items-center pb-5">
          <a
            href="https://github.com/a1603169"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-4xl mr-3 text-indigo-300 transition duration-500 hover:text-indigo-500  " />
          </a>
          <a
            href="https://www.linkedin.com/in/bang-seunghun-18a465204/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-4xl mr-3 text-indigo-300 transition duration-500 hover:text-indigo-500  " />
          </a>
          <a
            href="https://www.instagram.com/seunghun_bang/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="text-4xl mr-3 text-indigo-300 transition duration-500 hover:text-indigo-500  " />
          </a>
        </div>
      </div>
    </div>
  );
}

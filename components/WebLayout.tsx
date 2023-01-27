import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/router";
import SocialLinks from "./SocialLinks";

interface layoutProps {
  children: React.ReactNode;
}

const logoStyle: string =
  "border-solid border-2 border-indigo-300 p-3 ease-in duration-500 hover:text-indigo-500 hover:border-indigo-500 ";
const logoStyleActive: string =
  "ease-in duration-500 border-solid border-2 border-indigo-300 p-3 text-indigo-50 bg-indigo-500 ";
const linkStyle: string =
  "p-1 ease-in duration-500 mr-5 hover:text-indigo-500 ";
const linkStyleActice: string = "p-1 text-indigo-500 mr-5 ";

export default function Layout({ children }: layoutProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="border-solid border-b-2 border-indigo-300 text-indigo-300 my-2">
        <nav className="font-sans">
          <ul className="flex p-5 text-2xl justify-between items-center font-sans ">
            <div>
              <li
                className={
                  "rounded-xl " +
                  (router.pathname === "/" ? logoStyleActive : logoStyle)
                }
              >
                <Link href="/">DAVID.BANG</Link>
              </li>
            </div>
            <div className="flex justify-between max-sm:hidden">
              <li
                className={
                  router.pathname === "/projects" ? linkStyleActice : linkStyle
                }
              >
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li
                className={
                  router.pathname === "/about" ? linkStyleActice : linkStyle
                }
              >
                <Link href="/about">ABOUT</Link>
              </li>
              <li
                className={
                  router.pathname === "/contact" ? linkStyleActice : linkStyle
                }
              >
                <Link href="/contact">CONTACT</Link>
              </li>
            </div>
            <div className="hidden max-sm:block">
              <button
                className="ease-in duration-500 flex items-center px-4 py-4 border-2 rounded-xl
                text-indigo-400 border-indigo-400 hover:text-indigo-500
                hover:border-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </ul>
          <div className={isOpen ? "hidden" : ""}>
            <ul className="flex items-center flex-col text-2xl">
              <li
                className={
                  "my-5 transition duration-500 hover:text-indigo-500" +
                  (router.pathname === "/projects" ? " text-indigo-500" : "")
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li
                className={
                  "mb-5 transition duration-500 hover:text-indigo-500" +
                  (router.pathname === "/about" ? " text-indigo-500" : "")
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link href="/about">ABOUT</Link>
              </li>
              <li
                className={
                  "mb-5 transition duration-500 hover:text-indigo-500" +
                  (router.pathname === "/contact" ? " text-indigo-500" : "")
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main className="pb-5">{children}</main>
      <SocialLinks />
      <p className="text-2xl text-indigo-400 text-center pb-8">
        © 2023 Seunghun David Bang
      </p>
    </>
  );
}

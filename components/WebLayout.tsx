import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

interface layoutProps {
  children: React.ReactNode;
}

const logoStyle: string =
  "border-solid border-2 border-zinc-400 p-3 ease-in duration-300 hover:text-indigo-500 hover:border-indigo-500 ";
const logoStyleActive: string =
  "ease-in duration-300 border-solid border-2 border-indigo-500 border-indigo-500 p-3 text-indigo-500 ";
const linkStyle: string =
  "p-1 ease-in duration-300 mr-5 hover:text-indigo-500 ";
const linkStyleActice: string = "p-1 text-indigo-500 mr-5 ";

export default function Layout({ children }: layoutProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="border-solid border-b-2 border-indigo-300 text-zinc-400 ">
        <nav className="font-sans">
          <ul className="flex p-5 text-2xl justify-between items-center font-sans ">
            <div>
              <li
                className={
                  "rounded-xl " +
                  (router.pathname === "/" ? logoStyleActive : logoStyle)
                }
              >
                <Link href="/">DAVIDBANG</Link>
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
                className="ease-in duration-300 flex items-center px-3 py-2 border-2 rounded
                text-zinc-400 border-zinc-400 hover:text-indigo-500
                hover:border-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </ul>
        </nav>
      </div>
      {children}
    </>
  );
}

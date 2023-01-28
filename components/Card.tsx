import Link from "next/link";

interface cardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: cardProps) {
  return (
    <Link target={"_BLANK"} href={href}>
      <div
        className="py-28 flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg 
      duration-500 border-2 border-indigo-400 border-solid max-h-24
    hover:bg-indigo-50"
      >
        <div className="px-5">
          <h1 className="text-2xl text-indigo-400 text-center max-lg:text-xl">
            {title}
          </h1>
          <br />
          <p className=" text-indigo-400 text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}

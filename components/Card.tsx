import Link from "next/link";

interface cardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function Card({ title, description, href, image }: cardProps) {
  return (
    <Link target={"_BLANK"} href={href}>
      <div className="flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg duration-500">
        <h1 className="text-2xl text-indigo-400 text-center">{title}</h1>
        <p className="text-indigo-400 text-center">{description}</p>
        <img className="w-5/6 my-5 rounded-lg max-h-60" src={image} alt="DM" />
      </div>
    </Link>
  );
}

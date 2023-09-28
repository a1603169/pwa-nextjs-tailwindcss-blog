import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export default function Card({ title, description, href, image }: CardProps) {
  return (
    <Link target={"_BLANK"} href={href}>
      <div className="relative py-32 flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg duration-500 border-2 border-indigo-400 border-solid max-h-24 hover:bg-indigo-50">
        {image && (
          <Image
            src={image}
            alt="test"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            width={500} 
            height={300} 
          />
        )}
        <div className="px-5 relative">
          <h1 className="text-2xl text-indigo-400 text-center max-lg:text-xl">
            {title}
          </h1>
          <br />
          <p className="text-indigo-400 text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}

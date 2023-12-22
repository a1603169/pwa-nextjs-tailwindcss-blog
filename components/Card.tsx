import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  disabled?: boolean;
}

export default function Card({
  title,
  description,
  href,
  image,
  disabled,
}: CardProps) {
  return disabled ? (
    <Link href={"/disabled"} className="relative py-32 flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg duration-300 border-2 border-indigo-400 border-solid max-h-24 hover:bg-red-50">
      <div className="relative py-32 w-96 flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg duration-300 hover:bg-red-50 hover:scale-125">
        {image && (
          <Image
            src={image}
            alt="test"
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-all"
            width={1000}
            height={1000}
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
  ) : (
    <Link target={"_blank"} href={href} className="py-32 flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg duration-300 border-2 border-indigo-400 border-solid max-h-24 hover:bg-indigo-50">
      <div className="relative py-32 w-96 flex justify-center flex-col items-center rounded-xl overflow-hidden hover:shadow-lg duration-300 hover:bg--50 hover:scale-125">
        {image && (
          <Image
            src={image}
            alt="test"
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-all"
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

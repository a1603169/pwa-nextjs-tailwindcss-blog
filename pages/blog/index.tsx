import Link from "next/link";
import { getSortedPostsData } from "@/lib/post";
import Transition from "@/components/Transition";

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Transition>
      <section className="flex flex-col items-center text-2xl text-indigo-300">
        <h1 className="text-3xl mb-5">THIS WILL BE FILTERING</h1>
        <ul className="flex w-3/4 max-h-128 flex-col gap-5 border-2 border-indigo-300 border-solid p-5 rounded-xl overflow-scroll max-md:text-sm">
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className="hover:shadow-xl shadow-indigo-500/50" key={id}>
                <Link
                  className="flex items-center transition-all duration-300 border-indigo-300 border-b-2 border-solid justify-between hover:bg-indigo-300 hover:text-indigo-50 hover:rounded-t-lg hover:pt-2 hover:pb-1"
                  href={`/blog/${id}`}
                >
                  <h2 className="mx-2 truncate">{title}</h2>
                  <p className="text-xs mx-2 whitespace-nowrap">{date}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Transition>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

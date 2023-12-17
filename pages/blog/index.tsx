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
        <h1 className="">THIS IS MY BLOG</h1>
        <ul className="grid grid-cols-3 gap-5">
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li key={id}>
                <Link href={`/blog/contents/${id}`}>
                  <p>{title}</p>
                  <p>{date}</p>
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

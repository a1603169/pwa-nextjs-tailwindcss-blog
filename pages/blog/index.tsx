import Link from "next/link";
import { getSortedPostsData, getAllTags } from "@/lib/post";
import { useState } from "react";
import Transition from "@/components/Transition";
import Filters from "@/components/Filters";

export default function Blog({
  allPostsData,
  tags,
}: {
  allPostsData: {
    date: string;
    title: string;
    subtitle: string;
    id: string;
    tags: string[]; // Add the 'tags' property to the type definition
  }[];
  tags: object;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filteredPosts = allPostsData.filter((post) =>
    selectedTags.every((tag) => post.tags && post.tags.includes(tag))
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Transition>
      <section className="flex flex-col items-center text-2xl text-indigo-300 pb-20">
        <Filters
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <ul className="flex w-3/4 flex-col gap-3 border-2 border-indigo-300 border-solid p-5 rounded-xl max-md:text-sm">
          {currentPosts.map(({ id, date, title, subtitle }) => {
            return (
              <li className="group shadow-indigo-500/50" key={id}>
                <Link
                  className="flex flex-col border-indigo-300 border-b-2 border-solid pt-2 pb-1"
                  href={`/blog/${id}`}
                >
                  <div className="duration-300 flex justify-between items-center">
                    <h2 className="mx-2 truncate">{title}</h2>
                    <p className="text-sm mx-2 whitespace-nowrap max-w-1/2">
                      {date}
                    </p>
                  </div>
                  <p className="text-xs mx-2 max-w-3/4 truncate opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 max-xl:opacity-100">{subtitle}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center w-3/4 mt-10 gap-2">
          {pageNumbers.map((number) => (
            <button
              className="duration-300 hover:text-indigo-500"
              key={number}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </section>
    </Transition>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const tags = getAllTags();
  return {
    props: {
      allPostsData,
      tags,
    },
  };
}
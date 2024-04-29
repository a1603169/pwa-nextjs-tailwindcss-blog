import Link from "next/link";
import { useState } from "react";
import Transition from "@/components/Transition";
import Filters from "@/components/Filters";
import { getSortedPostsData, getAllTags } from "@/lib/post";

export default function Blog({
  allPostsData,
  tags,
}: {
  allPostsData: {
    date: string;
    title: string;
    subtitle: string;
    id: string;
    tags: string[];
    content?: string;
  }[];
  tags: object;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 유효한 문자열로 변환
  const normalizeString = (str: string) => str.toLowerCase().trim();

  let filteredPosts = allPostsData.filter((post) => {
    const title = normalizeString(post.title || "");
    const subtitle = normalizeString(post.subtitle || "");
    const content = normalizeString(post.content || "");
    const search = normalizeString(searchTerm);

    return (
      (selectedTags.length === 0 || selectedTags.some((tag) => post.tags?.includes(tag))) &&
      (search === "" || title.includes(search) || subtitle.includes(search) || content.includes(search))
    );
  });

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
        <h3>검색 키워드</h3>
        <input
          type="text"
          placeholder="검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 border-2 border-indigo-300 border-solid p-2 w-3/4 rounded-lg max-md:text-sm"
        />
        
        <Filters
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setCurrentPage={setCurrentPage}
        />

        <ul className="flex w-3/4 flex-col gap-5 border-2 border-indigo-300 border-solid p-5 rounded-xl max-md:text-sm">
          {currentPosts.map(({ id, date, title, subtitle, tags }) => (
            <li className="group relative shadow-indigo-500/50" key={id}>
              <Link
                className="flex flex-col border-indigo-300 border-b-2 border-solid pt-2 pb-1"
                href={`/blog/${id}`}
              >
                <div className="duration-300 flex justify-between items-center overflow-x-hidden">
                  <div className="overflow-x-hidden">
                    <h2 className="mx-2">{title}</h2>
                  </div>
                  <p className="text-sm mx-2 whitespace-nowrap max-w-1/2">
                    {date}
                  </p>
                </div>

                  <div className="overflow-x-hidden">
                    <p className="text-sm mx-2 my-1 mb-2 whitespace-nowrap hover:max-sm:animate-marquee">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-300 text-indigo-50 px-2 py-1 rounded-lg mr-1 max-sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>
                  
                  <p className="text-xs mx-2 max-w-3/4 truncate opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 max-xl:opacity-100">
                    {subtitle}
                  </p>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center w-3/4 mt-10 gap-2">
          {pageNumbers
            .slice(Math.max(0, currentPage - 5), currentPage + 5)
            .map((number) => (
              <a
                className={`duration-300 hover:text-indigo-500 ${
                  number === currentPage ? "underline" : ""
                }`}
                key={number}
                href="#blogContents"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </a>
            ))}
          {currentPage < pageNumbers.length - 5 && <span>...</span>}
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
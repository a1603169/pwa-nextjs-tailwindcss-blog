import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/post";
import Head from "next/head";
import { useLayoutEffect, useState } from "react";

export default function Post({
  postData,
  allPostsData,
}: {
  postData: {
    title: string;
    date: string;
    tags: string[];
    contentHtml: string;
  };
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const handleNextPost = () => {
    const currentIndex = allPostsData.findIndex(
      (post) => post.title === postData["title"]
    );
    if (currentIndex !== -1 && currentIndex < allPostsData.length - 1) {
      const nextPostId = allPostsData[currentIndex + 1].id;
      return nextPostId;
    }
  };
  const handlePrevPost = () => {
    const currentIndex = allPostsData.findIndex(
      (post) => post.title === postData["title"]
    );
    if (currentIndex > 0) {
      const prevPostId = allPostsData[currentIndex - 1].id;
      return prevPostId;
    }
    return undefined;
  };

  const [h3Ids, setH3Ids] = useState<string[]>([]);

  useLayoutEffect(() => {
    // Add id by its content on all h3 tags for anchor links 
    const h3s = document.querySelectorAll("h3");
    const newH3Ids: string[] = [];
    h3s.forEach((h3) => {
      const id = h3.textContent?.toLowerCase().replace(/\s/g, "-");
      h3.setAttribute("id", id!);
      newH3Ids.push(h3.id);
    });
    // strongs.forEach((strong) => {
    //   const id = strong.textContent?.toLowerCase().replace(/\s/g, "-");
    //   strong.setAttribute("id", id!);
    //   newH3Ids.push(strong.id);
    // });
    setH3Ids(newH3Ids);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css"
          rel="stylesheet"
        />
        <title>{postData.title}</title>
        <meta name="description" content={postData.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="relative flex flex-col justify-center text-xl gap-5 pb-14 max-w-800 w-full my-0 mx-auto px-2">
      {h3Ids.length > 0 ?
          (
            <ul className="flex flex-col gap-2">
              <h2 className="text-slate-500">INDEX</h2>
              {h3Ids.map((idtag, idx) => {
                return (
                  <li
                    key={idx}
                    className="truncate bg-slate-300 text-red-400 py-0.5 px-2 rounded-lg text-sm"
                  >
                    <a href={`#${idtag}`}>{idtag}</a>
                  </li>
                );
              })}
            </ul>
          )
           :
           null }
        <div className="flex flex-col w-full items-start">
          <h1 className="text-3xl w-full">{postData.title}</h1>
          <p className="whitespace-nowrap">{postData.date}</p>
          <ul className="flex gap-2">
            {postData.tags.map((tag, idx) => {
              return (
                <li
                  key={idx}
                  className="whitespace-nowrap bg-slate-400  text-slate-50 py-0.5 px-2 rounded-lg text-sm"
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="text-indigo-500 w-full"></hr>
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className="flex justify-between w-full">
          {handlePrevPost() !== undefined ? (
            <button className="duration-300 bg-indigo-50 px-2 rounded-lg text-indigo-500 hover:text-indigo-50 hover:bg-indigo-500">
              <Link href={handlePrevPost()!}> Prev </Link>
            </button>
          ) : (
            <button></button>
          )}
          {handleNextPost() !== undefined ? (
            <button className="duration-300 bg-indigo-50 px-2 rounded-lg text-indigo-500 hover:text-indigo-50 hover:bg-indigo-500">
              <Link href={handleNextPost()!}> Next </Link>
            </button>
          ) : (
            <button></button>
          )}
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSortedPostsData().map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
};

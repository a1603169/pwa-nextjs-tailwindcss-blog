import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/post";
import Head from "next/head";
import PeronsalHead from "@/components/PersonalHead";
import { useEffect, useState } from "react";

export default function Post({
  postData,
  allPostsData,
}: {
  postData: {
    title: string;
    subtitle: string;
    date: string;
    tags: string[];
    contentHtml: string;
  };
  allPostsData: {
    date: string;
    title: string;
    subtitle: string;
    id: string;
  }[];
}) {
  const handleNextPost = () => {
    const currentIndex = allPostsData.findIndex(
      (post) => post.title === postData["title"]
    );
    if (currentIndex !== -1 && currentIndex < allPostsData.length - 1) {
      const nextPostId = allPostsData[currentIndex + 1].id;
      const nextPostTitle = allPostsData[currentIndex + 1].title;
      return [nextPostId, nextPostTitle];
    }
  };
  const handlePrevPost = () => {
    const currentIndex = allPostsData.findIndex(
      (post) => post.title === postData["title"]
    );
    if (currentIndex > 0) {
      const prevPostId = allPostsData[currentIndex - 1].id;
      const prevPostTitle = allPostsData[currentIndex - 1].title;
      return [prevPostId, prevPostTitle];
    }
    return undefined;
  };

  const [h3Ids, setH3Ids] = useState<string[]>([]);

  useEffect(() => {
    // Add id by its content on all h3 tags for anchor links
    let h3s = document.querySelectorAll("h3");
    let newH3Ids: string[] = [];
    h3s.forEach((h3) => {
      const id = h3.textContent?.toLowerCase().replace(/\s/g, "-");
      h3.setAttribute("id", id!);
      newH3Ids.push(h3.id);
    });
    setH3Ids(newH3Ids);
  }, [postData]);

  // Add Utterances comments
  useEffect(() => {
    const anchor = document.getElementById("comments");

    // Check if the element exists in the DOM
    if (anchor) {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "a1603169/nextjs-tailwindcss-blog-portfolio"); // replace with your repo
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("theme", "github-light");
      script.crossOrigin = "anonymous";
      script.async = true;
      anchor.appendChild(script);
    }
  }, []);

  return (
    <>
      <Head>
        <PeronsalHead />
        <title>{postData.title}</title>
        <meta name="description" content={postData.title} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <article className="relative flex flex-col justify-center text-xl gap-5 pb-14 max-w-800 w-full my-0 mx-auto px-2 max-md:text-sm">
        {h3Ids.length > 0 ? (
          <>
            <ul className="flex flex-col gap-3 hidden max-xl:flex">
              <h2 className="text-slate-500">INDEX</h2>
              {h3Ids.map((idtag, idx) => {
                return (
                  <li
                    key={idx}
                    className="duration-300 truncate bg-slate-300 text-red-400 py-0.5 px-2 rounded-lg text-xl hover:shadow-lg max-md:text-sm"
                  >
                    <a className="block" href={`#${idtag}`}>
                      {idtag}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-3 fixed top-12/100 right-1/100 max-xl:hidden">
              <h2 className="text-slate-500">INDEX</h2>
              {h3Ids.map((idtag, idx) => {
                return (
                  <li
                    key={idx}
                    className="duration-300 truncate bg-slate-300 text-red-400 py-0.5 px-2 rounded-lg hover:shadow-lg text-sm"
                  >
                    <a className="block" href={`#${idtag}`}>
                      {idtag}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
        <div className="flex flex-col w-full items-start">
          <h1 className="text-3xl w-full max-md:text-lg">{postData.title}</h1>
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
            <div className="text-left">
              <button className="w-20	duration-300  bg-indigo-50 px-2 rounded-lg text-indigo-500 hover:text-indigo-50 hover:bg-indigo-500">
                <Link href={handlePrevPost()![0]}> Prev </Link>
              </button>
              <p>{handlePrevPost()![1].slice(0, 10)}...</p>
            </div>
          ) : (
            <button></button>
          )}
          {handleNextPost() !== undefined ? (
            <div className="text-right">
              <button className="w-20	duration-300 bg-indigo-50 px-2 rounded-lg text-indigo-500 hover:text-indigo-50 hover:bg-indigo-500">
                <Link href={handleNextPost()![0]}> Next </Link>
              </button>
              <p>{handleNextPost()![1].slice(0, 10)}...</p>
            </div>
          ) : (
            <button></button>
          )}
        </div>
        <div id="comments" className="w-full"></div>
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

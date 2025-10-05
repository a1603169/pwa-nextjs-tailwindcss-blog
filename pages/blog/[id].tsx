import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/post";
import Head from "next/head";
import PeronsalHead from "@/components/PersonalHead";
import { useEffect, useRef, useState } from "react";

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
  // 이전 글(next), 다음 글(prev) 계산
  const handlePrevPost = () => {
    const currentIndex = allPostsData.findIndex(
      (post) => post.title === postData["title"]
    );
    if (currentIndex !== -1 && currentIndex < allPostsData.length - 1) {
      const nextPostId = allPostsData[currentIndex + 1].id;
      const nextPostTitle = allPostsData[currentIndex + 1].title;
      return [nextPostId, nextPostTitle];
    }
  };
  const handleNextPost = () => {
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // h3에 id 자동 부여 (INDEX에 앵커 사용)
    let h3s = document.querySelectorAll("h3");
    let newH3Ids: string[] = [];
    h3s.forEach((h3) => {
      const id = h3.textContent?.toLowerCase().replace(/\s/g, "-");
      h3.setAttribute("id", id!);
      newH3Ids.push(h3.id);
    });
    setH3Ids(newH3Ids);

    // 테이블을 overflow-x-auto div로 감싸기
    if (contentRef.current) {
      const tables = contentRef.current.querySelectorAll("table");
      tables.forEach((table) => {
        // 가로 스크롤 div로 감싸기 + gentle 3D 효과 추가!
        if (!table.parentElement?.classList.contains("overflow-x-auto")) {
          const wrapper = document.createElement("div");
          // shadow-md: 입체적 그림자, rounded-xl: 라운드, border + border-gray-200: 테두리, bg-white: 밝은 배경
          wrapper.className =
            "overflow-x-auto my-4 shadow-md rounded-xl border border-gray-200 bg-white";
          table.parentNode!.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
        // 테이블에는 배경색 위주로만 부여 (추가 입체감 필요하면 아래 주석 해제)
        table.classList.add("bg-gray-50");
        // table.classList.add("shadow-sm", "rounded-lg", "border", "border-gray-200");
      });

      // 셀 텍스트 전체 왼쪽 정렬, 첫 열 공간
      const ths = contentRef.current.querySelectorAll("table th");
      const tds = contentRef.current.querySelectorAll("table td");
      ths.forEach((th) => {
        th.classList.add("text-left", "align-middle", "px-4", "py-2");
      });
      tds.forEach((td) => {
        td.classList.add("text-left", "align-middle", "px-4", "py-2");
      });

      const firstCells = contentRef.current.querySelectorAll(
        "table th:first-child, table td:first-child"
      );
      firstCells.forEach((cell) => {
        cell.style.minWidth = "100px";
        cell.style.whiteSpace = "nowrap";
      });

      // 헤더 컬럼 밝은 배경
      const theadThs = contentRef.current.querySelectorAll("table thead th");
      theadThs.forEach((th) => {
        th.classList.add("bg-gray-100", "font-semibold");
      });

      // 짝수 행 줄무늬
      const evenRows = contentRef.current.querySelectorAll(
        "table tbody tr:nth-child(even)"
      );
      evenRows.forEach((tr) => {
        tr.classList.add("bg-gray-100");
      });
    }
  }, [postData]);

  // Utterances 댓글 관련
  useEffect(() => {
    const anchor = document.getElementById("comments");
    if (anchor) {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "a1603169/pwa-nextjs-tailwindcss-blog");
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
      </Head>
      <article className="relative flex flex-col justify-center text-xl gap-5 pb-14 max-w-800 w-full my-0 mx-auto px-2 max-md:text-sm">
        {/* INDEX 렌더링 */}
        {h3Ids.length > 0 ? (
          <>
            <ul className="flex flex-col gap-3 hidden max-xl:flex">
              <h2 className="text-slate-500">INDEX</h2>
              {h3Ids.map((idtag, idx) => (
                <li
                  key={idx}
                  className="duration-300 truncate bg-slate-300 text-red-400 py-0.5 px-2 rounded-lg text-xl hover:shadow-lg max-md:text-sm"
                >
                  <a className="block" href={`#${idtag}`}>
                    {idtag}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3 fixed top-12/100 right-1/100 max-xl:hidden">
              <h2 className="text-slate-500">INDEX</h2>
              {h3Ids.map((idtag, idx) => (
                <li
                  key={idx}
                  className="duration-300 truncate bg-slate-300 text-red-400 py-0.5 px-2 rounded-lg hover:shadow-lg text-sm"
                >
                  <a className="block" href={`#${idtag}`}>
                    {idtag}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {/* 제목, 날짜, 태그 */}
        <div className="flex flex-col w-full items-start">
          <h1 className="text-3xl w-full max-md:text-lg">{postData.title}</h1>
          <p className="whitespace-nowrap">{postData.date}</p>
          <ul className="flex gap-2">
            {postData.tags.map((tag, idx) => (
              <li
                key={idx}
                className="whitespace-nowrap bg-slate-400 text-slate-50 py-0.5 px-2 rounded-lg text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <hr className="text-indigo-500 w-full"></hr>
        {/* 본문: 테이블별 가로 스크롤! */}
        <div ref={contentRef} className="prose prose-lg prose-indigo w-full">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        {/* 블로그 이전/다음 글 */}
        <div className="flex justify-between w-full">
          {handlePrevPost() !== undefined ? (
            <div className="text-left">
              <button className="w-20 duration-300 bg-indigo-50 px-2 rounded-lg text-indigo-500 hover:text-indigo-50 hover:bg-indigo-500">
                <Link href={handlePrevPost()![0]}> Prev </Link>
              </button>
              <p>{handlePrevPost()![1].slice(0, 10)}...</p>
            </div>
          ) : (
            <button></button>
          )}
          {handleNextPost() !== undefined ? (
            <div className="text-right">
              <button className="w-20 duration-300 bg-indigo-50 px-2 rounded-lg text-indigo-500 hover:text-indigo-50 hover:bg-indigo-500">
                <Link href={handleNextPost()![0]}> Next </Link>
              </button>
              <p>{handleNextPost()![1].slice(0, 10)}...</p>
            </div>
          ) : (
            <button></button>
          )}
        </div>
        {/* Utterances 댓글 */}
        <div id="comments" className="w-full"></div>
      </article>
    </>
  );
}

// SSG paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSortedPostsData().map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

// SSG props
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

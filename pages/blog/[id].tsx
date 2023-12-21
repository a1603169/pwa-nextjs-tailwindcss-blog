import { GetStaticProps, GetStaticPaths } from "next";
import { getPostData, getSortedPostsData } from "@/lib/post";
import Head from "next/head";
export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    tags: string[];
    contentHtml: string;
  };
}) {
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
      <article className="flex flex-col items-center justify-center text-xl gap-5 pb-14 max-w-800 w-full my-0 mx-auto px-2">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-3xl w-full">{postData.title}</h1>
          <p className="whitespace-nowrap">{postData.date}</p>
          <ul className="flex gap-2">
            {postData.tags.map((tag, idx) => {
              return (
                <li key={idx} className="whitespace-nowrap bg-slate-400  text-slate-50 py-0.5 px-2 rounded-lg text-sm">
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
  return {
    props: {
      postData,
    },
  };
};

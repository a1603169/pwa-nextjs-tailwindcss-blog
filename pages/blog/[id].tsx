import { GetStaticProps, GetStaticPaths } from "next";
import { getPostData, getSortedPostsData } from "@/lib/post";
import Head from "next/head";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <>
    <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coy-without-shadows.min.css" rel="stylesheet" />
      </Head>
    <article className="flex flex-col items-center justify-center text-xl gap-5 pb-14">
      <div className="flex justify-between w-11/12 items-center">
        <h1 className="text-3xl w-full">{postData.title}</h1>
        <p className="whitespace-nowrap">{postData.date}</p>
      </div>
      <hr className="text-indigo-500 w-11/12"></hr>
      <div className="w-11/12" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

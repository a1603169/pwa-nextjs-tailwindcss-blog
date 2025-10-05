// lib/posts.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
// @ts-ignore
import prism from "remark-prism";
import remarkGfm from "remark-gfm"; // ★ newly

const postsDirectory = path.join(process.cwd(), "./pages/blog/contents");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as { date: string; title: string; subtitle: string; tags: string[] }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
}

// 주요 변경: remark-gfm 추가
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(prism as any)
    .use(remarkGfm) // ★ 여기 추가
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; subtitle: string }),
  };
}

export function getAllTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      ...(matterResult.data as { tags: string[] }),
    };
  });
  const tags = allPostsData.map((post) => post.tags).flat();
  const tagCountMap: { [key: string]: number } = {};
  tags.forEach((tag) => {
    if (tagCountMap[tag]) tagCountMap[tag]++;
    else tagCountMap[tag] = 1;
  });
  return tagCountMap;
}

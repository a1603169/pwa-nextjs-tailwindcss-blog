// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark"; // 수정된 부분
import html from "remark-html";
import prism from "remark-prism"; // 수정된 부분
// import prism from 'remark-prism';
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// const unified = require('unified');
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
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
  .use(html, { sanitize: false })
  .use(prism)
  // .use(require('remark-prism'))
  .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}

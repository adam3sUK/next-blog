import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const getPost = async (slug: string): Promise<{ 
  date: string, 
  title: string, 
  body: string 
}> => {
  const source: string = await readFile(`content/posts/${slug}.md`, "utf-8");
  const {data: {date, title}, content}: matter.GrayMatterFile<string> = matter(source)
  const body = marked.parse(content);
  return { date, title, body };
};

export const getSlugs = async (): Promise<string[]> => {
  const suffix = '.md';
  const files: string[] = await readdir('content/posts');
  return files.filter(file => file.endsWith(suffix))
    .map(file => file.slice(0, -suffix.length));
};

export const getPosts = async (): Promise<{slug: string, title: string}[]> => 
  await getSlugs().then(async (slugs) => await Promise.all(
    slugs.map(async slug => 
      ({
        slug,
        title: ((await (
          getPost(slug)
        )).title)
      })
    )
  ));
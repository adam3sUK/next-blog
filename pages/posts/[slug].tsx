import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

interface staticPostProps {
  post: {
    title: string,
    date: string
    body: string
  }
}

export const getStaticPaths = async () => {
  const slugs: string[] = await getSlugs();
  return {
    paths: slugs.map(slug => (
      { params: { slug }}
    )),
    fallback: false
  };
}

export const getStaticProps = async ({params: {slug}}: {params: {slug: string}}): Promise<{props: staticPostProps}> => {
  const post = await getPost(slug);
  return {
    props: {
      post
    }
  }
} 

const PostPage = ({post: {title, body, date}}: staticPostProps) => {
  return (
    <>
      <Head>
        <title>{title} - My Blog</title>
        <meta name="description" content="This is my blog's about page" />
      </Head>
      <main>
        <h1>{title}</h1>
        <article dangerouslySetInnerHTML={{ __html: body }} />
        <aside>Created: {date}</aside>
      </main>
    </>
  )
}

export default PostPage;
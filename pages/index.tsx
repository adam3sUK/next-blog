import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export const getStaticProps = async () => {
  const posts: {slug: string, title: string}[] = await getPosts();
  return {
    props: { posts }
  }
};

const HomePage = ({posts}) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => 
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                  {post.title}
              </Link>
            </li>
          )}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
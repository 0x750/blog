import Head from "next/head";
import Layout from "../../components/Layout";

import { default as basePostStyle } from "../../styles/posts/BlogPost.module.css";

const SnippetsIndex = () => {
  return (
    <>
      <Head>
        <title>My snippets | blog.benoit.fi</title>
      </Head>

      <Layout>
        <h1 className={basePostStyle.postTitle}>My snippets</h1>
        <hr />
      </Layout>
    </>
  );
};

export default SnippetsIndex;

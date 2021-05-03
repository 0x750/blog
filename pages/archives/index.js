import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";
import published from "../../posts/published";

import { default as basePostStyle } from "../../styles/posts/BlogPost.module.css";

const Archives = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Archives | blog.benoit.fi</title>
      </Head>
      <Layout>
        <h1 className={basePostStyle.postTitle}>Archives</h1>
        <hr />
        {articles.map((article, key) => {
          return (
            <div key={key}>
              <code>{article.metadata.date}</code>{" "}
              <Link href={`/posts/${article.slug}`}>
                {article.metadata.title}
              </Link>
            </div>
          );
        })}
      </Layout>
    </>
  );
};

Archives.propTypes = {
  articles: PropTypes.array,
};

const getStaticProps = async () => {
  const articles = published.map((v) => {
    return {
      slug: v,
      metadata: require(`../../posts/${v}.js`).metadata,
    };
  });

  return {
    props: { articles },
  };
};

export { Archives as default, getStaticProps };

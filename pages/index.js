import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import About from "../components/About";
import published from "../posts/published";

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Home | blog.benoit.fi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />

        <h2>Recent posts</h2>
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
    </div>
  );
};

Home.propTypes = {
  articles: PropTypes.array,
};

const getStaticProps = async () => {
  const articles = published.map((v) => {
    return {
      slug: v,
      metadata: require(`../posts/${v}.js`).metadata,
    };
  });

  return {
    props: { articles },
  };
};

export { Home as default, getStaticProps };

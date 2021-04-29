import Layout from "../../components/Layout";

import { default as basePostStyle } from "../../styles/posts/BlogPost.module.css";

const PostIndex = () => {
  return (
    <Layout>
      <h1 className={basePostStyle.postTitle}>Recent posts</h1>
      <hr />
    </Layout>
  );
};

export default PostIndex;

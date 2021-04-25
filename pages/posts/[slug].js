import Head from "next/head";

const BlogPost = ({ slug, metadata }) => {

    const Component = require(`../../posts/${slug}.js`).default;
    const ReactDOMServer = require("react-dom/server");

    const ssr = ReactDOMServer.renderToString(<Component />);

    return (
        <>
            <Head>
                <title>{metadata.title ? metadata.title + ' | blog.benoit.fi' : 'blog.benoit.fi'}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: ssr }} />
        </>
    );
}

const getStaticPaths = async () => {

    return {
        paths: [
            { params: { slug: 'learning-powershell' } },
            // { params: { slug: 'websocket-crypto' } },
        ],
        fallback: false
    }
}

const getStaticProps = async ({ params }) => {
    const { slug } = params;
    return {
        props: {
            slug: slug,
            metadata: require(`../../posts/${slug}.js`).metadata
        }
    };
}

export default BlogPost;
export {
    getStaticPaths,
    getStaticProps
};
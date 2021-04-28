import Head from "next/head";
import published from "../../posts/published";
// import dynamic from "next/dynamic";

const BlogPost = ({ slug, metadata }) => {

    // if(process.browser) {
    //     let Component = dynamic(() => import(`../../posts/${slug}.js`));

    //     return (
    //         <>
    //             <Head>
    //                 <title>{metadata.title ? metadata.title + ' | blog.benoit.fi' : 'blog.benoit.fi'}</title>
    //             </Head>
    //             <Component />
    //         </>
    //     );
    // }

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
        paths: published.map((v) => { return { params: { slug: v } }}),
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
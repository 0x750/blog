import Layout from "../../components/Layout"
import dynamic from "next/dynamic"

const BlogPost = ({ slug }) => {

    const Rendered = dynamic(() => import(`../../posts/${slug.slug}.js`))

    return(<Rendered />)
}

const getStaticPaths = async () => {

    return {
        paths: [
            { params: { slug: 'learning-powershell' } },
        ],
        fallback: false
    }
}

const getStaticProps = async ({ params }) => {
    return {props: {slug: params}};
}

export default BlogPost;
export {
    getStaticPaths,
    getStaticProps
};
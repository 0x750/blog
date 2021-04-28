import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import { default as BasePostStyle } from '../styles/posts/BlogPost.module.css'

const Error = () => {
    return (
        <>
            <Head>
                <title>404 | blog.benoit.fi</title>
            </Head>
            <Layout>
                <h1 className={BasePostStyle.postTitle}>404 | Not found</h1>
                <p>😳</p>
                <hr />
                <Link href="/">&larr; Back to the homepage</Link>
            </Layout>
        </>
    )
}

export default Error;
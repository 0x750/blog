import Head from 'next/head'

// import Header from '../components/Header'
import Layout from '../components/Layout'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | blog.benoit.fi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Layout>
        <About />
      </Layout>


    </div>
  )
}

import styles from "../styles/posts/BlogPost.module.css"
import Layout from "../components/Layout"

export const metadata = {
    date: '22-04-2021',
    title: 'Understanding WebSocket with React and a cryptocurrency exchange API',
}

const WebSocketCrypto = () => {
    return (
        <Layout>
            <h1 className={styles.posttitle}>Understanding WebSocket with React and a cryptocurrency exchange API</h1>
            <p className={styles.subTitle}>Let's make a React component that retrieve data from a WebSocket server and see why it is useful.</p>
            <hr />
        </Layout>
    )
}

export default WebSocketCrypto;
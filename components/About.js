import styles from '../styles/components/Home.module.css';


import {default as basePostStyle } from "../styles/posts/BlogPost.module.css"

const About = () => {
    return (
        <>
            <h1 className={basePostStyle.postTitle}>Welcome</h1>
            <h2>About me</h2>
            <p>My name is <stong>Benoit</stong> and i write software and do film photography.</p>
            <p className={styles.graphicDesign}>graphic design is my passion</p>
        </>
    );
}

export default About;
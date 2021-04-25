import styles from "../styles/components/Footer.module.css"

import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <span className={styles.logo}>B</span>
            </Link>
            <div className={styles.links}>
                <Link href="/">home</Link>
                {' '}/{' '}
                <Link href="/archives">archives</Link>
                {' '}/{' '}
                <a href="mailto:contact@benoit.fi">mail</a>
                {' '}/{' '}
                <a target="blank" href="https://github.com/0x750">github</a>
                <br/>
                © 2021, Benoit
            </div>
        </div>
    )
}

export default Footer;
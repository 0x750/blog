import Link from 'next/link';
import styles from '../styles/components/Header.module.css';

const Header = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/">
                    <span className={styles.logo}>B</span>
                </Link>
                <Link href="/">
                    <span className={styles.menuitems}>home</span>
                </Link>
                <Link href="/archives">
                    <span className={styles.menuitems}>archives</span>
                </Link>
                <span className={styles.menuitems}><a href="mailto:contact@benoit.fi">mail</a></span>
            </div>
        </div>
    )
}

export default Header;
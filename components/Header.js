import { useState } from 'react';

import Link from 'next/link';
import styles from '../styles/components/Header.module.css';

import { useSpring, animated } from 'react-spring'

const Header = () => {

    const [menuIsOpened, setMenuIsOpened] = useState(false);

    const itemSpringStyles = [0, 600, 800, 1000].map((v) =>
        useSpring({
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: v,
            config: {
                duration: 500,
            },
        })
    );

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/">
                    <animated.div style={itemSpringStyles[0]}>
                        <span className={styles.logo}>B</span>
                    </animated.div>
                </Link>
                <Link href="/">
                    <animated.div style={itemSpringStyles[1]}>
                        <span className={styles.menuitems}>home</span>
                    </animated.div>
                </Link>
                <Link href="/archives">
                    <animated.div style={itemSpringStyles[2]}>
                        <span className={styles.menuitems}>archives</span>
                    </animated.div>
                </Link>
                <animated.div style={itemSpringStyles[3]}>
                    <span className={styles.menuitems}><a href="mailto:contact@benoit.fi">mail</a></span>
                </animated.div>
                <animated.div style={itemSpringStyles[1]}>
                    <div onClick={() => setMenuIsOpened(!menuIsOpened)} className={styles.hamburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </animated.div>
            </div>
            {menuIsOpened &&
                <div className={styles.mobileMenu}>
                    <Link href="/">
                        <div>
                            <span className={styles.menuitems}>home</span>
                        </div>
                    </Link>
                    <Link href="/archives">
                        <div>
                            <span className={styles.menuitems}>archives</span>
                        </div>
                    </Link>
                    <div>
                        <span className={styles.menuitems}><a href="mailto:contact@benoit.fi">mail</a></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;
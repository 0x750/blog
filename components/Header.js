import { useState } from 'react';

import Link from 'next/link';
import styles from '../styles/components/Header.module.css';

import { useSpring, animated, config } from 'react-spring'

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
            {menuIsOpened && <MobileMenu closeFunction={setMenuIsOpened} />}
        </div>
    )
}

const MobileMenu = ({closeFunction}) => {

    const springStyles = [0, 200, 400].map((v) =>
        useSpring({
            from: {
                opacity: 0,
                right: '20px',
            },
            to: {
                opacity: 1,
                right: '0px',
            },
            delay: v,
            config: config.wobbly,
        })
    );

    return (
        <div className={styles.mobileMenu}>
            <animated.div style={springStyles[0]}>
                <Link href="/">
                    <span onClick={() => closeFunction(false)} className={styles.menuitems}>home</span>
                </Link>
            </animated.div>
            <animated.div style={springStyles[1]}>
                <Link href="/archives">
                    <span onClick={() => closeFunction(false)} className={styles.menuitems}>archives</span>
                </Link>
            </animated.div>
            <animated.div style={springStyles[2]}>
                <span onClick={() => closeFunction(false)} className={styles.menuitems}><a href="mailto:contact@benoit.fi">mail</a></span>
            </animated.div>
        </div>
    )
}


export default Header;
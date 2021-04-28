import { useState } from 'react';

import Link from 'next/link';
import styles from '../styles/components/Header.module.css';

import { useSpring, animated, config } from 'react-spring'

const Header = () => {

    const [menuIsOpened, setMenuIsOpened] = useState(false);

    const itemSpringStyles = [0, 600, 800, 1000, 1200, 1400].map((v) =>
        useSpring({
            from: {
                opacity: 0,
                position: 'relative',
                top: '-10px',
            },
            to: {
                opacity: 1,
                position: 'relative',
                top: '0px',
            },
            delay: v,
            config: config.wobbly,
        })
    );

    return (
        <header className={styles.navbar}>
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
                <animated.div style={itemSpringStyles[4]}>
                    <span className={styles.menuitems}><a target="blank" href="https://github.com/0x750">github</a></span>
                </animated.div>
                <Link href="/snippets">
                    <animated.div style={itemSpringStyles[5]}>
                        <span className={styles.menuitems}>snippets</span>
                    </animated.div>
                </Link>

                <animated.div style={itemSpringStyles[1]}>
                    <div onClick={() => setMenuIsOpened(!menuIsOpened)} className={styles.hamburger}>
                        <div className={menuIsOpened ? styles.openedTop : ''}></div>
                        <div className={menuIsOpened ? styles.openedMiddle : ''}></div>
                        <div className={menuIsOpened ? styles.openedBottom : ''}></div>
                    </div>
                </animated.div>
            </div>
            {menuIsOpened && <MobileMenu closeFunction={setMenuIsOpened} />}
        </header>
    )
}

const MobileMenu = ({closeFunction}) => {

    const springStyles = [0, 200, 400, 600, 800].map((v) =>
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
            <animated.div style={springStyles[3]}>
                <span onClick={() => closeFunction(false)} className={styles.menuitems}><a target="blank" href="https://github.com/0x750">github</a></span>
            </animated.div>
            <animated.div style={springStyles[4]}>
                <Link href="/snippets">
                    <span onClick={() => closeFunction(false)} className={styles.menuitems}>snippets</span>
                </Link>
            </animated.div>
        </div>
    )
}


export default Header;
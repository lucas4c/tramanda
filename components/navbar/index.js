import react, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({children, ...restProps}) {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return ( 
        <nav className={navbar ? [styles.navbar, styles.active].join(' ') : styles.navbar} {...restProps}>
        <div className={styles.contact}>
          <div className={styles.location}>
            <span>Location</span>
            <div className={styles.locationMenu}>
              
            </div>
          </div>
          <div className={styles.language}>
            <span>Language</span>
          </div>
          <Link href="/">Link</Link>
        </div>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Image src="/tramanda-logo-dark.svg" layout='fill'></Image>
          </div>
          <div className={styles.menu}>
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
          </div>
        </div>
        <div className={styles.userArea}>
          <p>Sign In</p>
          <p>Bag</p>
          <div className={styles.searchButton}>
          </div>
        </div>
      </nav>
    );
}

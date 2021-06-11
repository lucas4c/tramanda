import react, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

function NavDropdown(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className={styles.dropdownContainer} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
      <span>{props.title}</span>
        {open && 
          <div className={styles.dropdown} onMouseLeave={() => setOpen(!open)}>
            {props.children}
          </div>
        }
        
    </li>
  );

}

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
        <ul className={styles.leftNav}>
          <li className={styles.contact}>
            <Link href="/">51 995-672-388</Link>
          </li>
          <NavDropdown title="Location">
            <ul>
              <li>Rio Grande do Sul</li>
              <li>Rio de Janeiro</li>
              <li>São Paulo</li>
            </ul>
          </NavDropdown>
          <NavDropdown title="Language">
            <ul>
              <li>Português Brasileiro</li>
              <li>Inglês</li>
            </ul>
          </NavDropdown>
        </ul>
        
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

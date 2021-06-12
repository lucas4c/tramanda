import react, { useState, useEffect } from 'react'
import styles from './styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

function NavDropdown(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className={styles.dropdownContainer} onClick={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
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
          {!navbar &&
            <NavDropdown title="Location">
            <ul>
              <li>Rio Grande do Sul</li>
              <li>Rio de Janeiro</li>
              <li>São Paulo</li>
            </ul>
          </NavDropdown>
          }
          {!navbar &&
          <NavDropdown title="Language">
          <ul>
            <li>Português Brasileiro</li>
            <li>Inglês</li>
          </ul>
        </NavDropdown>
        }
          
          
        </ul>
        
        <div className={styles.main}>
          <div className={styles.logo}>
            <Image src="/tramanda-logo-dark.svg" layout='fill'></Image>
          </div>
          <div className={styles.menu}>
            <Link href="/">GIFTS</Link>
            <Link href="/">WHAT'S NEW</Link>
            <Link href="/">MEN</Link>
            <Link href="/">WOMEN</Link>
            <Link href="/">CHILDREN</Link>
            <Link href="/">ABOUT</Link>
          </div>
        </div>
        <ul className={styles.rightNav}>
          <NavDropdown title="Bag">
            <ul>
              <li>Wave Logo T-Shirt</li>
              <li>Wave Stripe T-Shirt</li>
            </ul>
          </NavDropdown>
          <NavDropdown title="Sign In">
            <ul>
              <li>Register</li>
            </ul>
          </NavDropdown>
          <NavDropdown title="Favourites">
            <ul>
              <li>Wave Stripe T-Shirt</li>
            </ul>
          </NavDropdown>
          
          <li>
            <div className={styles.searchButton}>
            </div>
          </li>
        </ul>
      </nav>
    );
}

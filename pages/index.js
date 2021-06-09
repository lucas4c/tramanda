import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.contact}>
          <p>Location</p>
          <p>Language</p>
          <p>Phone</p>
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
    </div>
  )
}

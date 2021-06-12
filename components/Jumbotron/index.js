import react, { useState, useEffect } from 'react'
import styles from './styles/Jumbotron.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Jumbotron ({children, ...restProps}) {

    return (
        <div className={styles.jumbotron}>
            <Image src="/beach.jpg" layout="fill" objectFit="cover" objectPosition="bottom"></Image>
            <div className={styles.container}>
                <h3 className={styles.subtitle}>Feel the wave</h3>
                <h2 className={styles.title}>TRAMANDA</h2>
                <div className={styles.cta}>
                    <a href="/">Shop</a>
                    <a href="/">Learn More</a>
                </div>
            </div>
        </div>
    )

}
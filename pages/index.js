import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>Grow your Career with our Training</h1>
      <p className={styles.heroSubtitle}>Training when you need it</p>
      <a className={styles.btnAction}>Preview</a>
      <a className={styles.btnAction}>Purchase</a>
    </div>
  )
}

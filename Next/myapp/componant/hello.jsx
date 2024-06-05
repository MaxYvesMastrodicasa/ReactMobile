import styles from "@/styles/Home.module.css";


export default function Navbar(){
    return (
    <ul className={styles.ul}>
    <li className={styles.li}><a href="/">Home</a></li>
    <li className={styles.li}><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">Rick</a></li>
    <li className={styles.li}><a href="/contact">Contact</a></li>
    <li className={styles.li}><a href="/about">About</a></li>
  </ul>
  )
}
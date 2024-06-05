import UserContext from "@/context/UserContext"
import styles from "@/styles/navbar.module.css"
import Link from "next/link"
import { useContext } from "react"

export default function Navigation(){
    const { user } = useContext(UserContext)
    console.log(user)
    console.log(user == null)
    return(
        <>
        <div className={styles.navigationBar}>
                    
                <h1 className={styles.title}>Countrydle</h1>
                <div className={styles.navitems}>
                <div className={styles.game}>
                <Link href="/game"><span>Jeux</span></Link>
                </div>
                <div className={styles.game}>
                    <span className={styles.about}>A propos</span>
                </div>
                    {!user ? <button className={styles.connecttext}>Se connecter</button> : <p>Hello, {user.name}</p>}
                </div>
            </div>
        </>
    )
}

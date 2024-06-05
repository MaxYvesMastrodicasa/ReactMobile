import styles from "@/styles/footer.module.css"

export default function footer(){

    return(
        <>
            <div className={styles.footer}>
                <span className={styles.footerTitle}>Countrydle</span>
                <img className={styles.footerIcon} src="https://media4.giphy.com/media/l3V0megwbBeETMgZa/giphy.gif?cid=6c09b952p8ibhsz3yhdxl9swtg6di1q45qrqxnefp6bh5j0y&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                <span className={styles.copyright_text}>Copyright © 2024 || All rights Reserved</span>
            </div>
        </>

    )

}
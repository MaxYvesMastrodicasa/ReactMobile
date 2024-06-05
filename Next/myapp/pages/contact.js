import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Contact.module.css";
import Navbar from "@/componant/hello.jsx";
import logo from "../public/icons8-logo.gif";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <nav className={styles.description}>
        <div className={styles.logonavbar}>
          <Image
            className={styles.logonavbar}
            src={logo}
            alt="Notion Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        {Navbar()}
      </nav>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contact}>
            <h3>Contactez-nous</h3>
            <label>
              Prenom <input type="text" />
            </label>
            <label>
              Nom <input type="text" />
            </label>
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="france">France</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label>
              Email <input type="text" />
            </label>
            <label>
              Message <textarea></textarea>
            </label>
            <button>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}

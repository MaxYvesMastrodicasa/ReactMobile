import Head from "next/head";
import Image from "next/image";
import { Inter, Kameron } from "next/font/google";
import Afficheur from "@/component/afficheur";
import Kaamelott from "./api/kaamelott";
import style from "@/styles/monCSS.module.css"
import Counter from "@/component/counter";
import TodoList from "@/component/task";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <main className={style.background}>
    <Afficheur/>
    <Counter/>
    <TodoList/>
    </main>
    </>
  )
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import TodoList from "../component/task.jsx"
import style from "@/styles/monCSS.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <main className={style.background}>
      <TodoList/>
      </main>
  );
}

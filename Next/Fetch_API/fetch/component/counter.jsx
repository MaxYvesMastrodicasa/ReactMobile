import { useState } from "react";
import style from "@/styles/monCSS.module.css"

export default function Counter(){

    const [count, setCount] = useState(0);

    return (
        <div className={style.main_counter}>
            <h1 className={style.span_form}>Counter</h1>
            <span>{count}</span>
            <div className={style.button_set}>
                <button onClick={()=> {if (count<999) setCount(count+1)}}>Add</button>
                <button onClick={()=> {if (count>0) setCount(count-1)}}>Sub</button>
                <button onClick={()=> setCount(0)}>Reset</button>
            </div>
        </div>
    )
}
import { useContext, useState } from "react"
import style from "@/styles/main.module.css";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignin, setIsSignin] = useState(true);

    const { connection } = useContext(UserContext)

    const router = useRouter()

    const connect = async () => {
        let reponse;
        if (isSignin){
            reponse = await fetch("/api/signin", {
                method: "POST",
                body : JSON.stringify({
                    email: email,
                    password: password
                })
            })
        }
        else{
            console.log({email: email, name: name, password:password})
            reponse = await fetch("/api/signup", {
                method: "POST",
                body : JSON.stringify({
                    email: email,
                    password: password,
                    name: name
                })
            })
        }
        const { token } = await reponse.json()

        await connection(token)

        router.push("/game")
    }

  return(
        <div className={style.main_counter}>
            <div className={style.input}>
            <input
                type={isSignin ? "hidden" : "text"}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="PassWord"/>
          </div>
          <div className={style.button_set}>
            <button onClick={() => connect()}>Submit</button>
            <button onClick={() => setIsSignin(!isSignin)}>
              {isSignin ? "signup" : "signin"}
            </button>
          </div>
        </div>
  );
}

import Account from "../../components/Account";
import { Session } from "@supabase/supabase-js";

export default function AccountScreen() {
    return(
        <Account session={Session}/>
    );
}
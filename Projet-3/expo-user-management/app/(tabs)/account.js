import React, { useState, useEffect } from "react";
import Account from "../../components/Account";
import { supabase } from "../../lib/supabase";

export default function AccountScreen() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <Account session={session} />
  );
}

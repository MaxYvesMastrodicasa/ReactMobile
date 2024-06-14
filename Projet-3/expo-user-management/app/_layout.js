import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import Auth from "./../components/Auth";
import { supabase } from '../lib/supabase'


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [session, setSession] = useState(null);
  // charger les couleurs
  // charger les fonts
  // Afficher un splashScreen mentionnant Hello Isitech et le logo et
  // l'enlever lorsque vos assets (fonts, ...etc) sont correctement chargés
  // Utilisez le hook useEffect (et useState)

  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        supabase.auth.getSession().then(({ data: { Session } }) => {
          setSession(session)
        });
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
        })
      }
    }

    async function showAsync() {
      await SplashScreen.hideAsync();
    }
    prepare();
    showAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    
    return null;
  }


  return (
    <>
      {session && session.user ? (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      ) : (
        <Auth />
      )}
    </>
  );
}

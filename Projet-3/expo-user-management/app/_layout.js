import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import Auth from '../components/Auth';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // charger les couleurs
  // charger les fonts
  // Afficher un splashScreen mentionnant Hello Isitech et le logo et
  // l'enlever lorsque vos assets (fonts, ...etc) sont correctement chargés
  // Utilisez le hook useEffect (et useState)

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, (500)));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    async function showAsync() {
      await SplashScreen.hideAsync()
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
    
    <Stack>
      <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
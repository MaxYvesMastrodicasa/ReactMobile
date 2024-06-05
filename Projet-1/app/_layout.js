import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

export default function RouteLayout(){
    // charger les couleurs
    //charger le fonts

    //Afficher SplashScreen avec Hello Wolrd et logo
    //l'enlever lorsque asset correctement chargé
    //Utiliser le hook useEffect (useState si besoin)

    return(
        <Stack>
            <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
            <Stack.Screen name="+not-found"/>
        </Stack>
    );
}
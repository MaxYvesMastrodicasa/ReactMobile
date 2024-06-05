# React Native

### Créer une application RN avec Expo
```
npx create-expo-app --template blank
```

### Les vues et le dev mobile:

La vue c'est la brique de base de l'interface utilisateur dans React Native (RN).

Le composant `<View>` est à la racine de cette interface utilisateur.

```
npx expo start
```

### Pour lancer l'application :

```
npx expo start
```

#### Ou en mode tunnel :

```
npx expo start --tunnel
```

### Structure de l'appli :

- app : Contient les éléments de navigation. La structure du dossier app détermine la navigation de l'application.
- assets : Contient images et autres assets
- components: Contient tout les composants de l'app et ne sont pas destiné a etre des écrans.
- hook: Contient les hooks custom de l'app
- scripts: 
- app.json: Contient la config de l'app
- babel.config.js: Contient la config de babel

### Expo CLI
 Le cli expo permet de lancer l'app, la déployer, la build et la publier

 ### EAS Cli 
 EAS est un service de build et déploy d'EXPO. Il permet de build des app plus rapidement et de déployer les stores.

 ```
 npm install -g eas-cli
 ```

 ### Expo Router:

  C'est un router pour REact Native qui permet de naviguer entre les écrans de l'application en utilisant le sysstème de fichier (Suimilaire à Next.js)

  ```
  npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  ```

  #### <u><b>Package.json :</u></b>
  ```
   "main": "expo-router/entry",
  ```
  On modifie l'entrée de l'application pour pointer le dossier app

  ### Les composants de base:

  React Native est un FrameXork qui permet de creer des app mobiles crossplatforme en utilisant React. Il ets basé sur les composants de React.

  - Les Core Component de RN sont des composants de base qui permettent de creer des interfaces utilisateur. Ils utilisent des composants natifs pour créer des interface utilisateur

  ### En cas de modification majeure:
  ```
  npx expo start -c
  ```

  ### Ajout :
  ```
  npx expo install expo-splash-screen
  ```
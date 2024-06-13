import React, { useState, useCallback } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Info from "../../components/Info";
import MentionsLegales from "../../components/Mention";
import { useFocusEffect } from "expo-router";

const {height, width}= Dimensions.get('window');

export default function InfoScreen() {
  // Définir un état pour gérer l'affichage 
  const [view, setView] = useState(true);

   // Utilisation de useFocusEffect pour mettre la valeur de view à vrai (Chat GPT)
   useFocusEffect(
    useCallback(() => {
      setView(true);
    }, [])
  );

  return (
    <View style={styles.container}>
      {view ? (
        <Info setView={setView} />
      ) : (
        <MentionsLegales />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
});

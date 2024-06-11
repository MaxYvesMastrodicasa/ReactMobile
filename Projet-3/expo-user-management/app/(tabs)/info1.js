import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Info from "../../components/Info";
import MentionsLegales from "../../components/Mention";

export default function InfoScreen() {
  // Définir un état pour gérer l'affichage conditionnel
  const [view, setView] = useState(true);

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
  },
});

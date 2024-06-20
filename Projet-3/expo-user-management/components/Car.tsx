import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import { Session } from "@supabase/supabase-js";

const { height, width } = Dimensions.get("window");

export default function Car({ session }: { session: Session | null }) {
  const [existingProfile, setExistingProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [annee, setAnnee] = useState("");
  const [couleur, setCouleur] = useState("");
  const [plaque_immatriculation, SetPlaqueImmatriculation] = useState("");

  useEffect(() => {
    if (session) {
      getProfileCar();
    }
  }, [session]);

  async function getProfileCar() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("voiture")
        .select(
          `id, utilisateur_id, marque, modele, annee, couleur, plaque_immatriculation`
        )
        .eq("utilisateur_id", session.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setMarque(data.marque);
        setModele(data.modele);
        setAnnee(data.annee);
        setCouleur(data.couleur);
        SetPlaqueImmatriculation(data.plaque_immatriculation);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function insertProfileCar({
    marque,
    modele,
    annee,
    couleur,
    plaque_immatriculation,
  }: {
    marque: string;
    modele: string;
    annee: string;
    couleur: string;
    plaque_immatriculation: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const insert = {
        utilisateur_id: session.user.id,
        marque,
        modele,
        annee,
        couleur,
        plaque_immatriculation,
      };
      const { error } = await supabase.from("voiture").insert(insert);

      if (error) {
        console.log(error);
        throw error;
      }
      else{
        Alert.alert("Success", "Your car has been created successfully!");
        setExistingProfile(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfileCar({
    marque,
    modele,
    annee,
    couleur,
    plaque_immatriculation,
  }: {
    marque: string;
    modele: string;
    annee: string;
    couleur: string;
    plaque_immatriculation: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        marque,
        modele,
        annee,
        couleur,
        plaque_immatriculation,
      };
      const { error } = await supabase
        .from("voiture")
        .update(updates)
        .eq("utilisateur_id", session.user.id);

      if (error) {
        console.log(error);
        throw error;
      }
      Alert.alert("Success", "Your car has been updated successfully!");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View style={styles.verticallySpaced}>
        <Input
          label="Marque"
          leftIcon={{ type: "font-awesome", name: "user" }}
          leftIconContainerStyle={{ width: 45 }}
          placeholder="Marque"
          value={marque}
          onChangeText={(textmarque) => setMarque(textmarque)}
        />
        <Input
          label="Modèle"
          leftIcon={{ type: "font-awesome", name: "user" }}
          leftIconContainerStyle={{ width: 45 }}
          placeholder="Modèle"
          value={modele}
          onChangeText={(text) => setModele(text)}
        />
        <Input
          label="Année"
          leftIcon={{ type: "font-awesome", name: "user" }}
          leftIconContainerStyle={{ width: 45 }}
          placeholder="Année"
          value={annee.toString()}
          onChangeText={(text) => setAnnee(text)}
        />
        <Input
          label="Couleur"
          leftIcon={{ type: "font-awesome", name: "user" }}
          leftIconContainerStyle={{ width: 45 }}
          placeholder="Couleur"
          value={couleur}
          onChangeText={(text) => setCouleur(text)}
        />
        <Input
          label="Plaque d'immatriculation *"
          leftIcon={{ type: "font-awesome", name: "user" }}
          leftIconContainerStyle={{ width: 45 }}
          placeholder="XX-777-XX"
          value={plaque_immatriculation}
          onChangeText={(text) => SetPlaqueImmatriculation(text)}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        { existingProfile ?
          (
            <Button
          title={loading ? "Loading ..." : "Update Car"}
          onPress={() =>
            updateProfileCar({
              marque,
              modele,
              annee,
              couleur,
              plaque_immatriculation,
            })
          }
          disabled={loading}
        />
          ) : (
            <Button
          title={loading ? "Loading ..." : "Create Car"}
          onPress={() =>
            insertProfileCar({
              marque,
              modele,
              annee,
              couleur,
              plaque_immatriculation,
            })
          }
          disabled={loading}
        />
          )
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: width,
    height: height,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#86939e",
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  contour: {
    borderColor: "#86939e",
    borderWidth: 1,
    borderRadius: 4,
  },
  end: {
    marginBottom: 20,
  },
});

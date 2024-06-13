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
import Avatar from "./Avatar";
import { Session } from "@supabase/supabase-js";
import { Picker } from "@react-native-picker/picker";

const { height, width } = Dimensions.get("window");

export default function Account({ session }: { session: Session | null }) {
  const [loading, setLoading] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [role, setRole] = useState("covoitureur"); // Par défaut

  useEffect(() => {
    if (session) {
      if (session.user && session.user.email) {
        setEmail(session.user.email);
      }
      getProfile();
    }
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("utilisateur")
        .select(`email, nom, prenom, role, avatar_url`)
        .eq("id", session.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      console.log(session.user);
      if (data) {
        data.email = session.user.email;
        setEmail(data.email);
        setNom(data.nom);
        setPrenom(data.prenom);
        setRole(data.role);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    nom,
    prenom,
    role,
    avatar_url,
  }: {
    nom: string;
    prenom: string;
    role: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session.user.id,
        email,
        nom,
        prenom,
        role,
        avatar_url,
        updated_at: new Date(),
      };
      console.log("a")
      const { error } = await supabase.from("utilisateur").upsert(updates);

      if (error) {
        console.log(error);
        throw error;
      }
      console.log("b")
      Alert.alert("Success", "Your profile has been updated successfully!");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.center}>
          <Avatar
            size={200}
            url={avatarUrl}
            onUpload={(url: string) => {
              setAvatarUrl(url);
              updateProfile({ nom, prenom, role, avatar_url: url });
            }}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input label="Email" value={email} disabled />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Nom"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(text) => setNom(text)}
            value={nom}
            placeholder="Nom"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Prénom"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(text) => setPrenom(text)}
            value={prenom}
            placeholder="Prénom"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Text style={styles.label}>Rôle</Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Covoitureur" value="covoitureur" />
            <Picker.Item label="Covoituré" value="covoiture" />
          </Picker>
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title={loading ? "Loading ..." : "Update"}
            onPress={() =>
              updateProfile({ nom, prenom, role, avatar_url: avatarUrl })
            }
            disabled={loading}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.end]}>
          <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
        </View>
      </View>
    </ScrollView>
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
  end:{
    marginBottom:20,
  }
});

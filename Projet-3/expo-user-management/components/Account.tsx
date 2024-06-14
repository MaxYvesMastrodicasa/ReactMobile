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
  const [role, setRole] = useState("covoituré"); // Par défaut


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
        .select(`id, nom, role, avatar_url`)
        .eq("id", session.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setNom(data.nom);
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
    role,
    avatar_url,
  }: {
    nom: string;
    role: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session.user.id,
        nom,
        role,
        avatar_url,
      };
      const { error } = await supabase.from("utilisateur").upsert(updates);

      if (error) {
        console.log(error);
        throw error;
      }
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
              updateProfile({ nom, role, avatar_url: url });
            }}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input label="Email" value={email} disabled leftIcon={{ type: "font-awesome", name: "envelope" }}
            leftIconContainerStyle = {{width:45}}/>
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Nom"
            leftIcon={{ type: "font-awesome", name: "user" }}
            leftIconContainerStyle = {{width:45}}
            onChangeText={(text) => setNom(text)}
            value={nom}
            placeholder="Nom"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Text style={styles.label}>Rôle</Text>
          <View style={[styles.contour, styles.center]}>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Covoitureur" value="covoitureur" />
            <Picker.Item label="Covoituré" value="covoituré" />
          </Picker>
          </View>
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title={loading ? "Loading ..." : "Update"}
            onPress={() =>
              updateProfile({ nom, role, avatar_url: avatarUrl })
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
    borderColor:"#86939e",
    borderWidth:1,
    borderRadius:4,
  },
  end:{
    marginBottom:20,
  },
});

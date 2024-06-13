import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Obtenir la largeur et la hauteur de l'écran
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const id_List = "1"; // Id utilisé pour stocker et récupérer les données dans le cache


export default function Liste({ maCoquille }) {
  const [formList, setFormList] = useState([]);
  const [copiedText, setCopiedText] = React.useState("");

  // Utilisation de useEffect pour charger les données depuis AsyncStorage au montage du composant
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setFormList(data);
      }
    };
    fetchData(); // Mettre à jour l'état avec les données récupérées
  }, []);

  // Fonction pour ajouter un nouveau formulaire à la liste
  const handleAddForm = () => {
    if (maCoquille !== undefined) {
    const newList = [
      ...formList,
      { id: Date.now().toString(), title: maCoquille },
    ];
    setFormList(newList); // Mettre à jour l'état avec la nouvelle liste
    storeData(id_List, newList); // Sauvegarder la nouvelle liste dans le cache
  };
  };


  // Fonction pour sauvegarder des données dans le cache
  const storeData = async (id,value) => {
    try {
      const jsonValue = JSON.stringify(value); // conversion JSON
      await AsyncStorage.setItem(id, jsonValue); // sauvegarde liste
    } catch (e) {
      console.log("Failed to save data in cache", e);
    }
  };

  // Fonction pour récupérer les données dans le cache
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(id_List);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("Failed to get data from cache ", e)
    }
  };

  // Fonction pour supprimer un formulaire de la liste
  const handleSupprForm = (id) => {
    const updatedFormList = formList.filter(
      (maCoquille) => maCoquille.id !== id
    );
    setFormList(updatedFormList);
    storeData(id_List, updatedFormList);
  };

  // Fonction pour copier dans le presse-papier
  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={maCoquille} editable={false} clearTextOnFocus/>
      <TouchableOpacity style={styles.button} onPress={() => handleAddForm()}>
        <Text style={styles.buttonText}>Sauvegarder</Text>
      </TouchableOpacity>
      <View style={styles.listing}>
      <ScrollView >
        {formList.map((item, index) => (
          <View style={styles.formResult} key={index}>
            <Text style={styles.formResultText} onPress={()=>{copyToClipboard(item.title)}}>
              {item.title}
            </Text>
            <MaterialCommunityIcons
              name="trash-can"
              color="blue"
              style={styles.formResultIcon}
              onPress={() => handleSupprForm(item.id)}
            />
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 15,
    color: "#333",
    textAlign: "center",
  },
  input: {
    height: 'auto',
    minHeight: 40,
    width: width - 40,
    textAlign: "center",
    borderColor: "#e4b3bb",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: "black",
    backgroundColor: "#fff",
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  formResult: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    backgroundColor: "#d5efee",
    color: "#000",
    width: width - 40,
    height: "auto",
  },

  formResultText: {
    width: "70%",
    fontWeight: "bold",
    color: "black",
    height: "auto",
  },

  formResultIcon: {
    textAlign: "right",
    width: "15%",
    fontSize: 25,
    width: "auto",
    height: "auto",
  },

  error: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: width - 40,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },

  listing: {
    width: width - 40,
    height: height - 300,
  },

});

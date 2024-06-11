import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Récupérer la taille de l'écran
const { width } = Dimensions.get("window");
const blanc = "#f9f9f9"; // style
const sizeIcone = 50;

export default function Camera({ onScan }) {
  const [facing, setFacing] = useState("back");
  const [flash, setFlash] = useState(false);

  // Fonction pour changer de caméra
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // Fonction pour le Flash
  function toggleFlash() {
    setFlash((current) => (current === false ? true : false));
  }
  return (
    <CameraView
      style={styles.camera}
      facing={facing}
      barcodeScannerSettings={{ barcodeTypes: ['aztec' , 'ean13' , 'ean8' , 'qr' , 'pdf417' , 'upc_e' , 'datamatrix' , 'code39' , 'code93' , 'itf14' , 'codabar' , 'code128' , 'upc_a'] }}
      enableTorch={flash}
      onBarcodeScanned={(code) => onScan(code)}
      videoQuality="2160p"
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={(code) => onScan(code)}
        >
          <MaterialCommunityIcons
            name="qrcode-edit"
            color={blanc}
            size={sizeIcone}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <MaterialCommunityIcons
            name="camera-flip"
            color={blanc}
            size={sizeIcone}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleFlash}>
          {!flash ? (
            <MaterialCommunityIcons
              name="flash-off"
              color={blanc}
              size={sizeIcone}
            />
          ) : (
            <MaterialCommunityIcons
              name="flash"
              color={blanc}
              size={sizeIcone}
            />
          )}
        </TouchableOpacity>
      </View>
    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor: "transparent",
    marginBottom: 30,
    width: width,
  },
  button: {
    marginHorizontal: 20,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

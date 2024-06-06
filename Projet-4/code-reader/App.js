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
import Cam from "./components/Camera";

const { width } = Dimensions.get("window");

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [codeRead, setReader] = useState();
  const [scan, setScan] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function test(code) {
    setReader(code.data);
    setScan(true);
  }

  return (
    <View style={styles.container}>
      {scan ? (
        <>
          <View style={styles.underContainer}>
            <Text>{codeRead}</Text>
            <TouchableOpacity style={styles.pasbutton} onPress={() => setScan(false)}>
              <Text style={styles.text}>Scan Again</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Cam onScan={(code) => test(code)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  underContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: "transparent",
    marginHorizontal: 20,
    marginVertical: 30,
    borderColor: "green",
    borderWidth: 1,
  },
  pasbutton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderColor: "red",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});

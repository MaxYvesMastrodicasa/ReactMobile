import { CameraView, useCameraPermissions} from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';

const {width}= Dimensions.get("window");

export default function Camera({onScan}){

    let camera
    const [facing, setFacing] = useState('back');
    const [flash, setFlash] = useState(false);

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
      }
      function toggleFlash() {
        setFlash(current => (current === false ? true : false));
      }
    return(
        <CameraView style={styles.camera} facing={facing} barcodeScannerSettings={{barcodeTypes:["qr","code128"]}} enableTorch={flash} onBarcodeScanned={(code, camera) => onScan(code, camera)} videoQuality='2160p' > 
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleFlash}>
            <Text style={styles.text}>Flash</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      marginHorizontal: 20,
      marginBottom:30,
      width: width,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
import { Text,View,StyleSheet } from "react-native"

export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'ffffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    backgroundImage:{
        width:320,
        heught:480,
    }
  });
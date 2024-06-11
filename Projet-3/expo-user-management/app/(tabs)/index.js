import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const color = "#209fd0";
const size = 125; 

export default function HomeScreen (){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Bienvenue sur IsiCovoit</Text>
      <Text style={styles.subHeading}>Découvrez nos fonctionnalités</Text>

      <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={size}
            />
      <Text style={styles.text}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
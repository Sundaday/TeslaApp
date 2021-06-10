import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './Components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CarItem name={"Model X"}
        tagline={"Prix de départ à 90000€"}
        taglineCTA={"Commandez directement"}
        image={require('./assets/images/ModelX.jpeg')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

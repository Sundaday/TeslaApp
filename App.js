import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './Components/CarsList';
import Login from './Login';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CarsList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

});

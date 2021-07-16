import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainScreen from './Components/MainScreen';
import ContactScreen from './Components/ContactScreen';
import ProjectsScreen from './Components/ProjectsScreen';
import DoctorWebsite from './Components/DoctorWebsite';
import About from './Components/About';
import DRSProject from './Components/DRSProject';
import MapProject from './Components/MapProject';

export default function App() {
  return (
    <View>
      <MainScreen/>
  </View>

);
}



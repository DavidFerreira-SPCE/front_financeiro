import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';
import { Platform } from 'react-native';


export default function RootLayout() {
useEffect(() => {
  if (Platform.OS === 'android') {
    // Set the navigation bar style
    NavigationBar.setStyle('light');
  }
}, []);
  return (
  <>
    <StatusBar style="dark" />
    <Stack screenOptions={{headerShown:false}}/>;
  </>
  )
}

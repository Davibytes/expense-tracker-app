import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}

registerRootComponent(App);
export default App;
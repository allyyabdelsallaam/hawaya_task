import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { MainNavigation } from './src/Navigation/MainNavigation/MainNavigation';

const App: () => React$Node = () => {
  return (
    <MainNavigation />
  )
}

export default App;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { MainNavigation } from './src/Navigation/MainNavigation/MainNavigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} forceInset={{ top: 'always' }} >
        <MainNavigation />
      </SafeAreaView>
    </>
  )
}

export default App;

// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Pokedex from './src/pages/pokedex';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Pokedex />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,

  },
});

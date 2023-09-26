import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import SearchInput from './search'
import PokieTypesList from './pokieTypesList'
import PokieCardList from './pokieCardList'
import Header from './header'
const Pokedex = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Pokédex</Text> */}
      <Header />
      <SearchInput />
      {/* <PokieTypesList /> */}
      <PokieCardList />


    </View>
  )
}

export default Pokedex

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10
  },
  header: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textTransform: "uppercase"
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  }
})
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import pokeIcon from './assets/pokemon.svg'
import SearchInput from './search'
import PokieTypesList from './pokieTypesList'
import PokieCard from './pokieCard'
const Pokedex = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokedex</Text>
      <SearchInput />
      <PokieTypesList />
      <PokieCard />


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
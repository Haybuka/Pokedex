import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { padTo } from '../../utils/padTo'
import pokeIcon from './assets/pokemon.svg'
const Pokedex = () => {
  return (
    <View>
      <Text style={styles.header}>Pokedex</Text>
      <Image
        style={styles.image}
        source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padTo('https://pokeapi.co/api/v2/pokemon/6/')}.png` }}
        resizeMode='contain'
      />

    </View>
  )
}

export default Pokedex

const styles = StyleSheet.create({
  container: {

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
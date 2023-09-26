import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { padTo } from '../../utils/padTo'

const PokieCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padTo('https://pokeapi.co/api/v2/pokemon/6/')}.png` }}
        resizeMode='contain'
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Pokie card</Text>
        <Text style={styles.name}>{padTo('https://pokeapi.co/api/v2/pokemon/6/')}</Text>
      </View>


    </View>
  )
}

export default PokieCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 0,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 10,
    // backgroundColor: 'yellow',
    // justifyContent: 'space-between'
  },
  image: {
    height: 100,
    width: 100,
    // flex: 5
  },
  nameContainer: {
    flex: 1
  },
  name: {
    fontSize: 18
  }
})
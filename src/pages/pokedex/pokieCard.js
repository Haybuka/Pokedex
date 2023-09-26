import React from 'react'
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { padTo } from '../../utils/padTo'

const PokieCard = ({ name, url }) => {
  const randomNumbers = () => {
    const r = Math.floor(Math.random() * 255) + 1
    const g = Math.floor(Math.random() * 255) + 1
    const b = Math.floor(Math.random() * 255) + 1
    const a = Math.floor(Math.random()) + 1
    return `rgba(${r},${g},${b},${a})`
  }


  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: randomNumbers() }]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padTo(url)}.png` }}
          resizeMode='contain'
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{padTo(url)}</Text>
      </View>


    </TouchableOpacity>
  )
}

export default PokieCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 200,
    position: 'relative',
    height: 100,
    width: 100,
  },
  image: {
    height: 130,
    width: 130,
    position: 'absolute',
    top: -30,
    zIndex: 1
  },
  nameContainer: {
    flex: 1,
    marginLeft: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'white',
    textShadowOffset: {
      width: 5,
      height: -10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'red',
    elevation: 5
  }
})
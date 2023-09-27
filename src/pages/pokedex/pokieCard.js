import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { padTo } from '../../utils/padTo'
import { randomBackground } from '../../utils/randomRgb'
import elevation from '../../utils/elevation'
import { useNavigation } from '@react-navigation/native'

const PokieCard = ({ name, url }) => {
  const navigation = useNavigation()
  // console.log({ navigation })

  return (
    <TouchableOpacity onPress={() => navigation.navigate("About", { name, url })} style={[styles.container, styles.elevation, { backgroundColor: randomBackground() }]}>
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
  elevation,
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 5,
    marginHorizontal: 5,
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
import React from 'react'
import { ActivityIndicator, ScrollView, StatusBar, Text, View, useWindowDimensions } from 'react-native'
import axios from '../../../api/index'
import useGetPokemon from '../hooks/useGetPokemon';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { padTo } from '../../../utils/padTo';
import { FlatList } from 'react-native';
import PokieTypesList from '../pokieTypesList';
const AboutScreen = ({ route }) => {

  const name = route.params.name;
  const url = route.params.url;
  const { loading, pokemon, error } = useGetPokemon(name)
  const dimensions = useWindowDimensions()
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>

  height = Math.round((dimensions.width * 14) / 16)
  // console.log(pokemon.types)
  const padValue = padTo(url)
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.imageContainer, { height }]}>
        <Image
          source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padValue}.png` }}
          style={{ flex: 1 }}
          resizeMode='contain'
        />
        <View style={{ position: 'absolute', height: '100%', width: 100, right: 0, top: 5 }}>
          <Image
            source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
          <Image
            source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
          <Image
            source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
          <Image
            source={{ uri: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text >
          N
        </Text>
        <View style={{ position: 'absolute', top: -3, left: 10 }}>
          <Text>o</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text>{padValue}</Text>
        </View>
      </View>
      <FlatList
        data={pokemon.types}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <Text>{item.type.name}</Text>
          )
        }}
      />
      <PokieTypesList data={pokemon.types} />
    </ScrollView>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
    // paddingTop: StatusBar.currentHeight,
  },
  imageContainer: {
    width: "100%",
    // backgroundColor: 'red'
  },
  name: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: '600'
  }
})
import React from 'react'
import { ActivityIndicator, ScrollView, StatusBar, Text, View, useWindowDimensions } from 'react-native'
import axios from '../../../api/index'
import useGetPokemon from '../hooks/useGetPokemon';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { padTo } from '../../../utils/padTo';
import { FlatList } from 'react-native';
import PokieTypesList from '../pokieTypesList';
import AboutName from '../about/aboutName';
import AboutTypesList from '../about/aboutTypeList';
import AboutAbilitiesList from '../about/aboutAbilitiesList';
import AboutPhysicals from '../about/aboutPhysicals';
import AboutStatsList from '../about/aboutStatsList';
import { SvgUri } from 'react-native-svg';

const AboutScreen = ({ route }) => {

  const name = route.params.name;
  const url = route.params.url;
  const { loading, pokemon, error } = useGetPokemon(name)
  const dimensions = useWindowDimensions()
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>

  const height = Math.round((dimensions.width * 14) / 16)
  const padValue = Number(padTo(url))
  const stats = pokemon.stats
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.imageContainer, { height }]}>
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
          style={{ flex: 1 }}
          resizeMode='contain'
        />
        <View style={{ position: 'absolute', height: '100%', width: 100, right: -10, top: 5 }}>
          <Image

            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
          <SvgUri
            // width={250}
            // height={250}
            width={100}
            height={70}

            uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${padValue}.svg`}
          />
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${padValue}.png` }}
            style={{ flex: 1, elevation: 5, margin: 0.5 }}
            resizeMode='contain'
          />
        </View>
      </View>
      <AboutName padValue={padValue} name={name} />
      <AboutTypesList data={pokemon.types} />
      <AboutAbilitiesList data={pokemon.abilities} />
      <AboutPhysicals height={pokemon.height} weight={pokemon.weight} experience={pokemon.base_experience} />
      <AboutStatsList data={pokemon.stats} />

      <View>
        <Text>
          To get About :
          https://pokeapi.co/api/v2/pokemon-species/6/
        </Text>
        <Text>
          Get stat from pokemon request
        </Text>
        <Text>
          To render moves, use a modal
        </Text>
        <Text>
          To render evolution, use a modal
        </Text>
      </View>
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
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '600'
  }
})
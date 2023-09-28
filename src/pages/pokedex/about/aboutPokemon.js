import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import useGetPokemonAbout from '../hooks/useGetPokemonAbout'

const AboutPokemon = ({ id }) => {


  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>
  const { loading, about, error } = useGetPokemonAbout(id)
  const randomId = Math.floor(Math.random() * about?.flavor_text_entries?.length) + 1

  return (
    about?.flavor_text_entries?.length > 0 && (
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.name}>{about?.flavor_text_entries[randomId]?.flavor_text}</Text>

      </View>
    )
  )
}

export default AboutPokemon

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    // textTransform: 'capitalize',
  }
})
import React, { useEffect, useState } from 'react'
import axios from '../../api/index'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import useTypeHook from './hooks/useType'
import PokieTypesView from './pokieTypesView'

const PokieTypesList = () => {
  const { loading, error, pokemonTypes } = useType()
  // console.log(pokemonTypes)
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text style={{ fontSize: 20 }}>{error}</Text></View>
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Types lists</Text>
      <FlatList
        ListEmptyComponent={<Text>List Emptied</Text>}
        data={pokemonTypes}
        keyExtractor={(item) => item?.name}
        horizontal
        ItemSeparatorComponent={<View style={{ marginHorizontal: 20 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<PokieTypesView type={item.name} />)}
      />
    </View>
  )
}

export default PokieTypesList

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
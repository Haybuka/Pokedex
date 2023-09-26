import React from 'react'
import usePokieList from './hooks/usePokieList'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import PokieCard from './pokieCard'

const PokieCardList = () => {
  const { loading, pokemons, error } = usePokieList()
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<Text>List Emptied</Text>}
        data={pokemons}
        keyExtractor={(item) => item?.name}
        ItemSeparatorComponent={<View style={{ marginVertical: 5 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<PokieCard name={item.name} url={item.url} />)}

      />

    </View>
  )
}

export default PokieCardList

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginBottom: 30
  }
})
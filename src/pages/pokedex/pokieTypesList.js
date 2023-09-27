import React, { useEffect, useState } from 'react'
import axios from '../../api/index'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import useTypeHook from './hooks/useType'
import PokieTypesView from './pokieTypesView'

const PokieTypesList = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Type</Text>
      <FlatList
        ListEmptyComponent={<Text>List Emptied</Text>}
        data={data}
        keyExtractor={(item) => item?.name}
        horizontal
        ItemSeparatorComponent={<View style={{ margin: 10 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<PokieTypesView type={item.type.name} />)}
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
import React from 'react'
import AboutStatView from './aboutStatView'
import { FlatList, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const AboutStatsList = ({ data }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Stat</Text>
      <FlatList
        ListEmptyComponent={<Text>List Emptied</Text>}
        data={data}
        keyExtractor={(item) => item?.stat.name}
        // horizontal
        ItemSeparatorComponent={<View style={{ marginVertical: 5 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<AboutStatView name={item.stat.name} stat={item.base_stat} />)}
      />
    </View>
  )
}

export default AboutStatsList

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  }
})
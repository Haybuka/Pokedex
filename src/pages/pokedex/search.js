import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <FontAwesome style={styles.icon} name='search' size={20} />
      <TextInput style={styles.input} />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginHorizontal: 10
  },
  input: {
    paddingVertical: 10,
    // backgroundColor: 'red',
    flex: 4,
    fontSize: 18
  }
})
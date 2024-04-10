import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"

const SearchInput = ({ shown, handlePress }) => {

  const [search, setSearch] = useState('');
  return (
    shown ? (
      <TouchableOpacity style={styles.container}>
        <FontAwesome style={styles.icon} name='search' size={20} />
        <TextInput style={styles.input} value={search} onChangeText={setSearch} />
      </TouchableOpacity>) :
      (
        <TouchableOpacity onPress={handlePress} style={{ elevation: 3, backgroundColor: "#fff", borderRadius: 20, paddingVertical: 10, paddingHorizontal: 6, justifyContent: 'center', alignItems: "center" }}>
          <FontAwesome style={styles.icon} name='search' size={20} />
        </TouchableOpacity>)
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {

    marginVertical: 15,
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
    position: 'relative'
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
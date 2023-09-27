import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const AboutStatView = ({ name, stat }) => {

  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={{ borderRadius: 100 }}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={{ backgroundColor: 'white', flex: 6, borderRadius: 200 }}>
        <View style={{ width: stat * 2, justifyContent: 'center', backgroundColor: stat > 49 ? '#66CC66' : '#FF5733', height: 10, borderRadius: 200, alignItems: 'center' }}>

          <Text style={[styles.stat]}>{stat}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AboutStatView

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 5,
    // shadowOffset: {
    //   width: 5,
    //   height: 10
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 5,
    marginVertical: 5,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'

  },
  text: {
    fontSize: 18,
    textTransform: 'capitalize'
  },
  stat: {
    fontSize: 14,
    position: 'absolute', color: 'white'
  }
})

// elevation: 5,
// backgroundColor: 'white',
// paddingHorizontal: 20,
// paddingVertical: 10,
// borderRadius: 20,
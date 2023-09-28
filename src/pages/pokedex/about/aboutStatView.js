import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const AboutStatView = ({ name, stat }) => {

  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={{ borderRadius: 100 }}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={{ backgroundColor: 'white', flex: 6, borderRadius: 200 }}>
        <View style={{ width: stat * 2, justifyContent: 'center', backgroundColor: stat > 49 ? '#66CC66' : '#FF5733', height: 15, borderRadius: 200, alignItems: 'center' }}>

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
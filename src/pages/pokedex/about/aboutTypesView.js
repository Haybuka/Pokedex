import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getTypeDetails } from '../../../utils/typeDetails';

const AboutTypesView = ({ type }) => {
  const { borderColor, emoji, color } = getTypeDetails(type)
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: borderColor, justifyContent: 'space-between' }]}>
      <View style={{ backgroundColor: "#fff", borderRadius: 100 }}>
        <Text style={styles.text}>{emoji} </Text>
      </View>
      <Text style={[styles.text, { color }]}>{type}</Text>
    </TouchableOpacity>
  )
}

export default AboutTypesView

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 10,

  },
  text: {
    fontSize: 18,
    textTransform: 'capitalize'
  }
})

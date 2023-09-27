import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getTypeDetails } from '../../../utils/typeDetails';

const AboutAbilityView = ({ ability }) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text]}>{ability}</Text>
    </TouchableOpacity>
  )
}

export default AboutAbilityView

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 10,
    // width: 100,
    paddingVertical: 5,
    // shadowOffset: {
    //   width: 5,
    //   height: 10
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 5,
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

// elevation: 5,
// backgroundColor: 'white',
// paddingHorizontal: 20,
// paddingVertical: 10,
// borderRadius: 20,
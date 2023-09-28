import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AboutTab = ({ name, action, css }) => {
  return (
    <TouchableOpacity style={css} onPress={action}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default AboutTab

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'capitalize'
  }
})
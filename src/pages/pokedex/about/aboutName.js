import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

const AboutName = ({ name, padValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text >
          N
        </Text>
        <View style={{ position: 'absolute', top: -3, left: 10 }}>
          <Text>o</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text>{padValue}</Text>
        </View>
      </View>
    </View>
  )
}

export default AboutName

const styles = StyleSheet.create({

  container: { flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" },
  name: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: '600'
  }
})
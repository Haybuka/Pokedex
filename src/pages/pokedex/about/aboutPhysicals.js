import React from 'react'
import { Text, View } from 'react-native'

const AboutPhysicals = ({ height, weight, experience }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10, alignItems: "center", marginVertical: 10 }}>
      <View>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{height / 10} M</Text>
        <Text style={{ textAlign: 'center' }}>Height</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{weight / 10} KG</Text>
        <Text style={{ textAlign: 'center' }}>Weight</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{experience} </Text>
        <Text style={{ textAlign: 'center' }}>Experience</Text>
      </View>
    </View>
  )
}

export default AboutPhysicals
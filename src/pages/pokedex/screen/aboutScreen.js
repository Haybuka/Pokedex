import React from 'react'
import { Text, View } from 'react-native'
import axios from '../../../api/index'
const AboutScreen = ({ route }) => {
  // const name = navigation.getId();
  // console.log({ name }, "in about")
  const name = route.params.name;
  axios.get(`pokemon/${ditto}`)

  return (
    <View>
      <Text>About</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default AboutScreen
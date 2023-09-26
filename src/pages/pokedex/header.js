import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={require("./assets/pokemon.png")}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: '100%',
    height: 100
  }
})
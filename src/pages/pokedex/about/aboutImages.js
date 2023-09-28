
import { Image, View, StyleSheet, useWindowDimensions } from 'react-native'
import { SvgUri } from 'react-native-svg';

const AboutImages = ({ padValue }) => {
  const dimensions = useWindowDimensions()

  const height = Math.round((dimensions.width * 14) / 16)

  return (
    <View style={[styles.imageContainer, { height }]}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
        style={{ flex: 1 }}
        resizeMode='contain'
      />
      <View style={{ position: 'absolute', height: '100%', width: 100, right: -10, top: 5 }}>
        <Image

          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
          style={{ flex: 1, elevation: 5, margin: 0.5 }}
          resizeMode='contain'
        />
        <SvgUri
          width={100}
          height={70}

          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${padValue}.svg`}
        />
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
          style={{ flex: 1, elevation: 5, margin: 0.5 }}
          resizeMode='contain'
        />
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
          style={{ flex: 1, elevation: 5, margin: 0.5 }}
          resizeMode='contain'
        />
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${padValue}.png` }}
          style={{ flex: 1, elevation: 5, margin: 0.5 }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}

export default AboutImages

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
  }
})
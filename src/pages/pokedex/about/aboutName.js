
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg';

const AboutName = ({ padValue }) => {
  return (
    <View style={styles.container}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>

        <SvgUri
          width={25}
          height={25}
          uri={`https://www.svgrepo.com/show/276264/pokeball-pokemon.svg`}
        />
        <View >
          <Text style={styles.name}>{padValue}</Text>
        </View>
      </View>
    </View>
  )
}

export default AboutName

const styles = StyleSheet.create({

  container: { flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" },
  name: {
    fontSize: 30,
    textTransform: 'capitalize',
    fontWeight: '600',
    marginLeft: 5
  }
})
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


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
    paddingVertical: 5,
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

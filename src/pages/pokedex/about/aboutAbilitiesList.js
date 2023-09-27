
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AboutTypesView from './aboutTypesView'
import AboutAbilityView from './aboutAbilitiesView'

const AboutAbilitiesList = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ability</Text>
      <FlatList
        ListEmptyComponent={<Text>List Emptied</Text>}
        data={data}
        keyExtractor={(item) => item?.name}
        horizontal
        ItemSeparatorComponent={<View style={{ margin: 5 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<AboutAbilityView ability={item.ability.name} />)}
      />
    </View>
  )
}

export default AboutAbilitiesList

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

import { FlatList, StyleSheet, Text, View } from 'react-native'

import AboutTypesView from './aboutTypesView'

const AboutTypesList = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Type</Text> */}
      <FlatList
        ListEmptyComponent={<Text>List Emptied</Text>}
        data={data}
        keyExtractor={(item) => item?.name}
        horizontal
        ItemSeparatorComponent={<View style={{ margin: 5 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<AboutTypesView type={item.type.name} />)}
      />
    </View>
  )
}

export default AboutTypesList

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
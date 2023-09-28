import React from 'react'
import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import useGetPokemonAbout from '../hooks/useGetPokemonAbout'
import { padTo } from '../../../utils/padTo'


const AboutEvolution = ({ open, handleClose, id }) => {
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>
  const { loading, about, error } = useGetPokemonAbout(id)
  const varieties = about.varieties
  return (
    <Modal visible={open} presentationStyle='overFullScreen' animationType="slide">
      <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.modalHeader}>
          <Text style={{ fontSize: 18 }}>Evolution</Text>
          <TouchableOpacity onPress={handleClose}>
            <FontAwesome name='close' size={25} />
          </TouchableOpacity>
        </View>

        <View style={{ display: 'none' }}>
          <Text>
            To get About :
            https://pokeapi.co/api/v2/pokemon-species/6/
            also get species number from pokemon varieties
          </Text>
        </View>
        <FlatList
          ListEmptyComponent={<Text>List Emptied</Text>}
          data={varieties}
          keyExtractor={(item) => item?.pokemon.name}
          ItemSeparatorComponent={<View style={{ marginVertical: 5 }}></View>}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            const padValue = Number(padTo(item?.pokemon.url))
            return (<Text>{item.pokemon.name} {padValue}</Text>)
          }}
        />
      </View>
    </Modal>
  )
}

export default AboutEvolution

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
import React from 'react'
import { ActivityIndicator, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            return (
              <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${padValue}.png` }}
                    style={styles.image}
                    resizeMode='contain'
                    width={200}
                    height={200}
                  />
                </View>
                <Text style={{ textAlign: 'center', fontSize: 18, textTransform: 'capitalize' }}>{item.pokemon.name} {padValue}</Text>
              </View>
            )
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
    alignItems: 'center',
    paddingVertical: 20
  },
  imageContainer: {
    // paddingHorizontal: 20,
    paddingVertical: 5,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 200,
    shadowColor: 'black',
    alignItems: 'center'
  }
})
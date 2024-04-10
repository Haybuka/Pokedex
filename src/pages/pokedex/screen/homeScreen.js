import React, { useState } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native'
import Header from '../header'
import SearchInput from '../search'
import PokieCardList from '../pokieCardList'
import { useGetPokemons } from '../../../api/pokemon'
import { SvgUri } from 'react-native-svg';


const HomeScreen = ({ navigation }) => {

  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState('pokemon?offset=0&limit=20')
  const { data, isError, isLoading } = useGetPokemons(page);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handlePage = (pageType) => {
    switch (pageType) {
      case "prev":
        if (data?.previous !== null) {
          setPageNumber(pageNumber => pageNumber - 1);
          setPage(data.previous)
        }
        return;
      case "next":
        if (data?.next) {
          setPageNumber(pageNumber => pageNumber + 1)
          setPage(data.next)
        }
        return;
      default:
        break;
    }
  }

  const handlePress = () => {
    setModalIsOpen(prev => !prev)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <SearchInput shown={false} handlePress={handlePress} />
          <TouchableOpacity onPress={() => navigation.navigate("Favorite")} style={{ elevation: 3, backgroundColor: "#fff", borderRadius: 20, padding: 10, justifyContent: 'center', alignItems: "center" }}>
            <SvgUri
              width={25}
              height={25}
              stroke={'red'}
              strokeWidth={0.4}
              uri={`https://www.svgrepo.com/show/524063/heart.svg`}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.paginatedContainer}>
          <View style={styles.pagination}>
            <TouchableOpacity onPress={() => handlePage("prev")}>
              <SvgUri
                width={20}
                height={20}
                stroke={'red'}
                strokeWidth={0.4}
                uri={`https://www.svgrepo.com/show/522035/chevron-left.svg`}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10 }}>{pageNumber}</Text>
            <TouchableOpacity onPress={() => handlePage("next")} >
              <SvgUri
                width={20}
                height={20}
                stroke={'red'}
                strokeWidth={0.4}
                uri={`https://www.svgrepo.com/show/522043/chevron-right.svg`}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <PokieCardList pokemons={data?.results} loading={isLoading} error={isError} />
      </ScrollView>

      <Modal visible={modalIsOpen} presentationStyle='overFullScreen' animationType="slide">
        <ScrollView>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Search Pokedex</Text>
              <TouchableOpacity onPress={handlePress} >
                <SvgUri
                  width={20}
                  height={20}
                  stroke={'red'}
                  strokeWidth={0.4}
                  uri={`https://www.svgrepo.com/show/410349/cancel.svg`}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
              <SearchInput shown={true} handlePress={handlePress} />
            </View>

          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,

  },
  paginatedContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: "center"
  },
  button: {
    fontSize: 20,
    marginHorizontal: 15
  },
  header: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textTransform: "uppercase",

  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    shadowOffset: {

    }
  }
})
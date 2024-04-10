import React, { useState } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Header from '../header'
import SearchInput from '../search'
import PokieCardList from '../pokieCardList'
import { useGetPokemons } from '../../../api/pokemon'
import { SvgUri } from 'react-native-svg';


const HomeScreen = ({ navigation }) => {

  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState('pokemon?offset=0&limit=20')
  const { data, isError, isLoading } = useGetPokemons(page);

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


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <SearchInput shown={false} />
          <TouchableOpacity style={{ elevation: 3, backgroundColor: "#fff", borderRadius: 20, padding: 10, justifyContent: 'center', alignItems: "center" }}>
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
            <TouchableOpacity onPress={() => handlePage("prev")}><Text style={styles.button}>{`<`}</Text></TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{pageNumber}</Text>
            <TouchableOpacity onPress={() => handlePage("next")}><Text style={styles.button}>{`>`}</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <PokieCardList pokemons={data?.results} loading={isLoading} error={isError} />
      </ScrollView>


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
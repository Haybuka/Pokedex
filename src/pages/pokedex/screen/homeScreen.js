import React, { useState } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Header from '../header'
import SearchInput from '../search'
import PokieCardList from '../pokieCardList'
import PokieTypesList from '../pokieTypesList'
import { useGetPokemons } from '../../../api/pokemon'


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

  console.log(data.results)
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <View style={styles.paginatedContainer}>
        <View style={styles.pagination}>
          <TouchableOpacity onPress={() => handlePage("prev")}><Text style={styles.button}>{`<`}</Text></TouchableOpacity>
          <Text>{pageNumber}</Text>
          <TouchableOpacity onPress={() => handlePage("next")}><Text style={styles.button}>{`>`}</Text></TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* <PokieTypesList /> */}
        <PokieCardList pokemons={data.results} loading={isLoading} error={isError} />
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
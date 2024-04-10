import React, { useState } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Header from '../header'
import SearchInput from '../search'
import PokieCardList from '../pokieCardList'
import PokieTypesList from '../pokieTypesList'


const HomeScreen = ({ navigation }) => {

  const [pageNumber, setPageNumber] = useState(20);


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <View style={styles.paginatedContainer}>
        <View style={styles.pagination}>
          <TouchableOpacity onPress={() => pageNumber > 20 && setPageNumber(pageNumber => pageNumber - 20)}><Text style={styles.button}>{`<`}</Text></TouchableOpacity>
          <Text>{pageNumber / 10}</Text>
          <TouchableOpacity onPress={() => setPageNumber(pageNumber => pageNumber + 20)}><Text style={styles.button}>{`>`}</Text></TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* <PokieTypesList /> */}
        <PokieCardList pageNumber={pageNumber} />
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
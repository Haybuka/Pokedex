import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import Header from '../header'
import SearchInput from '../search'
import PokieCardList from '../pokieCardList'
import PokieTypesList from '../pokieTypesList'


const HomeScreen = ({ navigation }) => {
  // console.log({ navigation })
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <ScrollView>
        {/* <PokieTypesList /> */}
        <PokieCardList />
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
  header: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textTransform: "uppercase",

  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  }
})
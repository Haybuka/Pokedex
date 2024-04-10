import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import SearchInput from '../search';
// import PokieCard from '../pokieCard'
function SearchScreen(props) {

  const [pokieSearch, setPokieSearch] = useState('')
  const handlePress = () => { };

  const handleSearch = (value) => {
    setPokieSearch(value)
  }

  console.log({ pokieSearch })
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ flex: 1, position: 'relative' }}>
            <SearchInput shown={true} handlePress={handleSearch} />
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: '50%', height: "100%", backgroundColor: 'red' }}>
              <SvgUri
                width={25}
                height={25}
                uri={`https://www.svgrepo.com/show/276264/pokeball-pokemon.svg`}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text>{pokieSearch}</Text>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SearchScreen;
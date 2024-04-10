import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import SearchInput from '../search';
// import PokieCard from '../pokieCard'
function SearchScreen(props) {

  const handlePress = () => { }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>

          <View style={{ flex: 1 }}>
            <SearchInput shown={true} handlePress={handlePress} />
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
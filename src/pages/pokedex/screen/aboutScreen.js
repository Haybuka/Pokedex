import React, { useState } from 'react'
import { SvgUri } from 'react-native-svg';
import { ActivityIndicator, ScrollView, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import { StyleSheet } from 'react-native';
import { padTo } from '../../../utils/padTo';
import AboutName from '../about/aboutName';
import AboutTypesList from '../about/aboutTypeList';
import AboutAbilitiesList from '../about/aboutAbilitiesList';
import AboutPhysicals from '../about/aboutPhysicals';
import AboutStatsList from '../about/aboutStatsList';
import AboutPokemon from '../about/aboutPokemon';
import AboutMoves from '../about/aboutMoves';
import AboutEvolution from '../about/aboutEvolution';
import AboutTab from '../about/aboutTab';
import AboutImages from '../about/aboutImages';
import { useGetPokemon } from '../../../api/pokemon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native'

const AboutScreen = ({ route, navigation }) => {
  const [moveOpen, setMoveOpen] = useState(false)
  const [evolutionOpen, setEvolutionOpen] = useState(false)

  const handleMoveModal = () => {
    setMoveOpen(prev => !prev)
  }

  const handleEvolutionModal = () => {
    setEvolutionOpen(prev => !prev)
  }


  const name = route?.params?.name;
  const url = route?.params?.url;

  const { data: pokemon, error, isLoading: loading } = useGetPokemon(name)
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>

  const padValue = Number(padTo(url))


  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgUri
              width={25}
              height={25}
              uri={`https://www.svgrepo.com/show/500472/back.svg`}
            />
          </TouchableOpacity>
          <Text style={{ textTransform: 'capitalize', fontSize: 20 }}>{name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert(`${name[0].toUpperCase() + name.slice(1)} added to favorite.`)}>
            <SvgUri
              width={25}
              height={25}
              stroke={'red'}
              strokeWidth={0.4}
              uri={`https://www.svgrepo.com/show/524063/heart.svg`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>

        <AboutImages padValue={padValue} />
        <AboutName padValue={padValue} name={name} />
        <AboutPokemon id={padValue} />
        <AboutTypesList data={pokemon?.types} />
        <AboutAbilitiesList data={pokemon?.abilities} />
        <AboutPhysicals height={pokemon?.height} weight={pokemon?.weight} experience={pokemon?.base_experience} />
        <View style={{ alignItems: 'center', paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <AboutTab name={'Basic stat'} css={styles.activeTab} />
          <AboutTab name={'Moves'} action={handleMoveModal} />
          <AboutTab name={'Evolution'} action={handleEvolutionModal} />
        </View>
        <AboutStatsList data={pokemon?.stats} />
        <AboutMoves moves={pokemon?.moves} open={moveOpen} handleClose={handleMoveModal} />
        <AboutEvolution id={padValue} open={evolutionOpen} handleClose={handleEvolutionModal} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative"
  },
  header: {
    paddingVertical: 20,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,

  },
  imageContainer: {
    width: "100%",
  },
  name: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '600'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  activeTab: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 200
  }

})
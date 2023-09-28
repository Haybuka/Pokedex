import React, { useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View, } from 'react-native'
import useGetPokemon from '../hooks/useGetPokemon';
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

const AboutScreen = ({ route }) => {
  const [moveOpen, setMoveOpen] = useState(false)
  const [evolutionOpen, setEvolutionOpen] = useState(false)

  const handleMoveModal = () => {
    setMoveOpen(prev => !prev)
  }

  const handleEvolutionModal = () => {
    setEvolutionOpen(prev => !prev)
  }


  const name = route.params.name;
  const url = route.params.url;
  const { loading, pokemon, error } = useGetPokemon(name)
  if (loading) return <ActivityIndicator size={'large'} />
  if (error) return <View><Text>{error}</Text></View>

  const padValue = Number(padTo(url))
  return (
    <ScrollView style={styles.container}>
      <AboutImages padValue={padValue} />
      <AboutName padValue={padValue} name={name} />
      <AboutPokemon id={padValue} />
      <AboutTypesList data={pokemon.types} />
      <AboutAbilitiesList data={pokemon.abilities} />
      <AboutPhysicals height={pokemon.height} weight={pokemon.weight} experience={pokemon.base_experience} />
      <View style={{ alignItems: 'center', paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <AboutTab name={'Basic stat'} css={styles.activeTab} />
        <AboutTab name={'Moves'} action={handleMoveModal} />
        <AboutTab name={'Evolution'} action={handleEvolutionModal} />
      </View>
      <AboutStatsList data={pokemon.stats} />
      <AboutMoves moves={pokemon.moves} open={moveOpen} handleClose={handleMoveModal} />
      <AboutEvolution id={padValue} open={evolutionOpen} handleClose={handleEvolutionModal} />
    </ScrollView>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // paddingTop: StatusBar.currentHeight,
  },
  imageContainer: {
    width: "100%",
    // backgroundColor: 'red'
  },
  name: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '600'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    // marginBottom: 10,
  },
  activeTab: { backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 200 }

})
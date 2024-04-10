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
          <TouchableOpacity>
            <SvgUri
              width={25}
              height={25}
              stroke={'red'}
              strokeWidth={0.4}
              uri={`https://www.svgrepo.com/show/524063/heart.svg`}
            />
            {/* <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#f42a2a"></path> </g></svg> */}
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
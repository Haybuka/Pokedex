import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"


const AboutMoves = ({ open, handleClose, moves }) => {
  return (
    <Modal visible={open} presentationStyle='overFullScreen' animationType="slide">
      <ScrollView>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={styles.modalHeader}>
            <Text style={{ fontSize: 18 }}>Moves</Text>
            <TouchableOpacity onPress={handleClose}>
              <FontAwesome name='close' size={25} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
            {
              moves?.map((move, id) => (
                <View key={id} style={styles.moves}>
                  <Text>{move?.move.name}</Text>
                </View>
              ))
            }
          </View>

        </View>
      </ScrollView>
    </Modal>
  )
}

export default AboutMoves

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  moves: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: 'black'
  }
})
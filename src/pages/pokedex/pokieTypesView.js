import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import elevation from '../../utils/elevation'
const PokieTypesView = ({ type }) => {
  const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️", color: "#fff" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧", color: "#fff" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥", color: "#fff" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿", color: "#fff" };
      default:
        // return { borderColor: "#A0A0A0", emoji: "❓" };
        return { borderColor: "white", emoji: "❓", color: "#000" };
    }
  };

  const { borderColor, emoji, color } = getTypeDetails(type)
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: borderColor, justifyContent: 'space-between' }]}>
      <View style={{ backgroundColor: "#fff", borderRadius: 100 }}>
        <Text style={styles.text}>{emoji} </Text>
      </View>
      <Text style={[styles.text, { color }]}>{type}</Text>
    </TouchableOpacity>
  )
}

export default PokieTypesView

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 10,
    // width: 100,
    paddingVertical: 5,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 10,

  },
  text: {
    fontSize: 18,
    textTransform: 'capitalize'
  }
})

// elevation: 5,
// backgroundColor: 'white',
// paddingHorizontal: 20,
// paddingVertical: 10,
// borderRadius: 20,
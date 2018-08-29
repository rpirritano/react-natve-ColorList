import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ColorTools from 'color'
//navigate.state.params.color is the second parameter of onSelect={() => navigate('Details', {color})}/>
//in ColorList
const ColorInfo = ({ navigation }) => {
  const color = ColorTools(navigation.state.params.color)
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>To Do: Display Details</Text>
    </View>
  )
}

ColorInfo.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.color
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    margin: 10
  }
})

export default ColorInfo

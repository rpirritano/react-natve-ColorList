import React, {Component} from 'react'
import {Platform, StyleSheet, ListView, AsyncStorage} from 'react-native'

import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'

type Props = {};
export default class App extends Component<Props> {
//make the color be passed in state so user can change it
//ListView needs a data source to be able to render
constructor() {
  super()

  this.ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  })
  const availableColors = []
  this.state = {
    backgroundColor: 'blue',
    availableColors,
    dataSource: this.ds.cloneWithRows(availableColors)
  }
  this.changeColor = this.changeColor.bind(this)
  this.newColor = this.newColor.bind(this)
}
//use componentDidMount to grap our data
componentDidMount() {
  AsyncStorage.getItem(
    '@ColorListStore:Colors',
    (err, data) => {
      if (err) {
        console.error('Error loading colors', err)
      } else {
        const availableColors = JSON.parse(data)
        this.setState({
          availableColors,
          dataSource: this.ds.cloneWithRows(availableColors)
        })
      }
    }
  )
}

//AsyncStorage will interact with the device api to save the data to the phone
saveColors(colors) {
  AsyncStorage.setItem(
    '@ColorListStore:Colors',
    JSON.stringify(colors)
  )
}

changeColor(backgroundColor) {
  this.setState({backgroundColor})
}

newColor(color) {
  const availableColors = [
    ...this.state.availableColors,
    color
  ]
  this.setState({
    availableColors,
    dataSource: this.ds.cloneWithRows(availableColors)
  })
  this.saveColors(availableColors)
}

render() {
  const { backgroundColor, dataSource } = this.state
  return (
    <ListView style={[styles.container,{backgroundColor}]}
      dataSource={dataSource}
      renderRow={(color) => (
        <ColorButton backgroundColor={color}
          onSelect={this.changeColor}/>
      )}
      renderHeader={() => (
        <ColorForm onNewColor={this.newColor}/>
      )}>

    </ListView>
  )
}
}

const styles = StyleSheet.create({
container: {
  flex: 1
},
header: {
  backgroundColor: 'lightgrey',
  padding: 10,
  paddingTop: 20,
  fontSize: 30,
  textAlign: 'center'
}
})

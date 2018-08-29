import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView} from 'react-native';

import ColorButton from './components/ColorButton'

type Props = {};
export default class App extends Component<Props> {
//make the color be passed in state so user can change it
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render() {
    //use ES6 destructuring
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[styles.container, {backgroundColor}]}>
        <ColorButton backgroundColor="red"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="blue"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="green"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="purple"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="salmon"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="#00FF00"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="rgb(255,0,255)"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="orange"
          onSelect={this.changeColor}/>
        <ColorButton backgroundColor="violet"
          onSelect={this.changeColor}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

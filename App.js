import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
//make the color be passed in state so user can change it
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
  }

  render() {
    //use ES6 destructuring
    const { backgroundColor } = this.state
    return (
      <View style={[styles.container, {backgroundColor}]}>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

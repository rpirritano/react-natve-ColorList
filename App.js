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
        <Text style={styles.button}>Green</Text>
        <Text style={styles.button}>Blue</Text>

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
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});

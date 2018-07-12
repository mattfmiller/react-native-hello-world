import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://media.giphy.com/media/3oKIPtWDG3yACxRfS8/giphy.gif'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello World!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

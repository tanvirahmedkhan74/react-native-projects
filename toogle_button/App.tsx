import React, {Component} from "react";

import { StyleSheet, View, Text, Image, TouchableHighlight} from "react-native";

const heartIcon = require('./images/heart.png')

export default class App extends React.Component {
  state = {
    liked: false
  }

  handleButtonPress = () => {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const likedStyle = this.state.liked ? styles.liked: undefined;
    
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleButtonPress} underlayColor='#fefefe' style={styles.button}>
          <Image source={heartIcon} style={[styles.icon, likedStyle]}/>
        </TouchableHighlight>
        <Text style={styles.text}>Heart React</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: 'center'
  },

  button: {
    borderRadius: 5,
    padding: 10
  },

  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },

  liked: {
    tintColor: '#e74c3c'
  },

  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
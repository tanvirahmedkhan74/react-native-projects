import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

const playIcon = require('./images/play.png');
const volumeIcon = require('./images/sound.png');
const hdIcon = require('./images/hd-sign.png');
const fullScreenIcon = require('./images/full-screen.png');
const flower = require('./images/flower.jpg');
const remoteImage = { uri: `https://www.dexerto.com/cdn-cgi/image/width=750,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/15/one-piece-gear-5-episode.jpeg`}

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.appContainer}>
        <ImageBackground source={remoteImage} style={styles.videoContainer} resizeMode='contain'>
          <View style={styles.controlsContainer}>

            <Image source={volumeIcon} style={styles.icon}/>

            <View style={styles.progress}>
              <View style={styles.progressBar}/>
            </View>

            <Image source={hdIcon} style={styles.icon}/>
            <Image source={fullScreenIcon} style={styles.icon}/>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flower: {
    flex: 1
  },

  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  videoContainer: {
    backgroundColor: '#001',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  controlsContainer: {
    padding: 6,
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 175
  },

  icon: {
    tintColor: '#fff',
    height: 18,
    width: 18,
    marginLeft: 5,
    marginRight: 5
  },

  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 18,
    margin: 4
  },

  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 12,
    margin: 2,
    paddingTop: 3,
    width: 80,
    alignItems: 'center',
    flexDirection: 'row'
  }
})
import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
  Modal
} from 'react-native';

import data from './sales.json';
const bagIcon = require('./images/shopping-bag.png');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      modalVisible: false,
      modalItem: null
    };
  }

  renderModal = () => {
    const item = this.state.modalItem

    return(
      <View>
        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={()=> {this.setState({modalVisible: false})}}>
          <View style={styles.modalView}>
          <Text style={styles.items}>Items: {item && item.items}</Text>
          <Text style={styles.address}>Address: {item &&item.address}</Text>
          <Text style={styles.date}>Date: {item && item.date}</Text>
          <Text style={styles.price}>Price: ${item && item.total}</Text>
          </View>
        </Modal> 
      </View>
    )
  }

  renderItem = ({item}) => (
    <TouchableHighlight onPress={()=> {this.setState({modalVisible: !this.state.modalVisible}); this.setState({modalItem: item})}}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={bagIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{item.items}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.price}>${item.total}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sales</Text>
        <FlatList data={this.state.data} renderItem={this.renderItem}/>
        {this.renderModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },

  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },

  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },

  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },

  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },

  address: {
    color: '#6666e2',
    fontSize: 14,
    fontWeight: 'bold',
  },

  total: {
    width: 80,
  },

  date: {
    fontSize: 12,
    marginBottom: 5,
  },

  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },

  modalView: {
    margin: 20,
    backgroundColor: '#ffecbe',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
  }
});

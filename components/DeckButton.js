import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { white, black, blueHorizon, randomColors } from '../utils/colors';
import { randomItem } from '../utils/helpers';

class DeckButton extends Component {

  render() {
    const { item } = this.props;

    return (
      <View style={styles.overflowWorkaround}>
        <View style={styles.badge}>
          <Text style={[ styles.text, { fontSize: 12 } ]}>55</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeckDetails', { item: { name: item.title } })}
        >
          <View style={[ styles.deck, { backgroundColor: randomItem(randomColors) } ]}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overflowWorkaround: {
    padding: 10,
    position: 'relative'
  },
  deck: {
    minHeight: 100,
    marginBottom: 10,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 4,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowColor: black,
    shadowOffset: { height: 2, width: 2 },
    position: 'relative'
  },
  text: {
    textAlign: 'center',
    color: white,
    fontSize: 16
  },
  badge: {
    justifyContent: 'center',
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: blueHorizon,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
    elevation: 100
  }
});

export default withNavigation(DeckButton);

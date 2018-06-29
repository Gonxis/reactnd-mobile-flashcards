import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { blueHorizon, white } from '../utils/colors';
import DeckItem from './DeckItem';

class DeckDetails extends Component {
  static defaultProps = {
    navigate: args => console.log('Navigate not implemented: DeckDetails'),
    item: {
      name: 'Default',
    }
  }

  render() {
    const { item, navigate } = this.props;

    return (
      <View style={styles.container}>
        <DeckItem item={item} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => { }}
        >
          <Text style={styles.buttonText}>
            start quiz
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('NewCard', { item: { name: item.name } })} // TODO: this route doesnt work
        >
          <Text style={styles.buttonText}>
            add new card
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: blueHorizon,
    height: 30,
    marginTop: 30,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 16,
    color: white,
    textAlign: 'center',
    lineHeight: 30
  }
});

export default DeckDetails;

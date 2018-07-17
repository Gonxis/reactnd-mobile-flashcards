import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { blueHorizon, white, lighterPurple } from '../utils/colors';
import { connect } from 'react-redux';
import { addDeckToAPI } from '../actions/decksActions';

class NewDeck extends Component {
  state = {
    key: ''
  }

  /**
  * @description Clears deck name input
  */
  clearInput = () => {
    this.setState({ key: '' });
  }

  /**
  * @description Saves a new deck
  */
  saveDeck = () => {
    const { key } = this.state;
    const { dispatch, navigation, decks } = this.props;
    const deck = { title: key, questions: [] };

    if (decks[key]) {
      Alert.alert(
        'Warning',
        'There already exists a deck with this name. Please choose another name.',
        [
          { text: 'OK', onPress: () => console.log('Alert: deck already exists') },
        ],
        { cancelable: false }
      );
      return;
    }

    dispatch(addDeckToAPI(deck, key));
    this.clearInput();
    navigation.navigate('DeckDetails',
      {
        item: {
          name: deck.title,
          questions: deck.questions
        }
      }
    )
  };

  render() {
    const { key } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>choose a title for your new deck</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid={lighterPurple}
          placeholder="deck name"
          onChangeText={(text) => this.setState({ key: text })}
          value={key}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.saveDeck}
        >
          <Text style={styles.buttonText}>
            save
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
  heading: {
    fontSize: 24,
    color: blueHorizon,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 4,
    fontSize: 16,
    color: blueHorizon
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

const mapStateToProps = ({ decksReducer }) => {
  return decksReducer;
};

export default connect(mapStateToProps)(NewDeck);

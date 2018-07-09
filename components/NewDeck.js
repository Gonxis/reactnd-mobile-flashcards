import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { blueHorizon, white, lighterPurple } from '../utils/colors';
import { submitDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addDeckToAPI } from '../actions';

class NewDeck extends Component {

  state = {
    deck: {
      title: '',
      questions: []
    }
  };

  onHandleChange = (text) => {
    this.setState({
      deck: {
        title: text,
        questions: []
      }
    });
  }

  saveDeck = () => {
    const { deck } = this.state;
    const key = deck.title;

    this.props.dispatch(addDeckToAPI(deck, key));

    // submitDeck(key, deck);

    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>choose a title for your new deck</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid={lighterPurple}
          placeholder="deck name"
          onChangeText={text => this.onHandleChange(text)}
          value={this.state.deck.title}
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

export default connect()(NewDeck);

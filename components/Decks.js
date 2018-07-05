import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { blueHorizon } from '../utils/colors';
import DeckButton from './DeckButton';

class Decks extends Component {

  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces',
            remember: 'not long'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event',
            remember: 'a while'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.',
            remember: 'a lot of time'
          }
        ]
      }
    }
  };

  _keyExtractor = (item, index) => item.title;

  render() {
    const { data, decks } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>decks</Text>
        {
          Object.keys(decks).length > 0
            ? <FlatList
                style={{ padding: 5 }}
                data={Object.keys(decks).map(key => decks[key])}
                keyExtractor={this._keyExtractor}
                renderItem={
                  ({ item }) =>
                    <DeckButton item={item} />
                }
              />
            : <Text style={styles.textWarning}>There are no decks yet!</Text>
        }
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
  textWarning: {
    fontSize: 16,
    color: blueHorizon,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default Decks;

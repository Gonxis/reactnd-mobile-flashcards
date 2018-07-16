import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { blueHorizon, white, fusionRed } from '../utils/colors';
import DeckItem from './DeckItem';
import { removeDeckFromAPI } from '../actions/decksActions';

class DeckDetails extends Component {
  state = {
    questionsCount: 0,
    deck: {}
  }

  componentDidMount() {
    const { decks, navigation } = this.props;
    const item = navigation.getParam('item', { name: 'Default', questions: [] });

    this.didFocusListener = navigation.addListener('willFocus', () => {
      this.setState(
        {
          questionsCount: decks[item.name].questions.length,
          deck: decks[item.name]
        }
      );
    });
  }

  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item', { name: 'Default' });
    return {
      title: `${item.name} deck`
    };
  };

  deleteDeck = () => {
    const { dispatch, navigation } = this.props;
    const item = navigation.getParam('item', { name: 'Default', questions: [] });
    const key = item.name;

    dispatch(removeDeckFromAPI(key));
    navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const { deck } = this.state;
    const item = navigation.getParam('item', { name: 'Default', questions: [] });

    return (
      <View style={styles.container}>
        <DeckItem item={item} questionsCount={this.state.questionsCount} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizQuestion',
          {
            item: {
              name: item.name,
              questions: deck.questions
            }
          })}
        >
          <Text style={styles.buttonText}>
            start quiz
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NewCard', { item: { name: item.name } })}
        >
          <Text style={styles.buttonText}>
            add new card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.deleteDeck}
        >
          <Text style={[styles.buttonText, { backgroundColor: fusionRed, borderRadius: 50 }]}>
            delete deck
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

const mapStateToProps = ({ decksReducer }) => {
  return decksReducer;
};

export default withNavigation(connect(mapStateToProps)(DeckDetails));

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { blueHorizon, white, highBlue, black } from '../utils/colors';
import { quizReset } from '../actions/quizActions';

class QuizQuestion extends Component {
  restart = () => {
    const { dispatch, navigation } = this.props;
    const item = navigation.getParam('item', { title: 'Default', questions: [] });
    dispatch(quizReset(0, 0, true));
    navigation.navigate('QuizQuestion',
      {
        item: {
          name: item.name,
          questions: item.questions
        }
      }
    );
  }

  goBackToDeck = () => {
    const { dispatch, navigation } = this.props;
    const item = navigation.getParam('item', { title: 'Default', questions: [] });
    dispatch(quizReset(0, 0, true));
    navigation.navigate('DeckDetails',
      {
        item: {
          name: item.name,
          questions: item.questions
        }
      }
    );
  }

  render() {
    const { navigation, quiz } = this.props;
    const item = navigation.getParam('item', { name: 'Default', questions: [] });
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    });

    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.text}>
            You got {quiz.score} out of {item.questions.length} questions right!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={this.restart}
        >
          <Text style={styles.buttonText}>
            restart quiz
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.goBackToDeck}
        >
          <Text style={styles.buttonText}>
            back to {item.name}
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
  deck: {
    minHeight: 100,
    marginVertical: 10,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 4,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowColor: black,
    shadowOffset: { height: 2, width: 2 },
    backgroundColor: highBlue
  },
  text: {
    textAlign: 'center',
    color: white,
    fontSize: 16
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

const mapStateToProps = ({ quizReducer }) => {
  return quizReducer;
};

export default connect(mapStateToProps)(QuizQuestion);
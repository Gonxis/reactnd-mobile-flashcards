import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { blueHorizon, white, highBlue, black } from '../utils/colors';
import { quizReset } from '../actions/quizActions';
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers';

class GameOver extends Component {
  /**
  * @description Clears all local notifications previously set and sets a new one for the following day
  */
  componentDidMount() {
    clearLocalNotifications().then(setLocalNotification);
  }

  /**
  * @description Restarts the quiz
  */
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

  /**
  * @description Goes beck to deck details view
  */
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

export default connect(mapStateToProps)(GameOver);

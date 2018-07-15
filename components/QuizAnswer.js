import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { blueHorizon, white, highBlue, black, reptileGreen, fusionRed } from '../utils/colors';
import { quizCorrect, quizIncorrect } from '../actions/quizActions';

class QuizAnswer extends Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam('deck', { title: 'Default' });
    return {
      title: `${deck.title} quiz - Answer`
    };
  };

  correctAnswer = () => {
    const { dispatch, navigation, quiz } = this.props;
    const index = quiz.currentIndex + 1;
    const score = quiz.score + 1;
    const item = navigation.getParam('item', { title: 'Default', questions: [] });

    if (index === item.questions.length) {
      console.log('game over');
      return;
    }

    navigation.goBack();
    dispatch(quizCorrect(index, score));
  }

  incorrectAnswer = () => {
    const { navigation, quiz } = this.props;
    const index = quiz.currentIndex + 1;
    const item = navigation.getParam('item', { title: 'Default', questions: [] });

    navigation.goBack();

    if (index === item.questions.length) {
      console.log('game over');
      return;
    }

    dispatch(quizIncorrect(index));
  }

  render() {
    const { navigation, quiz } = this.props;
    const item = navigation.getParam('item', { title: 'Default', questions: [] });

    return (
      <View style={styles.container}>
        <Text>{`${quiz.currentIndex + 1}/${item.questions.length}`}</Text>
        <View style={styles.deck}>
          <Text style={styles.text}>Answer: {item.questions[quiz.currentIndex].answer}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.goBack() }}
        >
          <Text style={styles.buttonText}>
            view question
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: reptileGreen }]}
          onPress={this.correctAnswer}
        >
          <Text style={styles.buttonText}>
            correct
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: fusionRed }]}
          onPress={this.incorrectAnswer}
        >
          <Text style={styles.buttonText}>
            incorrect
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
  counter: {
    fontSize: 16,
    color: blueHorizon
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

export default withNavigation(connect(mapStateToProps)(QuizAnswer));

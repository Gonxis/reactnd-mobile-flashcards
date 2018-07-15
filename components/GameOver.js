import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { blueHorizon, white, highBlue, black } from '../utils/colors';

class QuizQuestion extends Component {
  restart = () => {
    console.log('restart');
  }

  render() {
    const { navigation, quiz } = this.props;
    const item = navigation.getParam('item', { name: 'Default', questions: [] });

    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.text}>You got {quiz.score/item.questions.length}% questions right!</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.restart}
        >
          <Text style={styles.buttonText}>
            restart quiz
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>
            back to decks
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

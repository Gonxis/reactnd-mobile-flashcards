import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { blueHorizon, white, highBlue, black } from '../utils/colors';

class QuizQuestion extends Component {

  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item', { name: 'Default' });
    return {
      title: `${item.name} quiz - Question`
    };
  };

  render() {
    const { navigation, quiz } = this.props;
    const item = navigation.getParam('item', { name: 'Default', questions: [] });

    return (
      <View style={styles.container}>
        <Text>{`${quiz.currentIndex + 1} of ${item.questions.length}`}</Text>
        <View style={styles.deck}>
          <Text style={styles.text}>{item.questions[quiz.currentIndex].question}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizAnswer',
            {
              item: {
                name: item.name,
                questions: item.questions
              }
            })}
        >
          <Text style={styles.buttonText}>
            view answer
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

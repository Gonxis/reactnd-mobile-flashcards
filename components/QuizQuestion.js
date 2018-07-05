import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class QuizQuestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz Question</Text>
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
  }
});

export default QuizQuestion;

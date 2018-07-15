import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { blueHorizon, white, lighterPurple } from '../utils/colors';
import { addCardToAPI } from '../actions/decksActions';

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item', { name: 'Default' });
    return {
      title: `Add card to ${item.name}`
    };
  };

  saveCard = () => {
    const { dispatch, navigation } = this.props;
    const { question, answer } = this.state;
    const item = navigation.getParam('item', { name: 'Default' });
    const key = item.name;

    dispatch(addCardToAPI(key, question, answer));
    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>question</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid={lighterPurple}
          placeholder="type your question here"
          onChangeText={(text) => this.setState({ question: text })}
        />

        <Text style={styles.heading}>answer</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid={lighterPurple}
          placeholder="type your answer here"
          onChangeText={(text) => this.setState({ answer: text })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.saveCard}
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

export default withNavigation(connect()(NewCard));

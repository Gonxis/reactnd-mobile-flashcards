import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Tabs } from './components/Tabs';
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';
import QuizQuestion from './components/QuizQuestion';
import QuizAnswer from './components/QuizAnswer';
import GameOver from './components/GameOver';
import { white, lighterPurple, gloomyPurple } from './utils/colors';
import { setLocalNotification } from './utils/helpers';
import { Provider } from 'react-redux';
import Store from './store';

const Stack = createStackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    },
    DeckDetails: {
      screen: DeckDetails
    },
    NewCard: {
      screen: NewCard
    },
    QuizQuestion: {
      screen: QuizQuestion
    },
    QuizAnswer: {
      screen: QuizAnswer
    },
    GameOver: {
      screen: GameOver,
      navigationOptions: () => ({
        title: 'Game over',
      })
    }
  },
  {
    navigationOptions: {
      headerTintColor: white,
      headerPressColorAndroid: gloomyPurple,
      headerStyle: {
        backgroundColor: lighterPurple
      }
    }
  }
);

export default class App extends Component {

  /**
  * @description Sets a new notification for tomorrow at 18:00
  */
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});

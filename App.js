import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Tabs } from './components/Tabs';
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';
import { white, lighterPurple, gloomyPurple } from './utils/colors';
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

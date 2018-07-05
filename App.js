import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Tabs } from './components/Tabs';
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';
import { white, lighterPurple, gloomyPurple } from './utils/colors';

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
      <View style={styles.container}>
        <Stack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});

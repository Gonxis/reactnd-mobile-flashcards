import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import { white, gloomyPurple, lighterPurple } from './utils/colors';

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'new deck',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='plus' size={30} color={tintColor} />
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: gloomyPurple,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        height: 56,
        backgroundColor: lighterPurple
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

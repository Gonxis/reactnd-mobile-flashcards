import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Decks from './Decks';
import NewDeck from './NewDeck';
import { white, gloomyPurple, lighterPurple } from '../utils/colors';

export const Tabs = createBottomTabNavigator(
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

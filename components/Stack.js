import { createStackNavigator } from 'react-navigation';
import { Tabs } from './Tabs';
import DeckDetails from './DeckDetails';
import NewCard from './NewCard';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import GameOver from './GameOver';
import { white, lighterPurple, gloomyPurple } from '../utils/colors'

export const Stack = createStackNavigator(
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

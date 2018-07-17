import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { white } from './utils/colors';
import { setLocalNotification } from './utils/helpers';
import { Provider } from 'react-redux';
import Store from './store';
import { Stack } from './components/Stack';

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

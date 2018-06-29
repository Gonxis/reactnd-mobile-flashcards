import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { blueHorizon } from '../utils/colors';
import DeckButton from './DeckButton';

class Decks extends Component {

  state = {
    data: [
      { name: 'deck name 1' },
      { name: 'deck name 2' },
      { name: 'deck name 3' },
      { name: 'deck name 4' },
      { name: 'deck name 5' },
      { name: 'deck name 6' },
      { name: 'deck name 7' }
    ]
  };

  static defaultProps = {
    navigate: args => console.log('Navigate not implemented')
  }

  _keyExtractor = (item, index) => item.name;

  render() {
    const { data } = this.state;
    let { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>decks</Text>
        {
          data.length > 0 ?
          <FlatList
            style={{ padding: 5 }}
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={
              ({ item }) =>
              <DeckButton item={item} navigate={navigation.navigate} />
            }
          />
          : <Text style={styles.textWarning}>There are no decks yet!</Text>
        }
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
  textWarning: {
    fontSize: 16,
    color: blueHorizon,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default Decks;

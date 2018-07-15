import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { blueHorizon } from '../utils/colors';
import DeckButton from './DeckButton';
import { connect } from 'react-redux';
import { getDecksFromAPI } from '../actions/decksActions';

class Decks extends Component {
  componentDidMount() {
    const { dispatch, navigation } = this.props;

    this.didFocusListener = navigation.addListener('willFocus', () => {
      dispatch(getDecksFromAPI());
    });
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  _keyExtractor = (item, index) => item.title;

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>decks</Text>
        {
          decks !== undefined && Object.keys(decks).length > 0
          ? <FlatList
            style={{ padding: 5 }}
            data={Object.keys(decks).map(key => decks[key])}
            keyExtractor={this._keyExtractor}
            renderItem={
              ({ item }) =>
                <DeckButton item={item} />
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

const mapStateToProps = ({ decksReducer }) => {
  return decksReducer;
};

export default connect(mapStateToProps)(Decks);

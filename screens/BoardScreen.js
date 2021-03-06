import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationStyles } from '@exponent/ex-navigation';
import Colors from '../constants/Colors';
import BoardHeader from '../components/BoardHeader';
import TicTacToe from '../components/Tictactoe';

const BoardScreen = () => (
  <View style={styles.container}>
    <TicTacToe />
  </View>
);

BoardScreen.route = {
  navigationBar: {
    visible: true,
    renderTitle: () => <BoardHeader headerText="Rmotr - Tic Tac Toe" />,
    backgroundColor: Colors.primary700,
    tintColor: '#FFF'
  },
  styles: NavigationStyles.FloatHorizontal
};

BoardScreen.propTypes = {
  game: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
});

const mapStateToProps = state => ({
  game: state.game
});

export default connect(
  mapStateToProps,
  null
)(BoardScreen);

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentState = (props) => {
  const { winner, nextPlayer, gameOver, board } = props.data;

  return (
    <View>
      <Text style={styles.info}>winner: {winner || 'null'}</Text>
      <Text style={styles.info}>nextPlayer: {nextPlayer};</Text>
      <Text style={styles.info}>gameOver: {gameOver ? 'true' : 'false'}</Text>
      <Text style={styles.info}>board:</Text>
      <Text style={styles.info}>{board[0][0] || '[ ]'} {board[0][1] || '[ ]'} {board[0][2] || '[ ]'}</Text>
      <Text style={styles.info}>{board[1][0] || '[ ]'} {board[1][1] || '[ ]'} {board[1][2] || '[ ]'}</Text>
      <Text style={styles.info}>{board[2][0] || '[ ]'} {board[2][1] || '[ ]'} {board[2][2] || '[ ]'}</Text>
    </View>
  );
};

CurrentState.propTypes = {
  data: PropTypes.object
};

const styles = StyleSheet.create({
  info: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600'
  }
});

export default CurrentState;

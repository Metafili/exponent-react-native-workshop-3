import React, { PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Components } from 'exponent';
import Colors from '../constants/Colors';
import Board from './Board';
import GameStatus from './GameStatus';
import OptionItem from './OptionItem';
import CurrentState from './CurrentState';


const windowWidth = Dimensions.get('window').width;

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false
    };

    this.handleMovement = this.handleMovement.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.showCurrentState = this.showCurrentState.bind(this);
  }

  getColor() {
    const currentPlayer = this.props.game.nextPlayer === 'X' ? 'O' : 'X';
    const colorMapping = {
      X: Colors.X,
      O: Colors.O
    };

    return this.props.game.winner ?
            colorMapping[currentPlayer] : colorMapping[this.props.game.nextPlayer];
  }

  handleMovement(row, col) {
    // TODO: Fix it.
  }

  handleRestart() {
    // TODO: Fix it.
  }

  showCurrentState() {
    this.setState({ showDetail: !this.state.showDetail });
  }

  render() {
    const nextPlayer = this.props.game.nextPlayer;
    let stateDetail;

    if (this.state.showDetail) {
      stateDetail = <CurrentState data={this.props.game} />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.gameContainer}>
          <Components.LinearGradient
            colors={[Colors.primary, Colors.primary700]}
            style={styles.gameContainerGradient}
          >
            <Board
              board={this.props.game.board}
              gameOver={this.props.game.gameOver}
              onClick={nextPlayer === 'Rival' ? () => {} : this.handleMovement}
            />
          </Components.LinearGradient>
        </View>

        <View style={[styles.gameStatus, { backgroundColor: this.getColor() }]}>
          <GameStatus
            boardId={this.props.game.boardId}
            creator={this.props.game.creator}
            nextPlayer={nextPlayer}
            gameOver={this.props.game.gameOver}
            winner={this.props.game.winner}
          />
        </View>

        <OptionItem
          text={'Restart!'}
          icon={'refresh'}
          iconColor={Colors.warning}
          onPress={this.handleRestart}
        />

        {stateDetail}
        <OptionItem
          text={'Show current state'}
          icon={'refresh'}
          iconColor={Colors.primary}
          onPress={this.showCurrentState}
        />
      </View>
    );
  }
}

TicTacToe.propTypes = {
  boardId: PropTypes.number,
  game: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },

  gameContainer: {
    // reduce 80 of height to have place to show currentState component
    height: windowWidth - 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary300,
    marginTop: 0,
    margin: 10
  },

  gameContainerGradient: {
    flex: 1
  },

  gameStatus: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  game: state.game
});

export default connect(
  mapStateToProps,
  null
)(TicTacToe);

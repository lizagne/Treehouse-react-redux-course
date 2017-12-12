import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

class Scoreboard extends Component {

    render() {

        const { dispatch, players } = this.props;

        //these ensure that when it gets envoked it automatically gets dispatched too. That's why dispatch is the 2nd argument
        const addPlayer = bindActionCreators(PlayerActionCreators.addplayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        const playerComponents = players.map((player, index) => (
            <Player
                index={ index }
                name={ player.name }
                score={ player.score }
                key={ player.name}
                updatePlayerScore={ updatePlayerScore }
                removePlayer={ removePlayer }
            />

            ));

        return (
            <div className="scoreboard">
            <Header players={ players } />
                <div className="players">
                    { playerComponents }
                </div>
            <AddPlayerForm addPlayer={ addplayer } />
            </div>
        );
    }
};

const mapStateToProps = state => (
    {
        players: state
    }

);

export default connect(mapStateToProps)(Scoreboard);
//the first set contains the function, and the 2nd set contains the container that we want to connect together.
    




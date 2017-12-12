import * as PlayerActionTypes from '../actiontypes/player'; //we want to take all the exports and set them as properties on the actiontypes

const initialState = [

	{
        name: 'Jim Hoskins',
        score: 31,
    },
    {
        name: 'Andrew Chalkley',
        score: 20,
    },
    {
        name: 'Alena Holligan',
        score: 50,
    },
];

//a reducer should be written as a pure function so that it is immutable. 

export default function Player(state=initialState, action) {
	switch(action.type) {
		case PlayerActionTypes.ADD_PLAYER:
			return [
				...state //this includes the previously made state into the new array
				{
					name: action.name,
					score: 0
				}
			];

		case PlayerActionTypes.REMOVE_PLAYER:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];

		case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			return state.map((player, index) => {
				if(index === action.index) {
					return {
						...player,
						score: player.score + action.score
					};
				}
				return player;
			});

		default:
			return state;	
	}
}

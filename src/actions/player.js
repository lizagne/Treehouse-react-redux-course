//three action creators

import * as PlayerActionTypes from '../actiontypes/player'; //we want to take all the exports and set them as properties on the actiontypes


export const addPlayer = name => {
	return {
		type: PlayerActionTypes.ADD_PLAYER,
		name
	};
};

export const removePlayer = index => {
	return {
		type: PlayerActionTypes.REMOVE_PLAYER,
		index
	};
};

export const updatePlayerScore = (index, score) => {
	return {
		type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
		index,
		score
	};
};

//these actions need to get Dispatched
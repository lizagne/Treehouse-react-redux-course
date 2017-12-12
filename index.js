import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';

const store = createStore(
	PlayerReducer
);

//by wrapping the Scoreboard with the Provider it allows any component inside to use the store state globally.

render(
	<Provider store={ store }> 
		<Scoreboard />,
		document.getElementById('root')
	</Provider>	
);
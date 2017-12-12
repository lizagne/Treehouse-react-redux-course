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

/*Let's take a moment to go over key Redux concepts and review some of what we've implemented so far and
0:05

what we still have to do with regards to Redux on the scoreboard app.
0:08

This will help you understand each of the files we just wrote fit into the broader
0:12

Redux pipeline and where Redux fits into our entire application.
0:16

At the heart of a Redux application is the application store.
0:20

Now I've mentioned the term Redux store a few times in this course.
0:24

And the Redux store is the single source of truth for the application state.
0:28

This means that all state resides in one place, the store.
0:32

Isolating state to one container greatly simplifies how and
0:36

when application state is updated.
0:38

We're going to create the store in the next stage, and
0:41

that store will consist of the player data.
0:44

Redux will always maintain a history of the player data in the store whenever
0:47

actions like updating score or removing a player are taken within the application.
0:53

You learned that an action is an event that occurs in the application
0:56

that will result in a change in the underlying state.
1:00

In Redux, an action is a JavaScript object that has a type and
1:04

additional metadata associated with the action taken.
1:07

The type identifies the action and
1:10

the metadata of an action is the extra information required to update the store.
1:15

As you learned in the previous video,
1:16

actions are created in Redux by action creators.
1:20

For example, the action creators we wrote were JavaScript functions that generate
1:24

actions that change player data.
1:27

In order for actions to be interpreted and handled in Redux, a reducer is required.
1:32

For instance, in the scoreboard app, we created a reducer for the player data.
1:36

We wrote the reducers as a pure function that takes two arguments,
1:40

the current state, and the action that's been taken.
1:43

Once an action goes through the Redux store, a reducer catches the action,
1:47

interprets the incoming action by its type, and produces the new state.
1:51

[SOUND] Reducers are a big part of Redux.
1:55

They're registered and interact with the Redux store, and it's the composition of
1:59

the reducers that becomes the state container for your application.
2:03

So again, make sure that your reducers are implemented as pure functions and
2:07

that they do not mutate or alter the current state.
2:10

Finally, as I mentioned at the end of the previous video, in order for
2:14

reducers to receive actions, the actions must be dispatched.
2:18

Dispatched actions express an intent to change the state in the store.
2:23

This is done using a method called dispatch, and it's important to remember
2:27

that invoking an action creator alone is not enough to trigger a change in state.
2:31

The action that's created must be dispatched.
2:34

You'll learn how to provide a dispatch in the next stage when we connect
2:37

the scoreboard container to Redux.
2:39

Now that we've had a chance to take a closer look at how our actions and
2:42

reducers will fit into our application we need to
2:45

implement the remaining Redux elements.
2:47

This means creating our Redux store wiring up our scoreboard app to connect to Redux,
2:52

and provide relevant properties to all downstream components.
2:56

*/
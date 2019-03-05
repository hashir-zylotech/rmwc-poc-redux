import * as types from './ActionTypes';

export const setColor = color => ({
	type: types.SET_COLOR,
	color,
});

export const setText = text => ({
	type: types.SET_TEXT,
	text,
});

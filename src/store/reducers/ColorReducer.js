import { SET_COLOR, SET_TEXT } from '../actions/ActionTypes';

const initialState = {
	color: '',
	text: '',
};

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case SET_COLOR:
			return updateObject(state, { color: action.color });
		case SET_TEXT:
			return updateObject(state, { text: action.text });
		default:
			return state;
	}
}

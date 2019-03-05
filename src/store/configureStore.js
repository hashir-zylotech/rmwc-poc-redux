import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import colorReducer from './reducers/ColorReducer';

export default function configureStore(initialState) {
	const composeEnhancers =
		process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

	const rootReducer = combineReducers({
		clr: colorReducer,
	});

	const store = createStore(rootReducer, composeEnhancers());

	return store;
}

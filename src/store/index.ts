import { createStore, applyMiddleware, Store, compose } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { ExampleState } from './ducks/example/types';

export interface ApplicationState {
  example: ExampleState;
}

const persistConfig = {
  blacklist: [],
  key: 'rnboilerplatetypescript',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

let store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { typedUseSelector, persistor };
export default store;

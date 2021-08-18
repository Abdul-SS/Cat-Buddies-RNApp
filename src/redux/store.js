import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {commonReducer} from './reducers/reducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: ['data'],
};

const rootReducer = combineReducers({
  data: commonReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

export default store;

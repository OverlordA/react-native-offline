import {combineReducers, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {init} from './reducers';
import thunk from 'redux-thunk'; // the value from combineReducers
import reactotron from '../config/reactotronConfig';

const rootReducer = combineReducers({init});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const middleware = [thunk];

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
        reactotron.createEnhancer(),
    ),
    );
export const persistor = persistStore(store);

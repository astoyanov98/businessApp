import { applyMiddleware, createStore, compose } from 'redux';
import pickedBusinessReducer from '../reducers/pickedBusiness';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, pickedBusinessReducer)

export const composeEnhancers =
    (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore() {
    const store = createStore(persistedReducer, compose(applyMiddleware(thunk), composeEnhancers()));
    let persistor = persistStore(store)
    return { store, persistor };
}
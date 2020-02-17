import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// might need a router?
// import { connectRouter, routerMiddleware } from 'connected-react-router'
// import { History } from 'history'

import { composeWithDevTools } from 'redux-devtools-extension'

import { ApplicationState, createRootReducer, rootSaga } from './store'

export default function configureStore(
    initialState: ApplicationState
): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    )

    sagaMiddleware.run(rootSaga);
    return store;
}

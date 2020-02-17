import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { ApplicationState } from './store';
import configureStore from './configureStore';

const initialState: ApplicationState = {
    feeds: {
        data: [],
        loading: false,
    }
}

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

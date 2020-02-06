import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(<Main store={store} />, document.getElementById('root'));

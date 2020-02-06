import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import GlobalStyle from './styles';
import Home from './containers';
import { ApplicationState } from './store';

interface MainProps {
  store: Store<ApplicationState>;
}

const Main: React.FC<MainProps> = ({ store }) => (
  <Provider store={store}>
    <Home />
    <GlobalStyle />
  </Provider>
);

export default Main;

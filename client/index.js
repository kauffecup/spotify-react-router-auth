import React, { Component } from 'react';
import { render }           from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import reducer from './reducers';
import App     from './components/App';

// load our css. there probably is a better way to do this
// but for now this is our move
require('./style.less');

// Sync dispatched route actions to the history
const hashHistory = createHashHistory();

const store = createStore(reducer, undefined, compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={hashHistory}>
          <Route path="/" component={App}/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

// render town
const rootElement = document.getElementById('root');
render(<Root />, rootElement);

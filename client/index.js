/* eslint no-unused-vars: 0 */
import { configureStore } from '../shared/redux/store/configureStore';
import { Provider } from 'react-redux';
import postReducer from '../shared/redux/reducers/reducer';
import DevTools from '../shared/container/DevTools/DevTools';
import { render } from 'react-dom';
import React from 'react';
import App from '../shared/container/App';
import PostListView from '../shared/container/PostListView/PostListView';
import PostDetailView from '../shared/container/PostDetailView/PostDetailView';
import { Router, browserHistory, Route, IndexRoute, match } from 'react-router';
import routes from '../shared/routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';

const store = configureStore(window.__INITIAL_STATE__);
const history = browserHistory;
const dest = document.getElementById('root');

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), dest);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line
  }
}

if (process.env.CLIENT) {
  render(
    <Provider store={store} key="provider">
      <div>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>,
    dest
  );
}

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/reducers';

export const history = createBrowserHistory();

const defaultState = {
  posts,
  comments
};



export default function configureStore(defaultState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    defaultState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  return store
}
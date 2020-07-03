import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import think from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleweres: Middleware[] = [think];

if (process.env.NODE_ENV === 'development') {
  const logger: Middleware = createLogger({
    collapsed: true,
    diff: true
  });

  middleweres.push(logger);
}

export const initializeStore: (preloadedState?: any) => Store = (preloadedState?: any): Store => {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleweres))
  );
};

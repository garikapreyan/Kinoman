import { createStore,compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/reducers';

const loggerMiddleware = createLogger();

export default function configureStore() {

  return createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
  //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
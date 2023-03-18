import {
    combineReducers,
    compose,
    legacy_createStore
  } from "redux";

  import valuesReducer from './ValueReducer';

  const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  function configureStore() {
    return legacy_createStore(
      combineReducers({
        values: valuesReducer,
      }),
      
      compose(
        ReactReduxDevTools,
      )
    );
  }
  
  export default configureStore;
  
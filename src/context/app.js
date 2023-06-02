import React, { createContext, useReducer,useContext } from 'react';
import PropTypes from 'prop-types';
import appReducer from '../reducers/appReducer';
import appStore from '../stores/appStore';

export const AppContext = createContext(appStore);


const AppStore = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appStore);
  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppStore;

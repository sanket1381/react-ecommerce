import React, { createContext, useReducer,useContext } from 'react';
import PropTypes from 'prop-types';
import userReducer from '../reducers/userReducer';
import userStore from '../stores/userStore';

export const UserContext = createContext(userStore);


const UserStore = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userStore);
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserStore;

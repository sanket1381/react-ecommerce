import * as actions from '../actionTypes/index';
const appReducer = (state, action) => {
  switch (action.type) {
    
      case actions.CHANGE_USER_NAME:
      return {
        ...state,
        mobileMenuClicked:"akshay",
      };
      case actions.TOGGLE_MOBILE_MENU:
        return {
          ...state,
          mobileMenuClicked:!state.mobileMenuClicked ,
        };
  

    default:
      return state;
  }
};

export default appReducer;

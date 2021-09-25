import React from "react";
const initialState = { isLogged: false, userDetails: {} ,socialIcons: {},contactDetails:{},dashboard:''};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      state = { ...state };
      state["isLogged"] = true;
      state["userDetails"] = action.payload;
      return state;

    case "CONTACT":
      state = { ...state };
      state["contactDetails"] = action.payload.contactDetails;
      state["socialIcons"] = action.payload.socialIcons;

    case "LOGOUT":
      state = { ...state };
      state["isLogged"] = false;
      state["userDetails"] = {};
    case "DASHBOARD":
      state = { ...state };
      state["dashboard"] = action.payload; 
    default:
      return state;
  }
}

export default reducer;

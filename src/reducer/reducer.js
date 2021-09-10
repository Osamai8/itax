import React from 'react'
const initialState = {isLogged: false,userDetails:{}}
function reducer ( state= initialState,action) {
    switch (action.type) {
        case "LOGIN":
            state = {...state}
            state["isLogged"] = true
            state["userDetails"] = action.payload
           return state
    
        default:
           return state
    }
}

export default reducer

import React from 'react'
const initialState = {isLogged: false,userDetails:{}}
function reducer ( state= initialState,action) {
    switch (action.type) {
        case "LOGIN":
            state = {...state}
            state["isLogged"] = true
            state["userDetails"] = action.payload
           return state
    
        case "HOME":
            state = {...state}
            state['bannerData'] = action.payload.bannerData
            state['socialIcons'] = action.payload.socialIcons
        default:
           return state
    }
}

export default reducer

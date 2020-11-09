import actionTypes from "../actions/actionTypes"

const initialState = {
    url: '/'
}

const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_URL:
            return {
                ...state,
                url: action.payload.url,
            }
        default:
            return state;
    }
}


export default urlReducer;
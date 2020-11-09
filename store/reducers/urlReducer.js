import actionTypes from "../actions/actionTypes"

const initialState = {
    url: '/',
    isBackDrop: false
}

const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_URL:
            return {
                ...state,
                url: action.payload.url,
            }
        case actionTypes.TOGGLE_BACK_DROP:
            {
                let isBackDrop = !state.isBackDrop;
                return {
                    ...state,
                    isBackDrop: isBackDrop
                }
            }
        default:
            return state;
    }
}


export default urlReducer;
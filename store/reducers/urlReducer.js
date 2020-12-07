import actionTypes from "../actions/actionTypes"

const initialState = {
    url: '/',
    isBackDrop: false,
    img: '',
    isPreview: false
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
        case actionTypes.TOGGLE_PREVIEW:
            {
                let newIsPreview = !state.isPreview;
                return {
                    ...state,
                    isPreview: newIsPreview
                }
            }
        case actionTypes.SET_PREVIEW_IMG:
            return {
                ...state,
                img: action.payload.img
            }
        default:
            return state;
    }
}


export default urlReducer;
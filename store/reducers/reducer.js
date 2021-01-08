import actionTypes from "../actions/actionTypes"

const initialState = {
    url: '/',
    isBackDrop: false,
    img: '',
    isPreview: false,
    timeIntervalHandler: null
}

const reducer = (state = initialState, action) => {
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
        case actionTypes.SET_TIME_INTERVAL_HANDLER:
            return {
                ...state,
                timeIntervalHandler: action.payload.handler
            }
        case actionTypes.CLEAR_TIME_INTERVAL_HANDLER: {
            clearInterval(state.timeIntervalHandler);
            return {
                ...state,
                timeIntervalHandler: null
            }
        }
        default:
            return state;
    }
}


export default reducer;
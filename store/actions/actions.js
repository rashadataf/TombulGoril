import actionTypes from "./actionTypes";

export const setCurrentUrl = (url) => {
    return {
        type: actionTypes.SET_CURRENT_URL,
        payload: {
            url: url,
        }
    }
}

export const toggleBackDrop = () => {
    return {
        type: actionTypes.TOGGLE_BACK_DROP
    }
}

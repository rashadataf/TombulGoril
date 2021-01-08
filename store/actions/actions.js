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

export const setPreviewImage = (img) => {
    return {
        type: actionTypes.SET_PREVIEW_IMG,
        payload: {
            img: img
        }
    }
}

export const togglePreview = () => {
    return {
        type: actionTypes.TOGGLE_PREVIEW
    }
}

export const setTimeIntervalHandler = (handler) => {
    return {
        type: actionTypes.SET_TIME_INTERVAL_HANDLER,
        payload: {
            handler: handler
        }
    }
}

export const clearTimeIntervalHandler = () => {
    return {
        type: actionTypes.CLEAR_TIME_INTERVAL_HANDLER
    }
}

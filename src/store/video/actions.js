import actionTypes from './actionTypes';

export const setVideoURL = (url) => {
    return {type: actionTypes.SET_VIDEO_URL, url}
}

export const setVideoID = (id) => {
    return {type: actionTypes.SET_VIDEO_ID, id}
}

export const setVideoProvider = (provider) => {
    return {type: actionTypes.SET_VIDEO_PROVIDER, provider}
}

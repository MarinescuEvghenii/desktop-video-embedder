import actionTypes from './actionTypes';

export const setVideoURL = (url) => {
    return {type: actionTypes.SET_VIDEO_URL, url}
}
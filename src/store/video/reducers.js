import actionTypes from './actionTypes';

const initState = {
    url      : '',
    videoId  : '',
    hostname : ''
};

export const video = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_VIDEO_URL:
            return Object.assign({}, state, {
                url      : action.url,
                videoId  : action.videoId,
                hostname : action.type
            });

        default:
            return state;
    }
}

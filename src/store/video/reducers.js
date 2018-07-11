import actionTypes from './actionTypes';

const initState = {
    url      : '',
    id       : '',
    provider : ''
};

export const video = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_VIDEO_URL:
            return Object.assign({}, state, {url : action.url});

        case actionTypes.SET_VIDEO_ID:
            return Object.assign({}, state, {id : action.id});

        case actionTypes.SET_VIDEO_PROVIDER:
            return Object.assign({}, state, {provider : action.provider});

        default:
            return state;
    }
}

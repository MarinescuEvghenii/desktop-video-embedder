import actionTypes from './actionTypes';

export const parseVideoURL = (store) => (next) => (action) => {
    if(action.type === actionTypes.SET_VIDEO_URL) {
        action.id = 'z2EUT4gwkr4';
        action.provider = 'youtube'
    }

    next(action);
}

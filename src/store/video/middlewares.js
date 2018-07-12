import actionTypes from './actionTypes';
import {parseVideoUrl} from '../../utils/parseVideoUrl';
import {applyMiddleware} from 'redux';

const parseVideoURL = (store) => (next) => (action) => {
    if(action.type === actionTypes.SET_VIDEO_URL) {
        const {videoId, hostname} = parseVideoUrl(action.url);

        action.videoId  = videoId;
        action.hostname = hostname;
    }

    next(action);
}

export default applyMiddleware(parseVideoURL);

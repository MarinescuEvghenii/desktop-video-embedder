import {setVideoUrl} from '../actions';
import actionTypes from '../actionTypes';

describe('Video actions:', () => {
    test(`Should create an action to set the video url.`, () => {

        const action = {
            type : actionTypes.SET_VIDEO_URL,
            url  : '',
        };

        expect(setVideoUrl(action.url)).toEqual(action);
    });
});

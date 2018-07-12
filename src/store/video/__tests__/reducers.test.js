import {video} from '../reducers';
import actionTypes from '../actionTypes';

describe('Video reducer:', () => {
    test('Should return the initial state.', () => {
        expect(video({}, {})).toEqual({});
    });

    test(`Should handle ${actionTypes.SET_VIDEO_URL}.`, () => {
        const data = {
            url      : '',
            videoId  : '',
            hostname : ''
        }

        const action = Object.assign({}, {
            type : actionTypes.SET_VIDEO_URL
        }, data);

        expect(video({}, action)).toEqual(data);
    });
});

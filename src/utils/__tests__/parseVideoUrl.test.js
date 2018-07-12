import {parseVideoUrl} from '../parseVideoUrl';

const ids = {
    youtube : 'gEPmA3USJdI',
    vimeo   : '141125221'
};

const urls = {
    youtube : [
        `http://www.youtube.com/watch?v=${ids.youtube}`, 
        `https://www.youtube.com/embed/${ids.youtube}`,
        `https://youtube.com/watch?v=${ids.youtube}`,
        `http://youtu.be/${ids.youtube}`
    ],

    vimeo : [
        `http://www.vimeo.com/${ids.vimeo}`,
        // 'https://www.vimeo.com/channels/*/*',
        // 'http://vimeo.com/groups/*/videos/*'
    ]
};

describe('Parse youtube url:', () => {
    urls.youtube.forEach(url => {
        test(`Expect videoId to be ${ids.youtube}.`, () => {
            const result = parseVideoUrl(url);
            expect(result.videoId).toBe(ids.youtube);
        });
    });
});

describe('Parse vimeo url:', () => {
    urls.vimeo.forEach(url => {
        test(`Expect videoId to be ${ids.vimeo}.`, () => {
            const result = parseVideoUrl(url);
            expect(result.videoId).toBe(ids.vimeo);
        });
    });
});

import {parseVideoUrl} from '../parseVideoUrl';

const exampleUrl = "";

describe('Parse youtube url:', () => {
    const exampleUrl = 'https://www.youtube.com/watch?v=gEPmA3USJdI';

    test(`Expect videoId to be gEPmA3USJdI.`, () => {
        const result = parseVideoUrl(exampleUrl);
        expect(result.videoId).toBe('gEPmA3USJdI');
    });

    test(`Expect hostname to be youtube.com.`, () => {
        const result = parseVideoUrl(exampleUrl);
        expect(result.hostname).toBe('youtube.com');
    });
});

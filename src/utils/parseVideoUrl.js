export const parseVideoUrl = (url) => {
    return parseYoutubeUrl(url);
}

const parseYoutubeUrl = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match  = url.match(regExp);

    if (match && match[7].length === 11 ){
        return {
            videoId  : match[7],
            hostname : 'youtube.com'
        };
    }
    else {
        return {videoId: '', hostname: ''};
    }
}

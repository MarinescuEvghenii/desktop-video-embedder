export const parseVideoUrl = (url) => {
    
    if (url.indexOf('youtu') !== -1) {
        return parseYoutubeUrl(url);
    }
    else if (url.indexOf('vimeo') !== -1) {
        return parseVimeoUrl(url);
    }

    return null;
}

const parseYoutubeUrl = (url) => {
    const regExp  = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match   = url.match(regExp);
    const videoId = (match && match[1]) ? match[1] : '';
   
    return {videoId, hostname : 'youtube.com'};
}

const parseVimeoUrl = (url) => {
    const regExp  =  /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    const match   = url.match(regExp);
    const videoId = (match && match[5]) ? match[5] : '';

   return {videoId, hostname : 'vimeo.com'};
}

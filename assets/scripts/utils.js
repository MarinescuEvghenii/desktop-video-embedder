class Utils {
    static parseVideoId (videoUrl) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = videoUrl.match(regExp);

        if (match && match[7].length === 11 ){
            return match[7];
        }
        else {
            return null;
        }
    }
}

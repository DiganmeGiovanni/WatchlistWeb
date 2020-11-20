import axios from 'axios'

class YoutubeUtils {
    normalizeSearchResults(youtubeResults) {
        return youtubeResults.items.map(item => {
            let thumbnailUrl = ''
            if (item.snippet.thumbnails.hight) {
                thumbnailUrl = item.snippet.thumbnails.hight.url
            } else if (item.snippet.thumbnails.medium) {
                thumbnailUrl = item.snippet.thumbnails.medium.url
            } else {
                thumbnailUrl = item.snippet.thumbnails.default.url
            }

            return {
                videoId: item.id.videoId,
                title: item.snippet.title,
                thumbnailUrl
            }
        })
    }
}

class YoutubeClient {
    constructor() {
        
        // TODO Externalize config
        this.apiKey = 'AIzaSyAeKbSvTFyAAHaZx7Uk14Y9opU3GusmPXI'

        this.axiosInstance = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })

        this.ytUtils = new YoutubeUtils()
    }

    searchTrailers(title, onResults, onError) {
        this.axiosInstance
            .get('search', {
                params: {
                    key: this.apiKey,
                    part: 'snippet',
                    type: 'video',
                    q: `${ title } teaser trailer`
                }
            })
            .then(res => {
                if (res.status === 200) {
                    let results = this
                        .ytUtils
                        .normalizeSearchResults(
                            res.data
                        )

                    onResults(results)
                } else {
                    console.error(res)
                    onError()
                }
            })
            .catch(err => {
                console.error(err)
                onError()
            })
    }
}

export default new YoutubeClient()

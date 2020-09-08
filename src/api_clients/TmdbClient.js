
const imagesBaseUrl = 'https://image.tmdb.org/t/p/'

const currentWidth = () => {
    return Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    )
}

export const imageSizes = {
    poster: {
        w92: 'w92',
        w154: 'w154',
        w185: 'w185',
        w342: 'w342',
        w500: 'w500',
        w780: 'w780',
        original: 'original'
    },
    backdrop: {
        w300: 'w300',
        w780: 'w780',
        w1280: 'w1280',
        original: 'original'
    }
}

class TmdbClient {

    getPosterUrl(path) {
        const vWidth = currentWidth()
        let imageWidth = imageSizes.poster.original

        if (vWidth > 767) {
            imageWidth = imageSizes.poster.w342
        }

        else if (vWidth > 575) {
            imageWidth = imageSizes.poster.w154
        }

        else if (vWidth > 424) {
            imageWidth = imageSizes.poster.w185
        }

        else {
            imageWidth = imageSizes.poster.w154
        }

        return this.getPosterUrlForSize(path, imageWidth)
    }

    getPosterUrlForSize(path, size) {
        return `${ imagesBaseUrl }${ size }${ path }`
    }
}

export default new TmdbClient()

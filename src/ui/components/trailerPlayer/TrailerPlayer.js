import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

import ytClient from '../../../api_clients/YoutubeClient'

import Header from '../common/header/Header'
import Loading from '../common/Loading'
import VideoThumbnail from './thumbnail/VideoThumbnail'

import styles from './TrailerPlayer.module.scss'

const TrailerPlayer = ({ tmdbId, title }) => {
    const [ytResults, setYtResults] = useState(null)
    const [activeVideoId, setActiveVideoId] = useState(null)
    const [playerHeight, setPlayerHeight] = useState(0)

    useEffect(() => {
        if (!ytResults) {
            ytClient.searchTrailers(
                title,
                results => {
                    setYtResults(results)

                    if (results.length > 0) {
                        setActiveVideoId(results[0].videoId)
                    }
                },
                () => { console.error('Error ocurred') }
            )
        }
    })

    useEffect(() => {
        const onWindowResize = () => {
            let newHeight = window.innerWidth / 1.9
            if (newHeight > window.innerHeight * 0.8) {
                newHeight = window.innerHeight * 0.8
            }

            setPlayerHeight(newHeight)
        }

        // Add event listener
        window.addEventListener("resize", onWindowResize)
        
        // Update with initial window size
        onWindowResize()
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", onWindowResize)
    }, []) // Empty array ensures that effect is only run on mount

    const makeThumbnails = () => <div className={ styles.thumbnailsGrid }>
        { ytResults.map(ytResult => <VideoThumbnail
            key={`thumb-${ ytResult.videoId }`}
            title={ ytResult.title }
            thumbnailUrl={ ytResult.thumbnailUrl }
            selected={ ytResult.videoId === activeVideoId }
            onSelect={ () => {
                if (ytResult.videoId !== activeVideoId) {
                    setActiveVideoId(ytResult.videoId)
                }
            }}
        />) }
    </div>

    return <div className='container-fuid p-3 p-lg-4'>
        <Header title={`Trailer: ${ title }`} />
        
        <div className="row">
            <div className="col-12">
                <div
                    className={ styles.player }
                    style={{ height: `${ playerHeight }px`}}
                >
                    { activeVideoId && <Youtube
                        videoId={ activeVideoId }
                        opts={{
                            autoplay: 1,
                            height: `${ playerHeight }px`,
                            width: '100%'
                        }}
                    /> }
                </div>
            </div>
            <div className="col-12 pt-3">
                { ytResults && makeThumbnails() }
            </div>
        </div>

        { !ytResults && <Loading text='Searching for trailers'/> }
    </div>
}

export default TrailerPlayer
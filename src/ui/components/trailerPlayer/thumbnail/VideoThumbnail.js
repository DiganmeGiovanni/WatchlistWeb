import React from 'react'
import PropTypes from 'prop-types'

import styles from './VideoThumbnail.module.scss'

const VideoThumbnail = ({ title, thumbnailUrl, onSelect, selected }) => {

    return <div
        className={ selected ? styles.activeVideoThumb : styles.videoThumb }
        onClick={ () => { onSelect() }}
    >
        <div
            className={ styles.thumbnail }
            style={{ backgroundImage: `url(${ thumbnailUrl })` }}
        ></div>
        <span className={ styles.title }>{ title }</span>
    </div>
}

export default VideoThumbnail

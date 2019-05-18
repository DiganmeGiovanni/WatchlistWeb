import React from "react";
import APITmdb from "../../../api/APITmdb";
import moment from "moment";
import { hasMovieType } from "../../types/WatchlistTypes";

const MovieItem = ({ has_movie }) => {

    const makeImage = () => {
        let imgPicture = null;
        for (let picture of has_movie.movie.pictures) {
            if (picture.category.id === 1) {
                imgPicture = picture;
            }
        }

        let url = APITmdb.posterUrl(
            imgPicture.url,
            APITmdb.WIDTH.poster.w342
        );
        return <div
            className="image"
            style={{
                backgroundImage: `url(${url})`
            }}
        />
    };

    const makeSubtitle = () => {
        let subtitle = "";

        let releaseDate = has_movie.movie.release_date;
        if (releaseDate) {
            subtitle += moment(releaseDate).format('Y');
        }

        if (has_movie.movie.genres.length > 0) {
            subtitle += ' / ';
            for (let i = 0; i < has_movie.movie.genres.length; i++) {
                subtitle += has_movie.movie.genres[i].name;

                if (i < has_movie.movie.genres.length - 1) {
                    subtitle += ', ';
                }
            }
        }

        return subtitle;
    };

    return (
        <div className="col-6 col-sm-4 col-md-4 col-xl-3 pb-5">
            <div className="movie-item">
                { makeImage() }
                <div className="subtitle">{ makeSubtitle() }</div>
                <div className="title">{ has_movie.movie.title }</div>
            </div>
        </div>
    )
};

MovieItem.propTypes = {
    has_movie: hasMovieType
};

export default MovieItem;

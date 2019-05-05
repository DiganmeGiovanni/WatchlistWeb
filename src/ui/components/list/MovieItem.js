import React from "react";
import PropTypes from "prop-types";
import APITmdb from "../../../api/APITmdb";

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

    return (
        <div className="col-6 col-sm-4 col-md-4 col-xl-3 pb-5">
            <div className="movie-item">
                { makeImage() }
                <div className="title">{ has_movie.movie.title }</div>
            </div>
        </div>
    )
};

MovieItem.propTypes = {
    has_movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        added_at: PropTypes.string.isRequired,
        seen_at: PropTypes.string,
        added_by: PropTypes.number.isRequired,
        movie: PropTypes.shape({
            id: PropTypes.number.isRequired,
            tmdb_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            original_title: PropTypes.string.isRequired,
            synopsis: PropTypes.string,
            rating: PropTypes.number,
            genres: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })),
            pictures: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                category: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired
                })
            }))
        })
    })
};

export default MovieItem;

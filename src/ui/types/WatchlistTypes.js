import PropTypes from "prop-types";

export const userType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
});

export const listType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    is_default_list: PropTypes.bool.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired
})

export const genreType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
})

export const movieType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    tmdb_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    synopsis: PropTypes.string,
    rating: PropTypes.number,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(genreType),
})

export const hasMovieType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    added_at: PropTypes.string.isRequired,
    seen_at: PropTypes.string,
    added_by: PropTypes.number.isRequired,
    movie: movieType
})

export const movieSearchResultType = PropTypes.shape({
    tmdb_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired
})

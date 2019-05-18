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
});

export const genreType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
});

export const pictureCategoryType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
});

export const pictureType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    category: pictureCategoryType
});

export const movieType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    tmdb_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    synopsis: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.arrayOf(genreType),
    pictures: PropTypes.arrayOf(pictureType)
});

export const hasMovieType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    added_at: PropTypes.string.isRequired,
    seen_at: PropTypes.string,
    added_by: PropTypes.number.isRequired,
    movie: movieType
});

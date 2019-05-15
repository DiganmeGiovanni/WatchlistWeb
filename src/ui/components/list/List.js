import React from "react";
import Headerbar from "./Headerbar";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);

        this.state = {
            filter: ''
        }
    }

    componentDidMount() {
        this.props.selectList(this.props.listId);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.listId !== this.props.id) {
            this.props.selectList(nextProps.listId);
        }
    }

    makeEmptyStatus() {
        return <div className="row">
            <div className="col-lg-4 offset-lg-4 pt-5 text-center">
                <span className="fas fa-5x fa-tape"/>
                <p className="fs-big mt-3">
                    Agrega la primer pelicula a tu lista
                    y no dejes que las palomitas se aburran
                </p>
                <br/>

                <button className="btn btn-primary"
                        onClick={ this.onAddClicked }
                >
                    Agregar pelicula
                </button>
            </div>
        </div>
    }

    makeLoadingContents() {
        return <div className="row">
            <div className="col-lg-4 offset-lg-4 pt-5 text-center">
                <span className="fas fa-3x fa-spin fa-spinner"/>
                <p className="fs-big mt-3">
                    Obteniendo contenido de la lista
                </p>
                <br/>
            </div>
        </div>
    }

    makeMovieItems() {
        if (!this.props.hasMovies) {
            return this.makeEmptyStatus();
        }

        let filteredMovies = this.props.hasMovies;
        if (this.state.filter) {
            filteredMovies = filteredMovies.filter(has_movie => {
                return has_movie.movie
                    .title
                    .toUpperCase()
                    .includes(this.state.filter.toUpperCase());
            })
        }

        return <div className="row pt-4">
            { filteredMovies.map((has_movie, idx) =>
                <MovieItem
                    has_movie={ has_movie }
                    key={`movie-${ idx }`}
                />
            )}
        </div>
    }

    onFilterChange(e) {
        this.setState({
            filter: e.target.value
        });
    }

    // noinspection JSMethodCanBeStatic
    onAddClicked() {
        console.log('Adding movie to list');
    }

    render() {
        if (this.props.list === null) {
            return <div className="section-list">
                <div className="container-fluid">
                    { this.makeLoadingContents() }
                </div>
            </div>
        }

        return (
            <div className="section-list">
                <div className="container-fluid">
                    <Headerbar
                        title={ this.props.list.name }
                        filter={ this.state.filter }
                        onFilterChange={ this.onFilterChange }
                    />
                    { this.makeMovieItems() }
                </div>
            </div>
        );
    }
};

List.propTypes = {
    listId: PropTypes.string.isRequired,
    list: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        is_default_list: PropTypes.bool.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
        deleted: PropTypes.bool.isRequired
    }),

    hasMovies: PropTypes.arrayOf(PropTypes.shape({
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
    })),
    selectList: PropTypes.func.isRequired
};

export default List;

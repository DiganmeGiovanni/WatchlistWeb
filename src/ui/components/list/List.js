import React from "react";
import Headerbar from "./Headerbar";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { hasMovieType, listType, userType } from "../../types/WatchlistTypes";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);

        this.state = {
            filter: ''
        }
    }

    componentDidMount() {
        if (!this.props.user) {
            this.props.attemptLocalLogin();
        }

        if (this.props.listId !== this.props.selectedListId) {
            this.props.onListSelected(this.props.listId);
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // if (nextProps.listId !== this.props.id) {
        //     this.props.selectList(nextProps.listId);
        // }
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
    listId: PropTypes.number.isRequired,
    list: listType,
    selectedListId: PropTypes.number,
    hasMovies: PropTypes.arrayOf(hasMovieType),
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    user: userType,

    onListSelected: PropTypes.func.isRequired,
    attemptLocalLogin: PropTypes.func.isRequired
};

export default List;

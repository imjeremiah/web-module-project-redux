import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const { displayFavorites } = props;
    const { push } = useHistory();


    const handleRemove = (id) => {
        props.dispatch(removeFavorite(id));
        push('/movies');
    }
    
    return (
        <>
        {displayFavorites && <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {
                props.favorites.map(movie=>{
                    return <div key={movie.id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span><span onClick={() => handleRemove(movie.id)} className="material-icons">remove_circle</span></span>
                        </Link> 
                    </div>
                })
            }
        </div>}
        </>
    );
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    });
}

export default connect(mapStateToProps)(FavoriteMovieList);
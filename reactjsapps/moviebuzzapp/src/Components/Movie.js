import React from 'react';
import Likes from './Likes';

const Movie = (props) => {
    
    return (
        <div>
            <h2>HeroName : {props.heroName} and VillanName : {props.villanName} and Likes : {props.children} </h2>
        </div>
    );
};

export default Movie;
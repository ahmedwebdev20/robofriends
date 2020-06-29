import React, { Component } from 'react';

const Card = ({ id, name, email }) => {

    //or const {id, name, email} = props;

    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>

            <img alt='robot' src={'https://robohash.org/' + id} />

            <div>
                <h2>{name} </h2>
                <p> {email}</p>

            </div>
        </div>

    );
}

export default Card;


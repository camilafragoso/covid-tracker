import React from 'react';

const Country = (props) => {
    return (
        <div className="post">
            <h2>{props.name}</h2>
            <h5>Casos Confirmados: {props.confirmed}</h5>
            <h5>Mortes: {props.deaths}</h5>
            <h5>Recuperados: {props.recovered}</h5>
            <h6>Data: {props.data}</h6>
        </div>
    );
};

export default Country;
import React from 'react';
import '../Post/State.css';

const Post = (props) => {
    return (
        <div className="post">
            <h3>{props.state}</h3>
            <h5>Casos Confirmados: {props.cases}</h5>
            <h5>Casos Suspeitos: {props.suspeitos}</h5>
            <h5>Mortes: {props.deaths}</h5>
            <h6>Data: {props.data}</h6>
        </div>
    );
};

export default Post;
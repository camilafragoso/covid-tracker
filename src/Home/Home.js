import React from 'react';
import '../NewPost/NewPost';

const Home = (props) => {

    return (
        <div className="post">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <h4>{props.author}</h4>
        </div>
    );
};

export default Home;
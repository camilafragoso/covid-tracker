import React from 'react';
import '../Post/State.css';
import CountUp from 'react-countup';

const Post = (props) => {
    return (
        <div className="post">
            <h3>{props.state}</h3>
            <h5>Casos Confirmados: 
                <CountUp start={0} end={props.cases} duration={2.5} separator=","/>
            </h5>
            <h5>Casos Suspeitos: 
            <CountUp start={0} end={props.suspeitos} duration={2.5} separator=","/>
            </h5>
            <h5>Mortes: 
            <CountUp start={0} end={props.deaths} duration={2.5} separator=","/>
            </h5>
            <h6>{props.data} </h6>
        </div>
    );
};

export default Post;
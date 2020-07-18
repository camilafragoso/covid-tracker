import React from 'react';
import CountUp from 'react-countup';

const Country = (props) => {
    return (
        <div className="post">
            <h2>{props.name}</h2>
            <h5>Casos Confirmados: 
            <CountUp start={0} end={props.confirmed} duration={2.5} separator=","/>
            </h5>
            <h5>Mortes: 
            <CountUp start={0} end={props.deaths} duration={2.5} separator=","/>
            </h5>
            <h5>Recuperados: 
            <CountUp start={0} end={props.recovered} duration={2.5} separator=","/>
            </h5>
            <h6>{props.data}</h6>
        </div>
    );
};

export default Country;
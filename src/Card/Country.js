import React from 'react';
import CountUp from 'react-countup';

const Country = (props) => {
    return (
        <div className="post">
            <h2>{props.name}</h2>
            <div className="one">
                <h5>Infectados</h5>
                <h4><CountUp start={0} end={props.confirmed} duration={2.5} separator=","/>
                </h4>
            </div>
            <div className="one">
                <h5>Mortes</h5>
                <h4><CountUp start={0} end={props.deaths} duration={2.5} separator=","/>
                </h4>
            </div>
            <div className="one">
                <h5>Recuperados</h5>
                <h4><CountUp start={0} end={props.recovered} duration={2.5} separator=","/>
                </h4>
            </div>          
            <h6>{props.data}</h6>
        </div>
    );
};

export default Country;
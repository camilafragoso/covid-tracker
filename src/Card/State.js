import React from 'react';
import '../Card/State.css';
import CountUp from 'react-countup';
import Typography from '@material-ui/core/Typography';


const State = (props) => { 

    return (
        <div className="post">
            <h3>{props.state}</h3>
            <div className="one">
            <Typography color="textPrimary" gutterbottom>Infectados</Typography>
                <h4>
                    <CountUp start={0} end={props.cases} duration={2.5} separator=","/>
                </h4>
                
            </div>
            <div className="one two">
            <Typography color="textPrimary" gutterbottom>Suspeitos</Typography>
                <h4>
                <CountUp start={0} end={props.suspeitos} duration={2.5} separator=","/>
                </h4>
                
            </div>
            <div className="one three">
            <Typography color="textPrimary" gutterbottom>Óbitos</Typography>
                <h4>
                <CountUp start={0} end={props.deaths} duration={2.5} separator=","/>
                </h4>
                
            </div>
            
            <h6>{props.data} </h6>
        </div>
    );
};

export default State;
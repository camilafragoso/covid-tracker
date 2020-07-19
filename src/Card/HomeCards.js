import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import '../Home/Home.css';

const Cards = (props) => {

    return (
        <CardContent className="card">
            <Typography color="textSecondary" gutterbottom>{props.title}</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={props.number} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">
                {props.data}
            </Typography>
            <Typography variant="body2">{props.subtitle}</Typography>
        </CardContent>
    );
};

export default Cards;

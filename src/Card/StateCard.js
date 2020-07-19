import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CountUp from 'react-countup';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const StateCard = (props) => {

    const classes = useStyles();

    return (
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> {props.state}
          </Typography>
          <div className="content">
            <div className="two">
            <Typography color="textSecondary" gutterbottom>Infectados</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={props.cases} duration={2.5} separator=","/>
                </Typography>
            </div>
            <div className="two">
            <Typography color="textSecondary" gutterbottom>Suspeitos</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={props.suspects} duration={2.5} separator=","/>
                </Typography>
            </div>
            <div className="two">
            <Typography color="textSecondary" gutterbottom>Óbitos</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={props.deaths} duration={2.5} separator=","/>
                </Typography>
            </div>      
          </div>
        </CardContent>
    );
};

export default StateCard;
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import '../Home/Home.css';
import Chart from '../Chart/Chart';

const Home = (props) => {

    return (
        <div className="home-container">
            <Grid container spacing={3} justify="center" className="container">
                <Grid item component={Card} xs={12} md={2} className="card infected">
                    <CardContent className="card">
                        <Typography color="textSecondary" gutterbottom>Infectados</Typography>
                        <Typography variant="h5">
                            {props.confirmed} 
                        </Typography>
                        <Typography color="textSecondary">
                            {props.data}
                        </Typography>
                        <Typography variant="body2">Número de infectados pelo Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className="card recovered">
                    <CardContent  className="card">
                        <Typography color="textSecondary" gutterbottom>Recuperados</Typography>
                        <Typography variant="h5">
                            {props.recovered} 
                        </Typography>
                        <Typography color="textSecondary">{props.data}</Typography>
                        <Typography variant="body2">Número de recuperados do Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className="card deaths">
                    <CardContent  className="card">
                        <Typography color="textSecondary" gutterbottom>Óbitos</Typography>
                        <Typography variant="h5">
                            {props.deaths}
                        </Typography>
                        <Typography color="textSecondary">{props.data}</Typography>
                        <Typography variant="body2">Número de óbitos causados pelo Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
};

export default Home;
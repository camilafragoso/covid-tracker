import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import '../Home/Home.css';
import Cards from '../Card/HomeCards';

const Home = (props) => {

    return (
        <div className="home-container">
            <Grid container spacing={3} justify="center" className="container">
                <Grid item component={Card} xs={12} md={2} className="card infected">
                    <Cards title="Infectados" number={props.confirmed} data={props.data} 
                        subtitle="Número de infectados pelo Covid-19"/>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className="card recovered">
                    <Cards title="Recuperados" number={props.recovered} data={props.data} 
                        subtitle="Número de recuperados do Covid-19"/>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className="card deaths">
                    <Cards title="Óbitos" number={props.deaths} data={props.data} 
                        subtitle="Número de óbitos causados pelo Covid-19"/>
                </Grid>
            </Grid>

        </div>
    );
};

export default Home;
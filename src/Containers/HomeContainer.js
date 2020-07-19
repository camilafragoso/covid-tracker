import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Cards from '../Card/Cards';
import Chart from '../Chart/Chart';
import Picker from '../Picker/Picker';
import '../Containers/HomeContainer.css';

const HomeContainer = (props) => {

    return (
        <div className="home-container">
            <h1>Dados do Covid-19 no Brasil</h1>
            <div>
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
            <Picker state={props.state} handleSelectChange={props.handleSelectChange}></Picker>
            <div className="chart-container">
                  <Chart className="chart" confirmed={props.confirmed} deaths={props.deaths} recovered={props.recovered} 
                  data={props.data}></Chart>
            </div>
        </div>
    );
};

export default HomeContainer;

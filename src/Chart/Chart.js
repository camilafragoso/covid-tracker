import React from 'react';
import { Bar } from 'react-chartjs-2';
import { red, green } from '@material-ui/core/colors';
import '../Chart/Chart.css';


const Chart = (props) => {

    let confirmed=props.confirmed;
    let recovered=props.recovered;
    let deaths=props.deaths;

    return (
        <div className="chart">
            <Bar className="chart"
                data={{
                    labels: ['Infectados', 'Recuperados', 'Óbitos'],
                    datasets: [{
                        label: 'Pessoas',
                        backgroundColor: ['red', 'green', 'black'],
                    data: [confirmed, recovered, deaths]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: 'Situação atual no Brasil'}
                }}            
            />

            
        </div>
    );
};

export default Chart;
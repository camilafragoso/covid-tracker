import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import StateCard from '../Card/StateCard';
import Card from '@material-ui/core/Card';

const StateContainer = (props) => {

    const [newbase, setnewbase] = useState('');

    const data = props.database;
    let toarray = Object.values(data);
    setnewbase(toarray.data);


    const state = newbase.map(state => {
        return (
            <StateCard cases={newbase.cases} suspects={newbase.suspects} deaths={newbase.deaths} />
        );
    });

    return (
        <Grid container spacing={3} justify="center" className="container">
            <Grid item component={Card} xs={12} md={3} className="">
                {state}
            </Grid>
        </Grid>
    );
};

export default StateContainer;
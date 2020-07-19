import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import axios from 'axios';


const Picker = (props) => {

    const [states, setStates] = useState([]);
    const [statearray, setStateArray] = useState([]);

    const savestates = async () => {
        const response = await props.state;
        setStates(response);
      }; 
    savestates();

    const convertida = states.map(function(obj) {
        return Object.keys(obj).map(function(chave) {
            return obj[chave];
        });
    });

    const foreachstate = convertida.map(state => {
        return (
        <option>{state[2]}</option>
        ); 
    });

    return (
        <FormControl>
            <NativeSelect>
                <option value="Estados">Selecionar Estado</option>
                {foreachstate}
            </NativeSelect>
        </FormControl>
    );
};

export default Picker;
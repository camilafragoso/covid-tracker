import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import axios from 'axios';


const Picker = (props) => {
    let convertida = null;
    let foreachstate = null;

    const [states, setStates] = useState([]);

    /*useEffect(()=>{
        axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
          .then(response => {
             let toarray = Object.values(response);
            setStates(toarray[0].data);
          });
      });*/
    
    const savestates = async () => {
        const response = await props.state;
        setStates(response);
      }; 
    savestates();

    if (states !== undefined){
        if (states.length == 27){
            convertida = states.map(function(obj) {
                return Object.keys(obj).map(function(chave) {
                    return obj[chave];
                });
            });
        }
    }
    
        if (convertida !== null){
            foreachstate = convertida.map(state => {
                return (
                <option>{state[2]}</option>
                ); 
            });
        }

    const handleSelectChange = async (stateclicked) => {
        states.map(estado => {
          if (estado.state == stateclicked) {
            let convertido = Object.values(estado);
            setStates(convertido);
          }
        })
      };

    return (
        <FormControl>
            <NativeSelect onChange={(event)=> {props.handleSelectChange(event.target.value)}}>
                <option value="Estados">{props.pickertitle}</option>
                {foreachstate}
            </NativeSelect>
        </FormControl>
    );
};

export default Picker;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import State from '../Card/State';
import Header from '../Header/Header';
import {Route} from 'react-router-dom';
import Country from '../Card/Country';
import '../Containers/MainContainer.css';
import HomeContainer from './HomeContainer';
import WorldContainer from '../Containers/WorldContainer';

const MainContainer = (props) => {

    const [statesbr, setStatesbr] = useState(['']);
    const [brasil, setBrasil] = useState(['']);
    const [countries, setCountries] = useState(['']);
    const [state, setState] = useState([]);
    const [global, setGlobal] = useState([]);
    
      useEffect(()=>{
        axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
          .then(response => {
             let toarray = Object.values(response);
            setStatesbr(toarray[0].data);
          });
      });
    
      useEffect(()=>{
          axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
          .then(answer => {
            let newarray = Object.values(answer);
            setBrasil(Object.values(newarray[0].data));
          });
        });
    
      useEffect(()=>{
          axios.get('https://covid19-brazil-api.now.sh/api/report/v1/countries')
          .then(resposta => {
            let novoarray = Object.values(resposta);
            setCountries(novoarray[0].data);
          });
      });

      useEffect(()=>{
        axios.get('https://covid19.mathdro.id/api')
        .then(resposta => {
          let temporary = Object.values(resposta.data);
          setGlobal(temporary);
        });
    });
        let convertida = global.map(function(obj) {
              return Object.keys(obj).map(function(chave) {
                  return obj[chave];
              });
          });
    
    let newglobalcases = convertida[0];
    let globalcases = null;

    if (newglobalcases !== undefined){
      globalcases = newglobalcases[0];
    };

    let newglobalrecovered = convertida[1];
    let globalrecovered = null;

    if (newglobalrecovered !== undefined) {
      globalrecovered = newglobalrecovered[0];
    };

    let newglobaldeaths = convertida[2]; 
    let globaldeaths = null;

    if (newglobaldeaths !== undefined){
      globaldeaths = newglobaldeaths[0];
    };

  
    const poststate = statesbr.map(post => {
    return (
      <State state={post.state} cases={post.cases} suspeitos={post.suspects} deaths={post.deaths} 
      data={new Date(post.datetime).toDateString()} uf={post.uf}/>
      ); 
    });
 

    const handleSelectChange = async (state) => {
      statesbr.map(estado => {
        if (estado.state == state) {
          let convertido = Object.values(estado);
          setState(convertido);
        }
      })
    };

    let home = <HomeContainer label="Recuperados" local="no Brasil" title="Recuperados" 
      subtitle="Número de Recuperados do Covid-19" chartlegend="Número de infectados, recuperados e óbitos causados pelo covid-19"
      confirmed={brasil[2]} deaths={brasil[3]} recovered={brasil[4]} 
      data={new Date(brasil[5]).toDateString()} state={statesbr} handleSelectChange={handleSelectChange}/>;

    if (state.length !== 0){
      home = <HomeContainer label="Suspeitos" local={state[2]} title="Suspeitos" 
        subtitle="Número de suspeitos do Covid-19" chartlegend="Número de infectados, suspeitos e óbitos causados pelo covid-19"
        confirmed={state[3]} deaths={state[4]} recovered={state[5]} 
        data={new Date(state[7]).toDateString()} handleSelectChange={handleSelectChange}/>
    };

    return (
        <div>
            <Header/>
            <Route path="/estados">
              <h1>Dados do Covid-19 nos Estados Brasileiros</h1>
              {poststate}
            </Route>
            <Route path="/mundo">
            <WorldContainer label="Recuperados" confirmed={globalcases} deaths={globaldeaths} 
              recovered={globalrecovered} local="no Mundo"
              chartlegend="Número de infectados, recuperados e óbitos causados pelo covid-19"
            ></WorldContainer>;
            </Route>
            <Route path="/" exact>
              {home}
            </Route>
        </div>
    );
  
};

export default MainContainer;


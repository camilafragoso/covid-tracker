import React, {useState, useEffect} from 'react';
import axios from 'axios';
import State from '../Card/State';
import Header from '../Header/Header';
import {Route} from 'react-router-dom';
import Country from '../Card/Country';
import '../Containers/MainContainer.css';
import HomeContainer from './HomeContainer';

const MainContainer = (props) => {

    const [received, setReceived] = useState(['']);
    const [country, setCountry] = useState(['']);
    const [data, setData] = useState(['']);
    const [state, setState] = useState([]);
    
      useEffect(()=>{
        axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
          .then(response => {
             let toarray = Object.values(response);
            setReceived(toarray[0].data);
          });
      });
    
      useEffect(()=>{
          axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
          .then(answer => {
            let newarray = Object.values(answer);
            setCountry(Object.values(newarray[0].data));
            console.log(country[0]);
          });
        });
    
      useEffect(()=>{
          axios.get('https://covid19-brazil-api.now.sh/api/report/v1/countries')
          .then(resposta => {
            let novoarray = Object.values(resposta);
            setData(novoarray[0].data);
          });
      });

    
    const poststate = received.map(post => {
    return (
      <State state={post.state} cases={post.cases} suspeitos={post.suspects} deaths={post.deaths} 
      data={new Date(post.datetime).toDateString()} uf={post.uf}/>
      ); 
    });

    const mundo = data.map(post => {
      return (
        <div>
          <Country name={post.country} confirmed={post.confirmed} deaths={post.deaths} recovered={post.recovered} 
          data={new Date(post.updated_at).toDateString()}/>
        </div>
        ); 
      });

      const handleSelectChange = async (state) => {
        received.map(estado => {
          if (estado.state == state) {
            let convertido = Object.values(estado);
            console.log(convertido);
            console.log(estado);
            setState(convertido);
          }
        })
      };

    let home = <HomeContainer label="Recuperados" local="no Brasil" title="Recuperados" 
    subtitle="Número de Recuperados do Covid-19" chartlegend="Número de infectados, recuperados e óbitos causados pelo covid-19"
    confirmed={country[2]} deaths={country[3]} recovered={country[4]} 
    data={new Date(country[5]).toDateString()} state={received} handleSelectChange={handleSelectChange}/>;

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
              <h1>Dados do Covid-19 no Mundo</h1>
              {mundo}
            </Route>
            <Route path="/" exact>
              {home}
            </Route>
        </div>
    );
  
};

export default MainContainer;


import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Post from '../Post/State';
import Header from '../Header/Header';
import {Route} from 'react-router-dom';
import Country from '../Post/Country';
import Home from '../Home/Home';
import Chart from '../Chart/Chart';
import '../Containers/MainContainer.css';


const MainContainer = (props) => {

    const [received, setReceived] = useState(['']);
    const [country, setCountry] = useState(['']);
    const [data, setData] = useState(['']);
    
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
      <Post state={post.state} cases={post.cases} suspeitos={post.suspects} deaths={post.deaths} 
      data={new Date(post.datetime).toDateString()}/>
      ); 
    });

    const mundo = data.map(post => {
      return (
        <Country name={post.country} confirmed={post.confirmed} deaths={post.deaths} recovered={post.recovered} 
        data={new Date(post.updated_at).toDateString()}/>
        ); 
      });

    return (
        <div>
            <Header></Header>
            <Route path="/estados">
                <h1>Dados do Covid-19 nos Estados Brasileiros</h1>
                {poststate}
            </Route>
            <Route path="/mundo">
              <h1>Dados do Covid-19 no Mundo</h1>
                {mundo}
            </Route>
            <Route path="/">
              <h1>Dados do Covid-19 no Brasil</h1>
              <Home confirmed={country[2]} deaths={country[3]} recovered={country[4]} 
              data={new Date(country[5]).toDateString()}/>
              <div className="chart-container">
                <Chart className="chart" confirmed={country[2]} deaths={country[3]} recovered={country[4]} 
                data={new Date(country[5]).toDateString()}></Chart>
              </div>
            </Route>
        </div>
    );
  
};

export default MainContainer;


import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Post from '../Post/State';
import Header from '../Header/Header';
import {Route} from 'react-router-dom';
import Country from '../Post/Country';

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
      <Post state={post.state} cases={post.cases} suspeitos={post.suspects} deaths={post.deaths} data={post.datetime}/>
      ); 
    });

    const mundo = data.map(post => {
      return (
        <Country name={post.country} confirmed={post.confirmed} deaths={post.deaths} recovered={post.recovered} 
        data={post.updated_at}/>
        ); 
      });

    return (
        <div>
            <Header/>
            <Route path="/" exact>
                <h1>Brasil</h1>
                <Country confirmed={country[2]} deaths={country[3]} recovered={country[4]} 
                data={country[5]}/>
            </Route>
            <Route path="/posts">
                {poststate}
            </Route>
            <Route path="/mundo">
                {mundo}
            </Route>
        </div>
    );
  
};

export default MainContainer;


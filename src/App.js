import React, { Component } from 'react';
import Header from  './components/common/Header'
import Left from './components/common/Left'
import Footer from './components/common/Footer'
import Right from './components/common/Right'
import './App.css'
import './components/common/Right-Left.css'
import Feed from './components/Feed/Feed'
import axios from 'axios';

// import {BrowserRouter,Route,Switch} from 'react-router-dom'
// var express = require('express');
// var app = express();
// var cors=require('cors');
// app.use(cors());


class App extends Component {
  constructor()
  {
    super();
    this.state={
      verify:0
    }
    this.statechange=this.statechange.bind(this)
  }

  statechange(response)
  {
      console.log("hollla aag ka gola")
      if(response===1)
      {
        this.setState({
          verify:response
        })
      }
      else if(response===0)
      {
        this.setState({
          verify:response
        })
      }

  }

  componentDidMount()
  {
    this.continue();
  }
   
  continue()
  {
    axios.get('http://localhost:3000/api/auth/',{
      headers:{
        'x-access-token':localStorage.getItem('token')
      }
    })
    .then((response)=>{
      this.setState({
        verify:response.data.value
      })
    })
  }

  render() {
  if(this.state.verify===0){
    return (
      <div className="App">
                 <div> 
          <Header statechange={this.statechange}/>
        </div>
        <div className="container" >
        <div className="row">
        <div className="col-md-5 kona">
        <Left />
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
        <Right />
        </div>
        </div>
        </div>
       
        
       <Footer />
      
      
       </div>
    
    );
  }
  else if(this.state.verify===1){
    return (
      <div className="App">
      <Feed statechange={this.statechange}/>
      </div>
    )
  } 


}
}

export default App;

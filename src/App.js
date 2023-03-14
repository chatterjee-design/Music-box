
import './App.css';
import Musicbox from './Components/Musicbox';
import Navber from './Components/Navber';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
         <div className='body'>
<Navber></Navber>
     
     <Musicbox></Musicbox> 
    </div>
   
      </div>
    )
  }
}

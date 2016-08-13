import React, { Component } from 'react';
import Graph from './components/Graph';
import SideNav from './components/SideNav';


export default class extends Component {

  render() {

    return (
       <div>
        <Graph />
        <SideNav />
       </div>
    );
  }
}

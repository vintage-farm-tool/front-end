import React, { Component } from 'react';


export default class extends Component {
  componentDidMount(){

  }

  render() {

    return (
      <div className="page-quick-sidebar-settings-list">
        <h3 className="list-heading">Irrigation</h3>
        <ul className="list-items borderless">
            <li> Sprinkle Water
                <input type="checkbox" className="make-switch" data-size="small" data-on-color="success" data-on-text="ON" data-off-color="danger" data-off-text="OFF" /> 
                </li>
            
        </ul>
        <h3 className="list-heading">Temperature</h3>
       <ul className="list-items borderless">
            <li> Warm Plant
                <input type="checkbox" className="make-switch" data-size="small" data-on-color="success" data-on-text="ON" data-off-color="danger" data-off-text="OFF" /> </li>

            <li> Cool Plant
                <input type="checkbox" className="make-switch" checked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="danger" data-off-text="OFF" /> </li>
            
        </ul>
    </div>
    );
  }
}

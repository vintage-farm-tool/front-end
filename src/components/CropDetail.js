import React, { Component } from 'react';


export default class extends Component {
  componentDidMount(){

  }

  render() {

    return (
      <div className="page-quick-sidebar-settings-list">
        <div className="page-quick-sidebar-nav">
            <a href="javascript:;" className="page-quick-sidebar-back-to-list" data-target="#quick_sidebar_tab_1" data-toggle="tab">
                <i className="icon-arrow-left"></i> Back</a>
            
            <a href="javascript:;" className="edit-button pull-right" data-target="#quick_sidebar_tab_2" data-toggle="tab">
                <i className="icon-arrow-right"></i> Edit</a>
        </div>
        <h3 className="list-heading">Cassava Settings</h3>
          <ul className="list-items borderless">
              <li> Minimum Temperature
                  <span className="pull-right">23</span>
              </li> 
              <li> Maximum Temperature
                  <span className="pull-right">73</span>
              </li> 
              <li> Minimum Humidity
                  <span className="pull-right">23</span>
              </li> 
              <li> Maximum Humidity
                  <span className="pull-right">73</span>
              </li> 
              <li> Minimum Lux
                  <span className="pull-right">23</span>
              </li> 
              <li> Maximum Lux
                  <span className="pull-right">73</span>
              </li>
          </ul>
      </div>
    );
  }
}

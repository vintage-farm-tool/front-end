import React, { Component } from 'react';


export default class extends Component {
  componentDidMount(){

  }

  render() {

    return (
      <div className="page-quick-sidebar-settings-list">
          
          <h3 className="list-heading">Cassava Settings</h3>
          <ul className="list-items borderless">
                  <li> Crop
                  <select className="form-control input-inline input-sm input-small">
                      <option value="1">Cassava</option>
                      <option value="2">Tomato</option>
                      <option value="e">Rice</option>
                  </select>
              </li>
                  <li> Minimum Temperature
                          <input className="form-control input-inline input-sm input-small" value="5" />
                      </li> 
                      <li> Maximum Temperature
                          <input className="form-control input-inline input-sm input-small" value="5" />
                      </li> 
                      <li> Minimum Humidity
                          <input className="form-control input-inline input-sm input-small" value="5" />
                      </li> 
                      <li> Maximum Humidity
                          <input className="form-control input-inline input-sm input-small" value="5" />
                      </li> 
                      <li> Minimum Lux
                          <input className="form-control input-inline input-sm input-small" value="5" />
                      </li> 
                      <li> Maximum Lux
                          <input className="form-control input-inline input-sm input-small" value="5" />
                      </li>
              
          </ul>
          <div className="inner-content">
              <button className="btn btn-success">
                  <i className="icon-settings"></i> Save Changes</button>
          </div>
      </div>
    );
  }
}

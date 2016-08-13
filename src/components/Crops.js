import React, { Component } from 'react';


export default class extends Component {
  componentDidMount(){

  }

  render() {

    return (
      <div className="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-classname="page-quick-sidebar-list">
          <div className="page-quick-sidebar-chat-user-form">
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter crop name" />
                  <div className="input-group-btn">
                      <button type="button" className="btn green">
                          <i className="icon-paper-plane"></i>
                      </button>
                  </div>
              </div>
          </div>

          <ul className="media-list list-items">
              <li className="media" data-target="#detail" data-toggle="tab">
                  <img className="media-object" src="images/plant-placeholder.jpg" />
                  <div className="media-body">
                      <h4 className="media-heading">Cassava</h4>
                      <div className="media-heading-sub"> 2016-06-12 </div>
                  </div>
              </li>

              <li className="media" data-target="#detail" data-toggle="tab">
                  <img className="media-object" src="images/plant-placeholder.jpg" />
                  <div className="media-body">
                      <h4 className="media-heading">Cassava</h4>
                      <div className="media-heading-sub"> 2016-06-12 </div>
                  </div>
              </li>
          </ul>
      </div>
    );
  }
}

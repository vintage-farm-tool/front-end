import React, { Component } from 'react';
import Crops from './Crops'
import CropDetail from './CropDetail'
import CropForm from './CropForm'
import CropControl from './CropControl'


export default class extends Component {
  componentDidMount(){

  }

  render() {

    return (
       <div>
          <a href="javascript:;" className="page-quick-sidebar-toggler">
              <i className="icon-login"></i>
          </a>
          <div className="page-quick-sidebar-wrapper" data-close-on-body-click="false">
              <div className="page-quick-sidebar">
                  <ul className="nav nav-tabs">
                      <li className="active">
                          <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Crops
                              <span className="badge badge-danger">20</span>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;" data-target="#quick_sidebar_tab_2" data-toggle="tab"> Settings
                          </a>
                      </li>
                      <li className="dropdown">
                          <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"> More
                              <i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="dropdown-menu pull-right">
                              <li>
                                  <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                      <i className="icon-settings"></i> Operations </a>
                              </li>
                          </ul>
                      </li>
                  </ul>
                  <div className="tab-content">
                      <div className="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                          <Crops />
                      </div>
                      
                      <div className="tab-pane page-quick-sidebar-settings" id="detail">
                          <CropDetail />
                      </div>
                      <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_2">
                          <CropForm />
                      </div>

                      <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                          <CropControl />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

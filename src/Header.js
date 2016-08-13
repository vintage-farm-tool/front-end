import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class Header extends Component {
  render() {
    return (
      <div>
       <AppBar
          title="Vintage Farm"
          showMenuIconButton = {false}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
        />
        <Card>
          <CardHeader
            title="Temperature Readings"
            subtitle=""
          />
          
          <CardText>
            See below the temperature readings.
             <List>
             <ListItem
                primaryText={
                  <p>Readings&nbsp;&nbsp;<span style={{color: '#f00'}}>4</span></p>
                }
                secondaryText={
                  <p>
                    <span style={{color: '#ccc'}}>2016-08-12T12:37:50.680Z</span>
                  </p>
                }
                secondaryTextLines={2}
              />
              <ListItem
                primaryText={
                  <p>Readings&nbsp;&nbsp;<span style={{color: '#f00'}}>4</span></p>
                }
                secondaryText={
                  <p>
                    <span style={{color: '#ccc'}}>2016-08-12T12:37:50.680Z</span>
                  </p>
                }
                secondaryTextLines={2}
              />
              <ListItem
                primaryText={
                  <p>Readings&nbsp;&nbsp;<span style={{color: '#f00'}}>4</span></p>
                }
                secondaryText={
                  <p>
                    <span style={{color: '#ccc'}}>2016-08-12T12:37:50.680Z</span>
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>
          </CardText>
      </Card>
      </div>
    );
  }
}

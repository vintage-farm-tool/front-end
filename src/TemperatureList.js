import React, { Component } from 'react';
import temp from './stores/Temperature'


export default class TemperatureList extends Component {

  constructor(){
    super()
    this.listData = this.listData.bind(this)
  }

  componentWillMount(){
    this.state = {data:[]}
    temp.on('temperature_readings', this.listData);
    temp.getAll()
  }

  listData(result){
    console.log(result)
    if(result.status == 200){
      this.setState({data: result.data})
    }
  }

  render() {
    const data = this.state.data.map((item) => { return <li  className="list-group-item" key={item.id}> <span className="badge">{item.reading} </span> {item.created_at} </li> });

    return (
       <div className="col-md-8">
       <ul class="list-group">
          {data}
        </ul>
       </div>
    );
  }
}

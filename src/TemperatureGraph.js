import React, { Component } from 'react';
import temp from './stores/Temperature'
import RTChart from 'react-rt-chart';

export default class TemperatureGraph extends Component {

  constructor(){
    super()
    this.listData = this.listData.bind(this)
  }

  componentWillMount(){

    this.state = {data:[]}
    temp.on('temperature_readings', this.listData);
    temp.getAll()
  }

  componentDidMount(){
    //setInterval(() => this.forceUpdate(), 1000);
  }

  listData(result){
    console.log(result)
    if(result.status == 200){
      this.setState({data: result.data})
    }
  }

  render() {
    if(this.state.data){
      console.log("data")
    }
     var data = {
      date: new Date(),
      temperature: 4,
      humidity: 8,
      lux: 3,
    };
    
    return (
       <div className="col-md-12">
       <div className="col-md-8">
          <h1>LIVE CHART</h1>
          <RTChart
            fields={['temperature', 'humidity', 'lux']}
            data={data} />
       </div>
       <div className="col-md-4">
          <h3>Manual Controls</h3>
       </div>

       
        </div>
    );
  }
}

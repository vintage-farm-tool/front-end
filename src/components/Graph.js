import React, { Component } from 'react';
import temp from '../stores/Temperature'


export default class extends Component {

  constructor(){
    super()
    this.totalPoints = 100;
    this.listData = this.listData.bind(this)
  }

  componentWillMount(){
    this.state = {temperature:[], humidity:[], lux:[]}
    temp.on('temperature_readings', this.listData);
    temp.getAll()
  }

  componentDidMount(){
    setInterval(() => temp.getAll(), 1000);
  }

  plotGraph(){
    if ($('#livechart').size() != 1) {
        return;
    }
    if(this.plot){
      this.updateGraph();
      return;
    }

    var options = {
        series: {
            shadowSize: 1
        },
        lines: {
            show: true,
            lineWidth: 0.5,
            fill: false,
            fillColor: {
                colors: [{
                    opacity: 0.1
                }, {
                    opacity: 1
                }]
            }
        },
        yaxis: {
            min: 0,
            max: 100,
            tickColor: "#eee",
            tickFormatter: function(v) {
                return v + "%";
            }
        },
        xaxis: {
            show: false,
        },
        colors: ["#6ef146", '#f00', '#ff0'],
        grid: {
            tickColor: "#eee",
            borderWidth: 0,
        }
    };

    this.plot = $.plot($("#livechart"), [this.state.temperature, this.state.humidity, this.state.lux], options);
  }

  updateGraph() {
      this.plot.setData([this.state.temperature, this.state.humidity, this.state.lux]);
      this.plot.draw();
  }

  listData(result){
    if(result.status == 200){
      var temperature = [];
      var humidity = [];
      var lux = [];
      result.data.statistics.forEach((item, index)=>{
        temperature.push([index,item.temperature])
        humidity.push([index, item.humidity])
        lux.push([index, item.lux])
      })
      this.setState({
        temperature:temperature, humidity:humidity, lux:lux
      });
      this.plotGraph();
    }
  }

  render() {

    return (
       <div className="portlet light portlet-fit bordered">
          <div className="portlet-title">
              <div className="caption">
                  <i className="icon-settings font-dark"></i>
                  <span className="caption-subject font-dark sbold uppercase">Live Chart</span>
              </div>
              
          </div>
          <div className="portlet-body">
              <div id="livechart" className="chart"> </div>
          </div>
      </div>
    );
  }
}

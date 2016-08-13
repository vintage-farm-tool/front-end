import { EventEmitter } from 'events';
import * as request from '../actions/RequestAction.js';

class Temperature extends EventEmitter {
    
    getAll(){
        var _this = this;
        request.get('http://agile-meadow-67232.herokuapp.com/statistics', (err, result) => {
            _this.emit('temperature_readings', {status: result.status, data: JSON.parse(result.text) });
        });
    }
}

const store = new Temperature;
export default store;
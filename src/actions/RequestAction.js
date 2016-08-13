import request from 'superagent';

export function send(method, path, data, file, callback){
    var req = request[method](path);
    if(method == 'post' || method == 'put'){
      if(data){
        req.send(data);
      }
    }
    if(file){
      req.attach('image', file)
    }
  
    if(!file){
      req.set('Accept', 'application/json');
    }
    req.end(callback);
}

export function post(path, data, callback){
    send('post', path, data, null, callback);
}

export function put(path, data, callback){
    send('put', path, data, null, callback);
}

export function remove(path, callback){
    send('delete', path, null, null, callback);
}

export function get(path, callback){
    send('get', path, null, null, callback);
}
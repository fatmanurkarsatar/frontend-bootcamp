const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        //event i tetikle
        this.emit('connection', {id:1, meesage:"hello"});
    }
}


module.exports = logger;
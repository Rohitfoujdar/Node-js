const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('plz switch of the motor');
  setTimeout(()=>{
  console.log('plz switch of the motor! its a gental reminder')
  },3000)
});

console.log("the script is running");
myEmitter.emit('WaterFull');
console.log("the script is still running")

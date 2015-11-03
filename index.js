var five = require("johnny-five");
var keypress = require('keypress');
var board = new five.Board();

// board.on("ready", function(){
//   var servo = new five.Servo(10);

//   this.repl.inject({servo:servo});
//   servo.sweep();
// });

board.on("ready", function() {

  // Create a standard `led` component instance
  var led = new five.Led(13);

  // "blink" the led in 500ms
  // on-off phase periods
  led.blink(1500);
});

// board.on("ready", function(){

//   var led = new five.Led.RGB({
//     pins: {
//       red: 6,
//       green: 5,
//       blue: 3
//     }
//   });

//   var led2 = new five.Led.RGB({
//     pins: {
//       red: 11,
//       green: 10,
//       blue: 9
//     }
//   });
//   led.intensity(15);
//   led2.intensity(15);
  
//   // this.repl.inject({led: led});
//   // led.on();
//   // led.color("#FF0000");

//   process.stdin.resume();
//   process.stdin.setEncoding("utf8");
//   process.stdin.setRawMode(true);

//   process.stdin.on("keypress", function(ch, key){
//     if(!key){
//       return;
//     }
//     if(key.name === "space"){
//       var color = '#' + (function co(lor){   return (lor +=
//     [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
//     && (lor.length == 6) ?  lor : co(lor); })('');
//       led.color(color);     
//     }else if(key.name === 'q'){
//         var color = '#' + (function co(lor){   return (lor +=
//       [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
//       && (lor.length == 6) ?  lor : co(lor); })('');
//       led2.color(color);
//     }else if(key.name === 'y'){
//         var color = '#' + (function co(lor){   return (lor +=
//       [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
//       && (lor.length == 6) ?  lor : co(lor); })('');
//       led.color(color);
//       led2.color(color);
//     }
//   });

//   // setInterval(function(){
//   //   console.log('color: ', color);
//   //   color = '#' + (function co(lor){   return (lor +=
//   // [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
//   // && (lor.length == 6) ?  lor : co(lor); })('');
//   //   led2.color(color);
//   // }, 200);

// });
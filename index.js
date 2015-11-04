var five = require("johnny-five");
var keypress = require('keypress');
var board = new five.Board();

// board.on("ready", function(){
//   var servo = new five.Servo(10);

//   this.repl.inject({servo:servo});
//   servo.sweep();
// });
board.on("ready", function() {

  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }, 
    devices: 1
  });

  var heart = [
    "01100110",
    "10011001",
    "10000001",
    "10000001",
    "01000010",
    "00100100",
    "00011000",
    "00000000"
  ];

  var smile = [
    "00111100",
    "01000010",
    "10100101",
    "10000001",
    "10100101",
    "10011001",
    "01000010",
    "00111100"
  ];

  var noSmile = [
    "11000011",
    "10111101",
    "01011010",
    "01111110",
    "01011010",
    "01100110",
    "10111101",
    "11000011"
  ];

  // matrix.draw(smile);
  // matrix.
  var smileOn = true;

  setInterval(function(){
    if(smileOn){
      matrix.draw(smile);
      smileOn = !smileOn;
    }else{
      matrix.draw(noSmile);
      smileOn = !smileOn;
    }
  }, 500);
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
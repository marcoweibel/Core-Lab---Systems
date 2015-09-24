// button is attaced to pin 4, led to 17
// modified from from adafuit https://learn.adafruit.com/node-embedded-development/events
var colors = require('colors');

var GPIO = require('onoff').Gpio,
    led1 = new GPIO(17, 'out'),
    led2 = new GPIO(18, 'out'),
    led3 = new GPIO(23, 'out'),
    button1 = new GPIO(4, 'in', 'both');
    button2 = new GPIO(27, 'in', 'both');
    button3 = new GPIO(22, 'in', 'both');






////////////////define the callback function/////////////////
function light(err, state) {
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(button1.state == 1) {
    // turn LED on
    led1.writeSync(1);
    //Change color of text and write color.
    console.log('RED'.red);

  }
  else {
    // turn LED off
    led1.writeSync(0);


  }
    if(button2.state == 1) {
    // turn LED on
    led2.writeSync(1);
    //Change color of text and write color.
    console.log('GREEN'.green);

  }

    else {
    // turn LED off
    led1.writeSync(0);


  }
   if(button3.state == 1) {
    // turn LED on
    led3.writeSync(1);
    //Change color of text and write color.
    console.log('BLUE'.blue);

  }  

  else {
    // turn LED off
    led1.writeSync(0);


  }
  
}

// pass the callback function to the
// as the first argument to watch()
button1.watch(light);
button2.watch(light);
button3.watch(light);
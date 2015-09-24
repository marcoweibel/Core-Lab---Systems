//This code was worked on in collaboration between Marco, Kim & Zanzie
//This code uses two NPM Modules, "colors" & "rpi-gpio", 
//with 3 inputs in the form of buttons, and 3 outputs in the form of an RGB LED.

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
function light1(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led1.writeSync(1);
    //print blue to console
    console.log('BLUE'.blue);
  } else {
    // turn LED off
    led1.writeSync(0);
  }

}

function light2(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led2.writeSync(1);
    //print pink to console
    console.log('MAGENTA'.magenta);
  } else {
    // turn LED off
    led2.writeSync(0);

  }

}

function light3(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led3.writeSync(1);
    //print yellow to console
    console.log('YELLOW'.yellow);
  } else {
    // turn LED off
    led3.writeSync(0);
  }

}

//calling functions
button1.watch(light1);
button2.watch(light2);
button3.watch(light3);

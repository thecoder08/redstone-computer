#!/usr/bin/env node
//global bus variables
var inbus = 0;
var outbus = 0;
var adrbus = 0;
//cpu
var adrstate = 0;
var step = 7;
var adrcounter = 0;
var instreg = 0;
var acm = 0;
var temp = 0;
var jumpreg = 0;
var acmbuf = 0;
function cpuClock() {
  step++; // increase step
  if (step == 8) { // make step 3 bit
    step = 0;
  }
  if (step == 0) { // fetch new instruction
    instreg = inbus;
  }
  if (step == 7) { // go to next instruction
    adrcounter++;
    adrbus = adrcounter;
  }
  if (instreg == 1) { // store accumulator
    if (step == 1) {
      adrcounter++;
      adrbus = adrcounter;
    }
    if (step == 2) {
      jumpreg = inbus;
    }
    if (step == 3) {
      outbus = acm;
      adrbus = jumpreg;
    }
    if (step == 4) {
      adrbus = adrcounter;
      outbus = 0;
    }
  }
  if (instreg == 2) { // load accumulator integer
    if (step == 1) {
      adrcounter++;
      adrbus = adrcounter;
    }
    if (step == 2) {
      acm = inbus;
    }
  }
  if (instreg == 3) {// unconditional jump
    if (step == 1) {
      adrcounter++;
      adrbus = adrcounter;
    }
    if (step == 2) {
      jumpreg = inbus;
    }
    if (step == 3) {
      adrbus = jumpreg;
      acm = inbus;
    }
    if (step == 4) {
      adrbus = 0;
    }
  }
  console.log('address bus: ' + adrbus + ' output bus: ' + outbus + ' input bus: ' + inbus + ' accumulator: '  + acm + ' temporary register: '  + temp + ' jump register: ' + jumpreg + ' address state: ' + adrstate + ' step: ' + step + ' instruction register: ' + instreg);
}
//rom
var romarray = Int8Array.from(require('fs').readFileSync(process.argv[2]));
console.log(romarray);
setInterval(function() {
  if (adrbus < 50) {
    inbus = romarray[adrbus];
  }
}, 10);
//ram
var ramarray = new Array(50);
setInterval(function() {
  if ((adrbus > 59) && (adrbus < 101)) {
    inbus = ramarray[adrbus + 59];
  }
  if ((adrbus > 100) && (adrbus < 200)) {
    ramarray[adrbus] = outbus;
  }
}, 10);
process.stdin.on('data', function(data) {
  cpuClock();
});
setInterval(function() {
  // multiplex between address counter and jump register
  if (adrstate == 1) {
    adrbus = jumpreg;
  }
  else {
    adrbus = adrcounter;
  }
}, 10);

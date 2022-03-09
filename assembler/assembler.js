#!/usr/bin/env node
var fs = require('fs');
var args = process.argv;
var code = [];
fs.readFile(args[2], function(err, data) {
  if (err) {
    console.log('Exception: FileReadError');
  }
  else {
    for (var i = 0; i < data.toString().split('\n').length - 1; i++) {
      var line = data.toString().split('\n')[i];
      var params = line.split(' ');
      if (params[0] == '#') {
        
      }
      if (params[0] == 'STA') {
        code.push(1, parseInt(params[1]));
      }
      else if (params[0] == 'LDA_int') {
        code.push(2, parseInt(params[1]));
      }
      else if (params[0] == 'LDA_adr') {
        code.push(3, parseInt(params[1]));
      }
      else if (params[0] == 'JMP') {
        code.push(4, parseInt(params[1]));
      }
      else if (params[0] == 'ADD_int') {
        code.push(5, parseInt(params[1]));
      }
      else if (params[0] == 'ADD_adr') {
        code.push(6, parseInt(params[1]));
      }
      else if (params[0] == 'SUB_int') {
        code.push(7, parseInt(params[1]));
      }
      else if (params[0] == 'SUB_adr') {
        code.push(8, parseInt(params[1]));
      }
      else if (params[0] == 'JE') {
        code.push(9, parseInt(params[1]));
      }
      else if (params[0] == 'JNE') {
        code.push(10, parseInt(params[1]));
      }
      else if (params[0] == 'JL') {
        code.push(11, parseInt(params[1]));
      }
      else if (params[0] == 'JNL') {
        code.push(12, parseInt(params[1]));
      }
      else if (params[0] == 'JG') {
        code.push(13, parseInt(params[1]));
      }
      else if (params[0] == 'JNG') {
        code.push(14, parseInt(params[1]));
      }
      else if (params[0] == '') {//if empty string
        // assembler passes over
      }
      else if (params[0] == 'DB') {
        for (var j = 1; j < params.length; j++) {
          code.push(parseInt(params[j]));
        }
      }
      else {
        console.log('Exception: CommandParseError: ' + params[0]);
        process.exit(1);
      }
    }
    fs.writeFile('out.bin', Buffer.from(Int8Array.from(code).buffer), {encoding: 'binary'}, function(err) {
      if (err) {
        console.log('Exception: FileWriteError');
      }
      else {
        console.log('NoException');
      }
    });
  }
});

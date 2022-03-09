var fs = require('fs');
var args = process.argv;
fs.readFile(args[2], function(err, data) {
  if (err) {
    console.log('Exception: FileReadError');
  }
  else {
    var array = Int8Array.from(data);
    for (var i = 0; i < array.length; i++) {
      if (array[i] == 1) {
        console.log('1 ' + array[i + 1] + ': ' + 'SRA ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 2) {
        console.log('2 ' + array[i + 1] + ': ' + 'SRB ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 3) {
        console.log('3 ' + array[i + 1] + ': ' + 'SRC ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 4) {
        console.log('4 ' + array[i + 1] + ': ' + 'SRD ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 5) {
        console.log('5 ' + array[i + 1] + ': ' + 'SRE ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 6) {
        console.log('6 ' + array[i + 1] + ': ' + 'LDA_int ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 7) {
        console.log('7 ' + array[i + 1] + ': ' + 'LDB_int ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 8) {
        console.log('8 ' + array[i + 1] + ': ' + 'LDC_int ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 9) {
        console.log('9 ' + array[i + 1] + ': ' + 'LDD_int ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 10) {
        console.log('10 ' + array[i + 1] + ': ' + 'LDE_int ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 11) {
        console.log('11 ' + array[i + 1] + ': ' + 'LDA_adr ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 12) {
        console.log('12 ' + array[i + 1] + ': ' + 'LDB_adr ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 13) {
        console.log('13 ' + array[i + 1] + ': ' + 'LDC_adr ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 14) {
        console.log('14 ' + array[i + 1] + ': ' + 'LDD_adr ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 15) {
        console.log('15 ' + array[i + 1] + ': ' + 'LDE_adr ' + array[i + 1]);
        i++;
      }
      else if (array[i] == 16) {
        console.log('16: ' + 'ADD');
      }
      else {
        console.log('Exception: InvalidDataError');
        process.exit(1);
      }
    }
    console.log('NoException');
  }
});

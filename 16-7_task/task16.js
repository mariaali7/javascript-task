function csvToArray(str) {
    let rows = str.split('\n');
    let result = rows.map(function(row) {
      return row.split(',');
    });
    return result;
  }


  let csvString = 'John,Doe,35\nJane,Smith,42\nBob,Johnson,25';
console.log(csvToArray(csvString));
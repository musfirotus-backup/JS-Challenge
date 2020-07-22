// require csvtojson module
const CSVToJSON = require('csvtojson');

// convert 003.csv file to JSON array
CSVToJSON().fromFile('003.csv')
    //memakai promise
    .then(file003 => {

        // 003 is a JSON array
        // log the JSON array
        console.log(file003);
    }).catch(err => {
        // log error
        console.log(err);
    });
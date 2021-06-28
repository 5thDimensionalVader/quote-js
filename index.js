// requiring packages to the file
const moment = require('moment');
const axios = require('axios');
const prompt = require('prompt-sync')({
  sigint: true
});

// set the baseURL
const baseURL = 'https://zenquotes.io/api/';

const inputEnd = prompt('Hello, enter any of the following [random, today & quotes]: ');
// create the date using the Moment package
if (inputEnd === 'RANDOM' || inputEnd === 'TODAY' || inputEnd === 'QUOTES' || inputEnd === 'QUOTE' || inputEnd === 'quote') {
  console.log(`Invalid input => ${inputEnd}.`);
} else {
  axios.get(baseURL + inputEnd)
    .then((res) => {
      const dateMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
      res.data.forEach((quote, index) => {
        console.log(`\n
          Author: ${quote.a}\n
          Famous Quote: ${quote.q}\n
          Date: ${dateMoment}\n
          `)
      })
    }).catch((err) => {
      console.log(err);
    });
}

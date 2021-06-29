// requiring packages to the file
const moment = require('moment');
const axios = require('axios');
const prompt = require('prompt-sync')({
  sigint: true
});

const inputEnd = prompt('Hello, enter any of the following [random, today & quotes]: ');
// set the baseURL
const baseURL = `https://zenquotes.io/api/${inputEnd}`;
// create the date using the Moment package

axios.get(baseURL)
  .then((res) => {
    // const dateMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
    const response = res.data; // Getting response from API.
    const quote_authors = response.map(quote => quote.a.toUpperCase());

    console.log(quote_authors);
    // res.data.forEach((quote, index) => {
    //   console.log(`\n
    //     Author: ${quote.a}\n
    //     Famous Quote: ${quote.q}\n
    //     Date: ${dateMoment}\n
    //     `)
    // })
  }).catch((err) => {
    console.log(err);
  });


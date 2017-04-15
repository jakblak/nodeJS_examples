const scraper = require('./scraper');
const fs = require('fs');
const url = 'http://imgur.com/gallery/hj4NW';
const path = 'text.txt'

// Callback example
// scraper.imgScrape(url, (data) => {
//   console.log('data from scraper received');
//   console.log(data);
// })

// Promise example
scraper.imgScrape2(url)
  .then((data) => {
    console.log('data from scraper received ');
    fs.writeFile(path, JSON.stringify(data), (error) => {
      if(error) {
        console.log(error);
      }
      console.log('Successfully wrote to ' + path);
    })
  })
  .catch((error) => {
    console.log('error scraping data');
  })
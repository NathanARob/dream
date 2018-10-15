const express = require('express');
const path = require('path');
const fetch = require('node-fetch')
const app = express();

var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'https://dream-admin.dreamcapture.co.za',
  consumerKey: 'ck_7d626d6ba9b4dde884c280ef0d3cedff32defe2b',
  consumerSecret: 'cs_8c00228d3737c2c70513c428d9726d4a1973305c',
  wpAPI: true,
  version: 'wc/v2'
});



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  res.send('words');
});

app.get('/api/fetch3posts',(req, res) =>{
  fetch('https://dream-admin.dreamcapture.co.za/wp-json/wp/v2/posts?_embed')
  .then(res => res.json())
  .then(body => res.send(body));
});

//Get the featured post
app.get('/api/featuredpost', (req, res)=>{
  const acf = '';

  fetch('https://dream-admin.dreamcapture.co.za/wp-json/wp/v2/posts?_embed')
  .then(res => res.json())
  .then(body =>{
    acf = body;
    res.send(acf)
  });

});

//Get products

app.get('/api/products', (req,res)=>{

  WooCommerce.getAsync('products').then(function(result) {
    res.send(JSON.parse(result.toJSON().body));

  });

 
});





// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
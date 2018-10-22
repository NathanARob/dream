const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const fetch = require('node-fetch')
const app = express();

const nodemailer = require('nodemailer');
var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'https://dream-admin.dreamcapture.co.za',
  consumerKey: 'ck_7d626d6ba9b4dde884c280ef0d3cedff32defe2b',
  consumerSecret: 'cs_8c00228d3737c2c70513c428d9726d4a1973305c',
  wpAPI: true,
  version: 'wc/v2'
});


const transporter = nodemailer.createTransport({
  host: 'serv15.registerdomain.co.za',
  port: 465,
  auth: {
      user: 'website@dreamcapture.co.za',
      pass: 'lXqQGXpRRo%)'
  }
});

app.use(bodyParser.json());
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

//Contact-form
app.post('/send',(req,res)=>{


    console.log(req);

        let mailOptions = {
          from: 'website@dreamcapture.co.za', // sender address
          to: 'nathan14855151@gmail.com', // list of receivers
          subject: req.body.subject,
          text: req.body.message, // plain text body
        // html: '<b>Hello world?</b>' // html body
      };

    transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
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
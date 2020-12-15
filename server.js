// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import request from 'request';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//PLEASE DON'T TOUCH THESE
const client_id = '8539f670cb3a43aebf0bc4192693a19e'; // Your client id
const client_secret = '38c8101bcdd947058b7a1d296bdc64da'; // Your secret
const redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST', //request authorization
  content_type: 'application/x-www-form-urlencoded',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/api')
.get((req, res) => {
  console.log('GET request detected');
})
.post((req, res) => {
  console.log('POST request detected');
  console.log('Form data in req.body', req.body);
});

//copy from https://github.com/spotify/web-api-auth-examples/blob/master/client_credentials/app.js
request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    let token = body.access_token;
    console.log(token);
    let options = {
      url: 'https://api.spotify.com/v1/users/ageless_enemy',
      content_type: 'application/x-www-form-urlencoded',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      // console.log(body);
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// const request = require('request')
import request from 'request'
// generate a token with your client id and client secret
module.exports.getToken = function(callback) {
  request.post({
    url: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
    json:true,
    form: {
      'f': 'json',
      'client_id': '6t2Yl4MYyUh5WESK',
      'client_secret': '0b0ea81c37c049ea8f5599c1e32e93b1',
      'grant_type': 'client_credentials',
      'expiration': '1440'
    }
  }, function(error, response, body){
    console.log(body.access_token);
    callback(body.access_token);
  });
}


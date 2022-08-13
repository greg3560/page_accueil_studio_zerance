var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET contact form. */
router.post('/', function(req, res, next) {
  const firstName = req.body['first-name'];
  let apiEndpoint = "https://gender-api.com/v2/gender";
  let authToken = "d4c9610fa14cee57105dffba60319016269d09c70238e4c454ab6e0f066060b9";
  let gender = "";
  const data ={
    "first_name": firstName
  };
  const config = {
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authToken
    }
  };

  axios.post(apiEndpoint, data, config)
      .then(function (response) {
        if (response.data.result_found) {
          if ('female' === response.data.gender) {
            gender = "We rob banks";
          } else if('male' === response.data.gender) {
            gender = "Rosebud";
          }
        } else {
          gender = "It’s a trap ! ";
        }
      }).then(function() {
    res.render('index', { title: 'Accueil', showPopinConfirmation: true, gender });
  })
      .catch(function (error) {
        gender = "It’s a trap ! ";
        console.log('error', error);
        res.render('index', { title: 'Accueil', showPopinConfirmation: true, gender });
      });
});

module.exports = router;
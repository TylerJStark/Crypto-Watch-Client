const router = require("express").Router();
const rp = require('request-promise');

router.get("/allCurrencies", (req, res) => {
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        start: 1,
        limit: 5000,
        convert: 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': '1c76830c-9c66-4ac4-841a-79bd663c7059'
      },
      json: true,
      gzip: true
    };
    rp(requestOptions).then(response => {
      console.log('API call response:', response);
      res.json(response);
    }).catch((err) => {
      console.log('API call error:', err.message);
      res.json();
    });
});

module.exports = router;
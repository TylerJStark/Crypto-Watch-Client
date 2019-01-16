import axios from 'axios';

const KEY = '64ebc649898f66e9d83e7e6164f67c8cf2ef9e2e17893250be425cc97c59dae1';

export default {
    allCurrencies: function() {
        return axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=' + KEY);
    },
    specificCoin: function(query) {
        return axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=' + query + '&tsym=USD&limit=10&api_key=' + KEY);
    },
    coinInfo: function(query) {
        return axios.get('https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=' + query + '&tsym=USD&api_key=' + KEY)
    }
};

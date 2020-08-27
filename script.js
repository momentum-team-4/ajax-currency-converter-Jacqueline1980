const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const from_currency = document.getElementById("#from_currency")
const from_amount = document.getElementById("#from_amount")
const to_currency = document.getElementById("#to_currency")
const to_amount = document.getElementById("#to_amount")
const rate = document.getElementById("#rate")
const exchange = document.getElementById("#exchange")

exchange.addEventListener(click, function(){

}


function convertRate (){
  
fetch("https://api.exchangeratesapi.io/latest")
 .then(function(response) {
   return response.json()
 })
 .then(data => console.log(data));

}

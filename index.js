const currencyFirst=document.getElementById('currency-first');

const worthFirst=document.getElementById('worth-first');

const currencySecond=document.getElementById('currency-second');

const worthSecond=document.getElementById('worth-second');

const exchangeRateEl = document.getElementById('exchange-rate');
const apiKey="d55eb0a6947bcae713c9e09d";
updateRate()
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFirst.value}`)
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecond.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirst.value} = ${
            rate + " " + currencySecond.value
          }`;
          worthSecond.value=(worthFirst.value*rate).toFixed(2);
    })
}
currencyFirst.addEventListener('change',updateRate)
currencySecond.addEventListener('change',updateRate)
worthFirst.addEventListener('input',updateRate)
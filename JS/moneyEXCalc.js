const fromCurrencyEnt = document.getElementById("fromCurrency");
const fromAmountEnt = document.getElementById("fromAmount");
const toCurrencyEnt = document.getElementById("toCurrency");
const toAmountEnt = document.getElementById("toAmount");
const exchangeRate = document.getElementById('rate');
const exchangeBtn = document.getElementById('exchange');


fromCurrencyEnt.addEventListener('change',calculate);
console.log(fromCurrencyEnt.value);
fromAmountEnt.addEventListener('input', calculate);
toCurrencyEnt.addEventListener('change', calculate);
toAmountEnt.addEventListener('input', calculate);

exchangeBtn.addEventListener('click',()=>
{
    let temp = fromCurrencyEnt.value;
    fromCurrencyEnt.value = toCurrencyEnt.value;
    toCurrencyEnt.value = temp;
    calculate();
})

function calculate() {
	const from_currency = fromCurrencyEnt.value;
	const to_currency = toCurrencyEnt.value;
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
        .then(res => res.json())
		.then(res => {
        const rate = res.rates[to_currency];
		exchangeRate.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		toAmountEnt.value = (fromAmountEnt.value * rate.toFixed(2));
    })
    
}
calculate();
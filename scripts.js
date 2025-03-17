//addEventListener is Watching for clicks
const button = document.getElementById('btn')
const select = document.getElementById('slc-currency')




const convertValues = async () =>{
    const inputReais = document.getElementById('input').value
    const p = document.getElementById('Reais')
    const currency = document.getElementById('currency')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    console.log(data)

    const dollar = data.USDBRL.high
    const bitcoin = data.BTCBRL.high
    const euro = data.EURBRL.high

    let result
    if(select.value === 'US Dollar'){
        result = inputReais / dollar
        currency.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(result)

    } else if (select.value === 'bitcoin'){
         result = inputReais / bitcoin
         currency.innerHTML = result
    }else {
         result = inputReais / euro
         currency.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}).format(result)

    }

    

    p.innerHTML = new Intl.NumberFormat('pt-US', { style: 'currency', currency: 'BRL'}).format(inputReais)



    
}

changeCurrency = () =>{
    const imgCurrency = document.getElementById('flag-currency')
    const currencyName = document.getElementById('currency-name')


    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        imgCurrency.src = './assets/euro.png'
        
    } else if (select.value === 'bitcoin'){
        currencyName.innerHTML = "BitCoin"
        imgCurrency.src = './assets/bitcoin.png'
    }else {
        currencyName.innerHTML = "US Dollar"
        imgCurrency.src = './assets/estados-unidos.png'
    }
    
    convertValues()

}


button.addEventListener('click',convertValues)
select.addEventListener('change',changeCurrency) 
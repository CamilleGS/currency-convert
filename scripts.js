//addEventListener is Watching for clicks
const button = document.getElementById('btn')
const select = document.getElementById('slc-currency')
const dollar = 5.76
const euro = 6.22



const convertValues = () =>{
    const inputReais = document.getElementById('input').value
    const p = document.getElementById('Reais')
    const currency = document.getElementById('currency')

    let result
    if(select.value === 'US Dollar'){
        result = inputReais / dollar

    } else {
         result = inputReais / euro
    }

    p.innerHTML = new Intl.NumberFormat('pt-US', { style: 'currency', currency: 'BRL'}).format(inputReais)


    currency.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(result)

    currency.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}).format(result)
    
}

changeCurrency = () =>{
    const imgCurrency = document.getElementById('flag-currency')
    const currencyName = document.getElementById('currency-name')


    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        imgCurrency.src = './assets/euro.png'
    } else {
        currencyName.innerHTML = "US Dollar"
        imgCurrency.src = './assets/estados-unidos.png'
    }
    
    convertValues()

}


button.addEventListener('click',convertValues)
select.addEventListener('change',changeCurrency) 
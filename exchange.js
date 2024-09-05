const api_url = 'https://api.exchangeratesapi.io/latest?base='
async function getDataByBase(baseCurrency) { 
    var api_baseUrl = api_url + baseCurrency;
    const response = await fetch(api_baseUrl);
    const data = await response.json();
    const { base, rates } = data;
    


    console.log(base);
    console.log(rates.CAD);
    console.log(data.date);
    return rates;
}
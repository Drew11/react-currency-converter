const getGeoData = async ()=>{
   // const promise = await fetch('http://api.ipstack.com/check?access_key=ce43b9472f5f4a2379636b82cd17bc83');
    const promise = await fetch('https://ipinfo.io?token=5455558e65b8b4');
    const geoData = await promise.json();
    return geoData;
};

export const getAllInfoCurrency = async (base)=>{
    const url = `https://api.exchangeratesapi.io/latest?base=${base}`;
   // const promise = await fetch(`http://data.fixer.io/api/latest?access_key=032f3ff907cc406f6edc0a4a469ebfe3&base=USD&symbols=UAH`);
    const promise = await fetch(url);
    const currency = await promise.json();
    return currency;
};

export const getCountryCurrency = async (country)=>{
    const promise = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
    const countryCurrency = await promise.json();
    return countryCurrency;
};

export const getBaseUserGeoCurrency = async ()=> {
    const location = await getGeoData();
    const countryCurrency = await getCountryCurrency(location.country);

    const baseCurrency = countryCurrency.currencies[0].code;
    return baseCurrency
};

export const convertValue = async (selected, base) => {
    const convertingValue = await getAllInfoCurrency(selected);
    const value = convertingValue.rates[base];

    return value
};
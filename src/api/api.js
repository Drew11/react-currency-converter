const getGeoData = async ()=>{
   // const promise = await fetch('http://api.ipstack.com/check?access_key=ce43b9472f5f4a2379636b82cd17bc83');
    const promise = await fetch('https://ipinfo.io?token=5455558e65b8b4');
    const geoData = await promise.json();
    return geoData;
};

export const getBaseUserGeoCurrency = async ()=> {
    const location = await getGeoData();
    const countryCurrency = await getCountryCurrency(location.country);
    const baseCurrency = countryCurrency.currencies[0].code;
    return baseCurrency
};

export const getAllInfoCurrency = async (base)=>{
    const APIkey = 'a515eed149f7937c6e2ce9c8';
    const URL = `https://v6.exchangerate-api.com/v6/${APIkey}/latest/${base}`;
    const promise = await fetch(URL, {
        mode: "cors",
    });
    const currency = await promise.json();
    return currency.conversion_rates;
};

export const getCountryCurrency = async (country)=>{
    const promise = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
    const countryCurrency = await promise.json();
    return countryCurrency;
};


export const convertValue = async (selected, base) => {
    const convertingValue = await getAllInfoCurrency(selected);
    const value = convertingValue[base];
    return value
};
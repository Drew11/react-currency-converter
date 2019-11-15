

export const getGeoData = async ()=>{
    const promise = await fetch('http://api.ipstack.com/check?access_key=ce43b9472f5f4a2379636b82cd17bc83');
    const getGeoData = await promise.json();

    return getGeoData;
};

export const getAllCurrency = async ()=>{
    const url = 'https://api.exchangeratesapi.io/latest?base=USD';
   // const promise = await fetch(`http://data.fixer.io/api/latest?access_key=032f3ff907cc406f6edc0a4a469ebfe3&base=USD&symbols=UAH`);
    const promise = await fetch(url);
    const currency = await promise.json();

    return currency;

};

export const getCountryCurrnecy = async (country)=>{
    const promise = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
    const countryCurrency = await promise.json();
    return countryCurrency;
};


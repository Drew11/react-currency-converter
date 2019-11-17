import React, {useCallback, useEffect, useState} from 'react';
import Converter from './components/Converter/Converter';
import CurrencyRates from './components/CurrencyRates/CurrencyRates';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Redirect, Route} from "react-router";
import {LinkContainer} from 'react-router-bootstrap'
import './App.css';
import {convertValue, getAllInfoCurrency} from "./api/api";

const App = () => {

    const [currencyForConverter, setCurrencyForConverter] = useState({});
    const [baseForConverter, setBaseForConverter] = useState('USD');
    const [selectedCurrency, setSelectedCurrency] = useState('RUB');
    const [resultValue, setResultValue] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const stuffForConverter = {
        currencyForConverter: currencyForConverter,
        baseForConverter: baseForConverter,
        selectedCurrency: selectedCurrency,
        quantity: quantity,
        resultValue: resultValue,
        setBaseForConverter: setBaseForConverter,
        setSelectedCurrency: setSelectedCurrency,
        setQuantity: setQuantity
    };

    const updateCurrencyForConverter = useCallback(async () => {
        const allInfoCurrency = await getAllInfoCurrency(baseForConverter);
        setCurrencyForConverter(allInfoCurrency);
        const convertingValue = await convertValue(selectedCurrency, baseForConverter);
        setResultValue(convertingValue);
    }, [baseForConverter]);

    const updateSelectedCurrency = useCallback(async () => {
        const convertingValue = await convertValue(selectedCurrency, baseForConverter);
        setResultValue(convertingValue);
    }, [selectedCurrency]);


    const [currencyForRates, setCurrencyForRates] = useState({});
    const [baseForRates, setBaseForRates] = useState('USD');
    const [favorites, setFavorites] = useState({});

    const stuffForRates = {
        currencyForRates: currencyForRates,
        favorites: favorites,
        setFavorites: setFavorites,
        baseForRates: baseForRates,
        setBaseForRates: setBaseForRates
    };

    const updateCurrencyForRates = useCallback(async () => {
        const allInfoCurrency = await getAllInfoCurrency(baseForRates);
        setCurrencyForRates(allInfoCurrency);

    }, [baseForRates]);

    useEffect(() => {
        async function fetchData() {
            //const userGeoCurrency = await getBaseUserGeoCurrency();
            const infoCurrencyConverter = await getAllInfoCurrency(baseForConverter);
            const infoCurrencyRates = await getAllInfoCurrency(baseForRates);
            const convertingValue = await convertValue(selectedCurrency, baseForConverter);
            setCurrencyForConverter(infoCurrencyConverter);
            setCurrencyForRates(infoCurrencyRates);
            setResultValue(convertingValue);
        }

        fetchData();
    }, []);

    useEffect(() => {
        updateSelectedCurrency();
    }, [selectedCurrency]);

    useEffect(() => {
        updateCurrencyForConverter();
    }, [baseForConverter]);

    useEffect(() => {
        updateCurrencyForRates();
    }, [baseForRates]);

    return (
        <div className="App">
            <header className="App-header">
                <Nav variant="tabs">
                    <Nav.Item>
                        <LinkContainer to="/converter">
                            <Nav.Link>
                                Converter
                            </Nav.Link>
                        </LinkContainer>

                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/currency_rates">
                            <Nav.Link>
                                Currency Rates
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </header>
            <main>
                <Redirect exact from="/" to={"/converter"}/>
                <Route
                    exact path="/converter"
                >
                    <Converter stuffForConverter={stuffForConverter}/>
                </Route>
                <Route exact path="/currency_rates">
                    <CurrencyRates stuffForRates={stuffForRates}/>
                </Route>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;
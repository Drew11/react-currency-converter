import React, {useEffect, useState, useCallback} from 'react';
import {convertValue, getAllInfoCurrency} from "../../api/api";
import {convertToOptions} from '../../api/helpers';
import './converter.css';

const Converter = () => {

    const [allCurrency, setAllCurrency] = useState({});
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [selectedCurrency, setSelectedCurrency] = useState('RUB');
    const [resultValue, setResultValue] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function fetchData() {
            //const userGeoCurrency = await getBaseUserGeoCurrency();
            const allInfoCurrency = await getAllInfoCurrency(baseCurrency);
            const convertingValue = await convertValue(selectedCurrency, allInfoCurrency.base);
            setAllCurrency(allInfoCurrency);
            setResultValue(convertingValue);
        }
        fetchData();
    }, []);

    const setChangedBase = useCallback(async()=>{
        const allInfoCurrency = await getAllInfoCurrency(baseCurrency);
        setAllCurrency(allInfoCurrency);
        const convertingValue = await convertValue(selectedCurrency, allInfoCurrency.base);
        setResultValue(convertingValue);
    }, [baseCurrency]);

    const setChangedSelectedCurrency = useCallback(async()=>{
        const convertingValue = await convertValue(selectedCurrency, allCurrency.base);
        setResultValue(convertingValue);
    }, [selectedCurrency]);

    useEffect(() => {
       setChangedBase();
    }, [baseCurrency]);

    useEffect(() => {
        setChangedSelectedCurrency();
    }, [selectedCurrency]);

    const changeBase = async (event) => {
        setBaseCurrency(event.target.value)
    };

    const changeSelectedCurrency = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <div
            className={"container"}
        >
            <div className={"converter"}>

                  <span>
                      from
                  </span>
                <select
                    name="currency-selected"
                    id="from"
                    value={selectedCurrency}
                    onChange={changeSelectedCurrency}
                >
                    {
                        convertToOptions(allCurrency.rates)
                    }
                </select>

                <span>
                      to
                  </span>
                <select
                    name="currency-base"
                    id="to"
                    value={baseCurrency}
                    onChange={changeBase}
                >
                    {
                        convertToOptions(allCurrency.rates)
                    }
                </select>

                <div className="amount">
                    <input
                        type="number"
                        defaultValue={quantity}
                        min={1}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </div>

                <div className="result">
                    <h2>Result value:</h2>

                    <span>
                         {`${Math.floor((quantity * resultValue) * 100000) / 100000}: ${allCurrency.base}`}
                    </span>

                </div>
            </div>

        </div>
    )

};

export default Converter;
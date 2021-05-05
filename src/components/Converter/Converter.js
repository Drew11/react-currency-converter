import React, {useEffect, useState } from 'react';
import {convertValue, getAllInfoCurrency,  getBaseUserGeoCurrency} from "../../api/api";
import {convertToOptions} from '../../api/helpers';
import './converter.css';

const Converter = () => {

    const [allCurrency, setAllCurrency] = useState(null);
    const [resultValue, setResultValue] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState( '');
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const userGeoCurrency = await getBaseUserGeoCurrency();
            const allInfoCurrency = await getAllInfoCurrency(baseCurrency);
            setAllCurrency(allInfoCurrency);
            setSelectedCurrency(userGeoCurrency);
        }
        fetchData();
    }, []);

    const updateValue = async ()=>{
         const convertingValue = await convertValue(selectedCurrency, baseCurrency);
         setResultValue(convertingValue);
    };

    useEffect(() => {
        if(selectedCurrency){
            updateValue();
        }
    }, [selectedCurrency, baseCurrency]);

    const changeBase = (event) => {
        setBaseCurrency(event.target.value)
    };

    const changeSelectedCurrency = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const changeQuantity = (event) => {
        setQuantity(+event.target.value)
    }

    const result = `${Math.floor((quantity * resultValue) * 10000) / 10000}: ${baseCurrency}`;

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
                        allCurrency && convertToOptions(allCurrency)
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
                       allCurrency && convertToOptions(allCurrency)
                    }
                </select>

                <div className="amount">
                    <input
                        type="number"
                        defaultValue={quantity}
                        min={1}
                        onChange={changeQuantity}
                    />
                </div>

                <div className="result">
                    <h2>Result value:</h2>

                    <span>
                         {result}
                    </span>

                </div>
            </div>

        </div>
    )
};

export default Converter;
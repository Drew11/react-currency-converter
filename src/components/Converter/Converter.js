import React from 'react';
import {convertToOptions} from '../../api/helpers';
import './converter.css';

const Converter = (props) => {

    const {
            stuffForConverter
    } = props;

    const changeBase = (event) => {
        stuffForConverter.setBaseForConverter(event.target.value)
     };

    const changeSelectedCurrency = (event) => {
        stuffForConverter.setSelectedCurrency(event.target.value);
    };

    const changeQuantity= (event) => {
        stuffForConverter.setQuantity(event.target.value)
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
                    value={stuffForConverter.selectedCurrency}
                    onChange={changeSelectedCurrency}
                >
                    {
                        convertToOptions(stuffForConverter.currencyForConverter.rates)
                    }
                </select>

                <span>
                      to
                  </span>
                <select
                    name="currency-base"
                    id="to"
                    value={stuffForConverter.baseForConverter}
                    onChange={changeBase}
                >
                    {
                         convertToOptions(stuffForConverter.currencyForConverter.rates)
                    }
                </select>

                <div className="amount">
                    <input
                        type="number"
                        defaultValue={stuffForConverter.quantity}
                        min={1}
                        onChange={changeQuantity}
                    />
                </div>

                <div className="result">
                    <h2>Result value:</h2>

                    <span>
                         {`${Math.floor((stuffForConverter.quantity* stuffForConverter.resultValue) * 100000) / 100000}: ${stuffForConverter.baseForConverter}`}
                    </span>

                </div>
            </div>

        </div>
    )

};

export default Converter;
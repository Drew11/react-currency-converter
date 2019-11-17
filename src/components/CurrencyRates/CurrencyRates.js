import React, {useEffect} from 'react';
import Favorites from '../Favorites/Favorites';
import {Button, ListGroup} from 'react-bootstrap';
import {convertToOptions} from '../../api/helpers';
import './current-rates.css';

const CurrencyRates = (props) => {

    const {stuffForRates} = props;

    const addFavorites = (key, value) => {
        if (!stuffForRates.favorites.hasOwnProperty(key)) {
            const copy = {...stuffForRates.favorites};
            copy[key] = value;
            stuffForRates.setFavorites(copy)
        }
    };

    const changeBase = (event) => {
        stuffForRates.setBaseForRates(event.target.value)
    };

    const createListItems = () => {
        if (stuffForRates.currencyForRates.rates) {
            const array = Object.entries(stuffForRates.currencyForRates.rates);
            const copy = [...array];
            copy.sort((a, b) => a[0].localeCompare(b[0]));

            return copy.map((currency, index) =>
                <ListGroup.Item
                    key={index}
                    className="list__group-item"
                >
                    {`${currency[0]}: ${currency[1]}`}

                    <Button
                        onClick={() => {
                            addFavorites(currency[0], currency[1])
                        }}
                    >+
                    </Button>

                </ListGroup.Item>
            );
        }
    };

    useEffect(() => {
            const copy = {...stuffForRates.favorites};

            for (let k in copy) {
                copy[k] = stuffForRates.currencyForRates.rates[k]
            }
            stuffForRates.setFavorites(copy);
        },
        [stuffForRates.currencyForRates.base]
    );

    return (
        <div className="container__currency-rates">
            <div className="currency-rates">
          <span
              className={"base"}

          >
              <span>Base:</span>
              <select name="base"
                      value={stuffForRates.baseForRates}
                      onChange={changeBase}
              >
                  {convertToOptions(stuffForRates.currencyForRates.rates)}

              </select>
          </span>

                <ListGroup
                    variant="flush"
                    className="list__group"
                >
                    {createListItems()}
                </ListGroup>

            </div>

            <Favorites
                favorites={stuffForRates.favorites}
            />

        </div>
    )
};

export default CurrencyRates;
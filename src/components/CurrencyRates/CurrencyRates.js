import React, {useEffect, useState} from 'react';
import Favorites from '../Favorites/Favorites';
import {Button, ListGroup} from 'react-bootstrap';
import {getAllInfoCurrency} from '../../api/api';
import {convertToOptions} from '../../api/helpers';
import './current-rates.css';

const CurrencyRates = () => {

    const [allCurrency, setAllCurrency] = useState({});
    const [base, setBase] = useState('USD');
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        async function fetchData() {
            const currency = await getAllInfoCurrency(base);
            setAllCurrency(currency);
        }
        fetchData();
    }, []);

    useEffect(() => {

            for (let k in favorites) {
                favorites[k] = allCurrency.rates[k]
            }
            setFavorites(favorites);
        },
        [allCurrency]
    );


    const addFavorites = (key, value) => {
        if (!favorites.hasOwnProperty(key)) {
            const copy = {...favorites};
            copy[key] = value;
            setFavorites(copy)
        }
    };

    const changeBase = async (event) => {
        const currency = await getAllInfoCurrency(event.target.value);
        setAllCurrency(currency);
        setBase(currency.base);
    };

    const createListItems = () => {
        if (allCurrency.rates) {
            const array = Object.entries(allCurrency.rates);
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

    return (
        <div className="container__currency-rates">
            <div className="currency-rates">
          <span
              className={"base"}

          >
              <span>Base:</span>
              <select name="base"
                      value={base}
                      onChange={changeBase}
              >
                  {convertToOptions(allCurrency.rates)}

              </select>
          </span>

                <ListGroup
                    variant="flush"
                    className="list__group"
                    size={4}
                >
                    {createListItems()}
                </ListGroup>

            </div>

            <Favorites
                favorites={favorites}
            />

        </div>
    )
};

export default CurrencyRates;
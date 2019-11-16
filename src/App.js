import React from 'react';
import Converter from './components/Converter/Converter';
import CurrencyRates from './components/CurrencyRates/CurrencyRates';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Route, Switch, Redirect } from "react-router";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">

                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/react-currency-converter/converter">Converter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/react-currency-converter/currency_rates">
                            Currency Rates
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </header>

            <main>
                <Switch>
                    <Redirect exact from="/react-currency-converter/" to="/converter" />

                    <Route exact path="/converter">
                        <Converter/>
                    </Route>

                    <Route exact path="/currency_rates">
                        <CurrencyRates/>
                    </Route>
                </Switch>

            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;
import React from 'react';
import Converter from './components/Converter/Converter';
import CurrencyRates from './components/CurrencyRates/CurrencyRates';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Route, Switch, } from "react-router";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">

                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="./">Converter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="./currency_rates">
                            Currency Rates
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </header>

            <main>
                <Switch>
                    <Route exact path="/" component={Converter}/>
                    <Route path="/currency_rates"  component={CurrencyRates}/>
                </Switch>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;
import React from 'react';
import Converter from './components/Converter/Converter';
import CurrencyRates from './components/CurrencyRates/CurrencyRates';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Redirect, Route} from "react-router";
import {LinkContainer} from 'react-router-bootstrap'
import './App.css';

const App = () => {
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
                <Route exact path="/converter" component={Converter}/>
                <Route exact path="/currency_rates" component={CurrencyRates}/>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;
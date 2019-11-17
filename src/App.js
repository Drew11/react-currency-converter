import React from 'react';
import Converter from './components/Converter/Converter';
import CurrencyRates from './components/CurrencyRates/CurrencyRates';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Route} from "react-router";
import {Link} from "react-router-dom";
import './App.css';

const App = () => {
    return (
            <div className="App">
                <header className="App-header">

                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link >
                                <Link to={"/"}>Converter</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to={"/currency_rates"}>Currency Rates</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
                <main>
                        <Route  exact path="/" component={Converter}/>
                        <Route  path="/currency_rates" component={CurrencyRates}/>
                </main>
                <footer>
                </footer>
            </div>
    );
};

export default App;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    Dropdown
} from 'react-bootstrap';

import './App.css';
import {
    getGeoData,
    getAllCurrency,
    getCountryCurrnecy,
} from './api/api';


class App extends React.Component{

  constructor(){
      super();

      this.state = {
          allCurrency: {},
          selectedCurrency:'USD',
          baseCurrency:'',
          convertingValue: null,
          defaultResult: '0.0000',
          favorites:[],
          quantity:1
      };
  }


   convertToOptions = ()=>{
      const keysCountry  = [];

      for(let k in  this.state.allCurrency.rates) {
          keysCountry.push(k)
      }

      keysCountry.sort((a, b)=>a.localeCompare(b));

      return keysCountry.map((country , index )=>
          <option key={index}
                  defaultValue={country}
          >
              {country}
          </option>
      )
    };

    setSelectedCurrency = (event)=>{
        this.setState({...this.state,
            selectedCurrency: event.target.value});
    };

    setCurrencyBase = (event)=>{
        this.setState({...this.state,
            baseCurrency: event.target.value});
    };


    convertValue = async ()=>{
        const url =  `https://api.exchangeratesapi.io/latest?base=${this.state.baseCurrency}`;
        const promise = await fetch(url);
        const convertingValue= await promise.json();
        const value = convertingValue.rates[this.state.selectedCurrency];

        this.setState({...this.state, convertingValue: Math.floor(value*10000) / 10000})
    };

    getFromFavorites = async (itemFromFavorites)=>{

        const url =  `https://api.exchangeratesapi.io/latest?base=${itemFromFavorites}`;
        const promise = await fetch(url);
        const newBaseCurrency = await promise.json();

        this.setState({...this.state, allCurrency: newBaseCurrency})
    };

    createListItems = ()=> {
         if(this.state.allCurrency.rates){
             const array = Object.entries(this.state.allCurrency.rates);
             const copy = [...array];
             copy.sort((a,b)=>a[0].localeCompare(b[0]));


            return copy.map((currency, index)=>
                <ListGroup.Item
                    key={index}
                    className="list-group-item"
                >
                    {`${currency[0]}: ${currency[1]}`}

                    <Button
                     onClick={()=>{
                         if(!this.state.favorites.includes(currency[0])){
                             const copy = [...this.state.favorites];
                             copy.push(currency[0]);

                             this.setState({...this.state, favorites: copy})}}
                         }
                    >+
                    </Button>

                </ListGroup.Item>
             );
         }
    };


    async componentDidMount(){
     const location = await getGeoData();
     const allCurrency = await getAllCurrency();
     const countryCurrency = await getCountryCurrnecy(location.country_code);

     this.setState({...this.state,
                 allCurrency: allCurrency,
                 baseCurrency: countryCurrency.currencies[0].code
     })

  }
  render(){
      console.log(this.state);

      return (
          <div className="App">
              <header className="App-header">

              </header>


              <main>
                  <Container
                      className={"container"}
                  >

                  <Row className={"row"}>
                      <Col
                          className={"col-sm-4"}
                          sm={4}>
                          <div className={"converter"}>

                  <span>
                      from
                  </span>

                              <select
                                  name="currencyBase"
                                  id="from"
                                  value={this.state.baseCurrency}
                                  onChange={this.setCurrencyBase}
                              >
                                  {
                                      this.convertToOptions()
                                  }
                              </select>

                              <span>
                      to
                  </span>

                              <select
                                  name="currencySelected"
                                  id="to"
                                  value={this.state.selectedCurrency}
                                  onChange={this.setSelectedCurrency}
                              >
                                  {
                                      this.convertToOptions()
                                  }
                              </select>

                              <div className="amount">
                                  <input
                                      type="number"
                                      defaultValue={this.state.quantity}
                                      min={this.state.quantity}
                                      onChange={(event)=>this.setState({...this.state, quantity: event.target.value})}
                                  />
                              </div>

                              <Button
                                  onClick={()=>this.convertValue() }
                              >
                                  Convert
                              </Button>


                              <div className="result">
                     <span>
                      {this.state.convertingValue?this.state.quantity*this.state.convertingValue:
                          this.state.defaultResult
                      }
                    </span>

                  </div>

                  </div>


                  </Col>
                      <Col sm={8}
                           className="current-currency"

                      >
                          <div className="current-currency-rates">
                              <span>
                              Base: {this.state.allCurrency.base}
                          </span>

                              <ListGroup variant="flush">
                                  {this.createListItems()}
                              </ListGroup>
                          </div>



                          <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                  Favoites: {this.state.favorites.length}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>

                                  {this.state.favorites.map(item=>
                                      <Dropdown.Item
                                          onClick={()=>this.getFromFavorites(item)}
                                      >
                                          {item}
                                      </Dropdown.Item>
                                  )}

                              </Dropdown.Menu>
                          </Dropdown>

                      </Col>
                  </Row>
             </Container>

              </main>
              <footer>

              </footer>
          </div>
      );
  }

}

export default App;

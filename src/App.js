import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import BigForm from './BigForm'
import CheckBox from './CheckBox'

const checkboxes = [0, 1, 2];
const checked = [false, true, false];

class App extends Component {
    render() {
        return ( 
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h1 className="App-title"> Welcome to React </h1> 
                </header> 

                <BigForm />

                <br />
                <br />

                <CheckBox items={checkboxes} />
            </div>
        );
    }
}

export default App;
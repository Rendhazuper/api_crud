import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import Header from './header/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
import React from 'react';
import './App.scss';
import Home from "./components/Home";
import Header from "./components/Header/Header";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="pageComponents">
                <Home/>
            </div>
        </div>
    );
};

export default App;

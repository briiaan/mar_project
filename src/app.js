import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => {
    return (
    <>
    <Header/>
    <h1>Say hello to Mar</h1>
    </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
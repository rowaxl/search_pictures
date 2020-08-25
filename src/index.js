import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

console.log(process.env['REACT_APP_PIC_API_KEY'])
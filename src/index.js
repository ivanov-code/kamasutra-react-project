import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.state);

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

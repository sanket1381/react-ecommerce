import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./context/user";
import CartStore from "./context/cart";
import AppStore from "./context/app";
import CommonData from "./stories/containers/Navbar/CommonDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <CommonData>
            <AppStore>
                {/* <UserStore> */}
                <CartStore>
                    <App />
                </CartStore>
                {/* </UserStore> */}
            </AppStore>
        </CommonData>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

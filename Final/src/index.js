import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/scss/main.css";
import { Web3Provider } from "@ethersproject/providers";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";

import { SettingsProvider } from "src/context/SettingsContext";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <div getLibrary={getLibrary}>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </div>
  </Web3ReactProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


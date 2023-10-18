import React, { createContext, useEffect, useState } from "react";
import { injected } from "src/connectors";
import { useWeb3React } from "@web3-react/core";

export const UserContext = createContext();


export default function AuthProvider(props) {
  const { activate, account } = useWeb3React();




  let data = {

    updateUser: (account) => {
      
    },
    connectWallet: () => {
      activate(injected, undefined, true).catch((error) => {
        if (error) {
          activate(injected);
        }
      });
    },
  };


  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}

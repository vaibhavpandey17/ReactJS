import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("token", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin() {
  const accessToken = window.localStorage.getItem("token");
  return accessToken ? true : false;
}

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [userData, setUserData] = useState({});
  const [timeLeft, setTimeLeft] = useState();
  const [endTime, setEndtime] = useState();
  const [connectedExchangeList, setConnectedExchangeList] = useState();
  const [unReadNotification, setUnReadNotification] = useState(0);



  let data = {
    userLoggedIn: isLogin,
    userData,
    timeLeft,
    endTime,
    setEndtime,
    unReadNotification,
    connectedExchangeList,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}

"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState(null);
  const [isChecking,setIsChecking] = useState(true)

  useEffect(() => {
    setIsChecking(true)
    const isLoggedIn = localStorage.getItem("powerman_login") === "true";
    const storedLoginTime = localStorage.getItem("powerman_login_time");
    
    if (isLoggedIn && storedLoginTime) {
      const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      const elapsedTime = Date.now() - parseInt(storedLoginTime, 10);
      
      if (elapsedTime < thirtyMinutesInMs) {
        setLoggedIn(true);
        setIsChecking(false)
        setLoginTime(parseInt(storedLoginTime, 10));
      } else {
        // Logout user if login time has exceeded 30 minutes
        logout();
      }
    } else{
      setLoggedIn(false)
      setIsChecking(false)
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
    setIsChecking(false)
    setLoginTime(Date.now());
    localStorage.setItem("powerman_login", "true");
    localStorage.setItem("powerman_login_time", Date.now().toString());
  };

  const logout = () => {
    setLoggedIn(false);
    setIsChecking(false)
    setLoginTime(null);
    localStorage.removeItem("powerman_login");
    localStorage.removeItem("powerman_login_time");
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout,isChecking }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

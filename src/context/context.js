import React, { createContext, useState, useContext, useEffect } from "react";
import Api from "../services/service";
const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const getUserAccounts = async () => {
    // ApiServices.getAccounts().then((res) => {
    //   // setInitialAccount(res.accountNumbers[0]);
    //   if (res?.response_code === 200) {
    //     if (res.accountNumbers) {
    //       setInitialAccount(res.accountNumbers.length>0 ?res.accountNumbers[0]: '');
    //     }
    //   }
    // });
  };
  useEffect(() => {
    getUserAccounts();
  }, []);
  const [accountNumber, setAccountNumber] = useState(2);


  
  return (
    <MyContext.Provider
      value={{
        accountNumber
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContextProvider, useMyContext };
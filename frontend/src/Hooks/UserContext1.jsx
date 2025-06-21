import { createContext } from "react";

export const UserContext1 = createContext();

export const UserProvider1 = ({children}) => {
    const User ={name:'Tejaswini KV', age:30, dept:'IT'};

  return (
    <UserContext1.Provider value={User}>
      {children}
    </UserContext1.Provider>
  );
};
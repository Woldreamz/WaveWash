import React, { createContext, useState } from 'react';


type authData = {
    data: {};
    isLoggedIn: boolean;

}
export interface DataInfo {
    name: string 
    value: any
}
export type AuthContext = {
    updateAuth: authData;
    addData: ({name, value}: DataInfo) => void;
}    

const AuthDataContext = createContext<AuthContext | null>(null);

const AuthDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const [updateAuth, setUpdateAuth] = useState<authData>({
    data: {},
    isLoggedIn: false,
  });

  const addData = ({name, value}: DataInfo) => {

    setUpdateAuth({...updateAuth, [name]: value});
  };
  return (
    <AuthDataContext.Provider value={{ updateAuth, addData }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export { AuthDataProvider, AuthDataContext };

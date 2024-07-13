import React, { createContext, useState ,useEffect} from 'react'
import { auth } from '../components/firebase';

export const UserContext=createContext();

export const UserContextProvider=({children})=>{
    const [userName,setUserName]=useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUserName(user);
          } else {
            setUserName(null);
          }
        });
    
        return () => unsubscribe();
      }, []);


  return (
    <UserContext.Provider value={{ userName }}>
      {children}
    </UserContext.Provider>
  );
};
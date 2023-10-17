import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const UserContext = createContext();

// Create the provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize user state with null

   // Check for the token in localStorage during initialization
   useEffect(() => {
     let decodedToken;
    const token = localStorage.getItem('authToken');
    if (token) {
       decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedToken.user);
      if (decodedToken) {
        setUser(decodedToken.user);
      }
    }
   
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

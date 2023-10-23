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
    console.log("Token",)
    if (token) {
       decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log("Decodetokern is this",decodedToken.user);
      if (decodedToken) {
        setUser(decodedToken.user);
      }
    }
   
  }, []);
   useEffect(() => {
     let decodedToken;
    const token = localStorage.getItem('GoogleauthToken');
    console.log("Token",)
    if (token) {
       decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log("Decodetokern is this",decodedToken);
      if (decodedToken) {
        const email = decodedToken.email;
        const name = decodedToken.name;
        const user = {email, name};
console.log(user);
        setUser(user);

      }
    }
   
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

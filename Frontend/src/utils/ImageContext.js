// ImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [base64Images, setBase64Images] = useState([]);

  const updateBase64Images = (newImages) => {
    setBase64Images(newImages);
  };

  return (
    <ImageContext.Provider value={{ base64Images, updateBase64Images }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  return useContext(ImageContext);
}

// FormDataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
   });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    console.log(formData)
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}

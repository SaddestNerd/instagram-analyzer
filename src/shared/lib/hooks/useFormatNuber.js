import { useState } from "react";

export const useFormatNuber = (maxLength, onChange) => {
  const [inputValue, setInputValue] = useState("");

  const formatCardNumber = (value) => {
    const sanitizedValue = value.replace(/\D/g, "");
    const formattedValue = sanitizedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedValue;
  };

  const handleInputChange = (e) => {
    let { value } = e.target;
    value = formatCardNumber(value);
    
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }

    setInputValue(value);
    onChange(e);
  };

  return {
    inputValue,
    handleInputChange,
  };
};

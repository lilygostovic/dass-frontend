import React, { useState } from "react";

interface dropDownProps {
  options: string[];
}

export const DropDown = ({ options }: dropDownProps) => {
  const [selectedOption, setOption] = useState<string>("");

  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "40px",
        width: "100px",
        fontWeight: "bold",
        border: "4px outset #78A6F5",
        backgroundColor: "#3E54AC",
        color: "white",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        borderRadius: "8px",
      }} >
      {options.map((option, index) => (
        <option key={index} value={option} >
          {option}
        </option>
      ))}
    </select>
  )
}
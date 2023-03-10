import React from "react";
import styled from "styled-components";

export const BaseButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 8px;
`;

interface ButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FilterButton = ({ text, isSelected, onClick }: ButtonProps) => {
  const textColor = isSelected ? "black" : "grey";
  const borderColor = isSelected ? "1px solid black" : "1px solid grey";

  return (
    <button
      onClick={onClick}
      style={{
        color: `${textColor}`,
        backgroundColor: "transparent",
        border: `${borderColor}`,
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      {text}
    </button>
  );
};

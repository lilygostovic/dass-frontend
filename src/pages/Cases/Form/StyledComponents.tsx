import styled from "styled-components";

const FIELD_WIDTH = 200;
const FONT_SIZE = 12;

export const Select = styled.select`
  font-size: ${FONT_SIZE}px;
  width: ${FIELD_WIDTH + 10}px;
  border: none;
  margin: 4px 0px;
`;

export const Submit = styled.input`
  margin-top: 20px;
  padding: 4px;
  width: ${FIELD_WIDTH + 10}px;
`;

export const Label = styled.label`
  font-size: ${FONT_SIZE + 2}px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px 40px 40px 40px;

  background-color: #ffffffa2;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

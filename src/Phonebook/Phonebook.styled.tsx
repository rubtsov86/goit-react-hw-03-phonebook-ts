import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 500px;
  border: 1px solid black;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const PhonebookField = styled(Field)`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: block;
`;

export const Error = styled(ErrorMessage)`
  display: inline-block;
  margin-left: 5px;
  color: red;
`;

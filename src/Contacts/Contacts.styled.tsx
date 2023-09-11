import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 500px;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const AgeSelect = styled.select`
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 60px;
  border: 1px solid #082f49;
  &:hover {
    background-color: #0ea5e9;
    color: white;
    border: 1px solid #082f49;
  }
`;

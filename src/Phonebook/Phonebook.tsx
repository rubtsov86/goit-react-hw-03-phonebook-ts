import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import {
  Title,
  Container,
  FieldLabel,
  PhonebookField,
  Button,
  Error,
} from "./Phonebook.styled";

interface IProps {
  onSubmit: (name: string, number: string) => true | null;
}

// interface IState {
//   name: string;
//   number: string;
// }

const initialValues = {
  name: "",
  number: "",
};

const shema = yup.object().shape({
  name: yup.string().min(4).required(),
  number: yup.string().required(),
});

export class Phonebook extends React.Component<IProps> {
  // state = {
  //   name: "",
  //   number: "",
  // };

  // handleChange = (evt: React.FormEvent<HTMLInputElement>): void => {
  //   const inputRef = evt.target as HTMLInputElement;
  //   const inputName = inputRef.name as keyof IState;

  //   const newState = {
  //     [inputName]: inputRef.value,
  //   } as Pick<IState, keyof IState>;

  //   this.setState(newState);
  // };

  // onSubmitHandler = (e: React.SyntheticEvent) => {
  //   e.preventDefault();

  //   this.props.onSubmit(this.state.name, this.state.number);

  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: "", number: "" });
  // };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={shema}
            onSubmit={({ name, number }, actions) => {
              const addNewContact = this.props.onSubmit(name, number);
              if (addNewContact) {
                actions.resetForm();
              }
            }}
          >
            <Form>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <PhonebookField
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                // value={this.state.name}
                // onChange={this.handleChange}
              />
              <Error name="name" component="span" />
              <FieldLabel htmlFor="number">Number</FieldLabel>
              <PhonebookField
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // value={this.state.number}
                // onChange={this.handleChange}
              />
              <Error name="number" component="span" />
              <Button type="submit">Add contact</Button>
            </Form>
          </Formik>
        </Container>
      </>
    );
  }
}

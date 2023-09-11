import React from "react";
import { nanoid } from "nanoid";
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts, IData } from "./Contacts/Contacts";
import { Title } from "./Contacts/Contacts.styled";
import { Filter } from "./Filter/Filter";
import toast, { Toaster } from "react-hot-toast";

export interface IState {
  contacts: IData[];
  filter: string;
}

class App extends React.Component<{}, IState> {
  state = {
    contacts: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
        friend: false,
        age: "unknown",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
        friend: false,
        age: "unknown",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
        friend: false,
        age: "unknown",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
        friend: false,
        age: "unknown",
      },
    ],
    filter: "",
  };

  onSubmit = (name: string, number: string): true | null => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      toast.error(`Name ${name} is in your list`);
      return null;
    }

    const newContact = { name, number, id: nanoid(), friend: false, age: "" };

    this.setState((prevState: IState): IState => {
      const newContacts = [...prevState.contacts, newContact];
      return { ...prevState, contacts: newContacts };
    });
    return true;
  };

  handleChange = (evt: React.FormEvent<HTMLInputElement>): void => {
    this.setState((PrevState) => {
      return {
        ...PrevState,
        filter: (evt.target as HTMLInputElement).value.toLowerCase(),
      };
    });
  };

  onAddFriend = (evt: React.FormEvent<HTMLInputElement>) => {
    const inputRef = evt.target as HTMLInputElement;
    const idToUpdate = inputRef.id;
    const isCheked = inputRef.checked;
    const updatedContacts = this.state.contacts.map((contact) =>
      contact.id === idToUpdate ? { ...contact, friend: isCheked } : contact
    );
    this.setState((prevState) => {
      return { ...prevState, contacts: updatedContacts };
    });
  };

  onAddAge = (evt: React.FormEvent<HTMLSelectElement>) => {
    const selectRef = evt.target as HTMLSelectElement;
    const idToUpdate = selectRef.id;

    const selectValue = selectRef.value;
    console.log(selectValue);

    const updatedContacts = this.state.contacts.map((contact) =>
      idToUpdate.includes(contact.id)
        ? { ...contact, age: selectValue }
        : contact
    );

    this.setState((prevState) => {
      return { ...prevState, contacts: updatedContacts };
    });
  };

  onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== (e.target as HTMLButtonElement).id
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="App">
        <Phonebook onSubmit={this.onSubmit} />
        <Title>Contacts</Title>
        <Filter filter={filter} handleChange={this.handleChange} />
        <Contacts
          contacts={contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter)
          )}
          onDelete={this.onDelete}
          onAddFriend={this.onAddFriend}
          onAddAge={this.onAddAge}
        />

        <Toaster />
      </div>
    );
  }
}

export default App;

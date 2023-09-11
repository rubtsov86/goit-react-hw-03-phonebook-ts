import {
  ContactsList,
  Container,
  ContactsListItem,
  AgeSelect,
  Button,
} from "./Contacts.styled";

export interface IData {
  id: string;
  name: string;
  number: string;
  friend: boolean;
  age: string;
}

interface IContacts {
  contacts: IData[];
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onAddFriend: (evt: React.FormEvent<HTMLInputElement>) => void;
  onAddAge: (evt: React.FormEvent<HTMLSelectElement>) => void;
}

export const Contacts: React.FC<IContacts> = ({
  contacts,
  onDelete,
  onAddFriend,
  onAddAge,
}) => {
  return (
    <Container>
      <ContactsList>
        {contacts.map(({ name, number, id, friend, age }) => (
          <ContactsListItem key={id}>
            <input
              type="checkbox"
              checked={friend}
              onChange={onAddFriend}
              id={id}
            />
            {name} {number}{" "}
            <label>
              age
              <AgeSelect
                name="age"
                onChange={onAddAge}
                id={"age" + id}
                value={age}
              >
                <option value="unknown">unknown</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
              </AgeSelect>
            </label>
            <Button type="button" onClick={onDelete} id={id}>
              Delete
            </Button>
          </ContactsListItem>
        ))}
      </ContactsList>
    </Container>
  );
};

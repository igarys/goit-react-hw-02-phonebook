import { Component } from "react";
// import { Contacts } from "./Contacts";
// import { Form } from "./Form";
import { nanoid } from "nanoid";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleAddButton = e => {
    e.preventDefault();

    this.setState(prevState => ({
      contacts: [
        { id: nanoid(), name: this.state.name, number: this.state.number },
        ...prevState.contacts,
      ],
    }));
    document.querySelector('input').value = '';
  };
  // searchInput = e => {
  //   this.setState({ filter: e.target.value });
  // }

    
  filterContacts = (e, filteredContacts) => {
    this.setState({ filter: e.target.value });
    const { contacts, filter } = this.state;
    return filteredContacts = contacts.filter(contact => {
      contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts;
    console.log(this.state);
    return (
      <div>
        <form className="form" onSubmit={this.handleAddButton}>
          <h2>Phonebook</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              onChange={this.handleInput}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        {/* <Contacts contacts={name} /> */}
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input type="text"  onChange={this.filterContacts}></input>
          </label>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name} : {contact.number} 
              </li>
            ))}
            {/* <li>{filteredContacts}</li> */}
          </ul>
        </div>
      </div>
    );
  }
};

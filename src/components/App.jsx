import { Component } from "react";
import { Contacts } from "./Contacts";
import { Form } from "./Form";
import { nanoid } from "nanoid";


export class App extends Component {

  state = {
    contacts: [],
    name: '',
  };
  handleInput = e => {
    this.setState({ name: e.target.value })
  }
  handleAddButton = (e) => {
    e.preventDefault();
    // this.setState({ contacts: [ {this.name } + this.state.contacts] });
    // this.setState(state => {
    //   return { contacts: [this.state.contacts] + { name: e.target.value }  }
    // })
    this.setState(prevState => ({ contacts: [this.state.name, ...prevState.contacts]}))
    document.querySelector('input').value= ''
  }
  
  render() {
    const  { contacts , name } = this.state;
    console.log(this.state);
    const id = nanoid();
    return (
      console.log(`Name: ${name}`),
      console.log(`Contacts: ${contacts}`),
      (
        <div>
          <form className='form' onSubmit={this.handleAddButton}>
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
            <button type="submit">Add contact</button>
          </form>
          {/* <Contacts contacts={name} /> */}
          <div>
            <h2>Contacts</h2>
            <ul>
              {contacts.map((contact) => (
                <li key={id}>{contact}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    );
  }
};

import { useState, useEffect } from "react";
import Section from "./section";
import Contacts from "./contacts";
import Form from "./form";
import Filter from './filter'
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import style from "./contacts/contacts.module.scss";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

 
  const filteredContatcs = () => {
    
  }
  
  // const filteredContatcs = () => {
  //   const names = contacts.map(c => c.name);

  //   const normalizedFilter = filter.toLowerCase();
  //   setContacts(contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)))
  // }
 

  const formSubmitHandle = ({name, number}) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };

    const getAllContactsNames = contacts.map(cont => cont.name);
    if (getAllContactsNames.includes(name)) {
      return Notify.warning(`${name} is already in contacts`);
    }

    setContacts([newContact, ...contacts])
  }
  
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
    getVisibleContatcts()
  };

  const getVisibleContatcts = () => {
    const normalizedFilter = filter.toLowerCase();

    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

  }



  const deliteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
   
  }
 
  return (
      <Section title='Phonebook'>
        <Form
        onSubmitHandle={formSubmitHandle}
      />
        
        {contacts.length === 0 ? (
          <div className={style.contacts__emty}>
            <h2>Missing contacts</h2>
          </div>) : (
          <Contacts
          title='Contacts'
          contacts={contacts}
          onDeliteContact={deliteContact}
          >
          
            <Filter
              value={filter}
              changeFilter={changeFilter}
            />
           
          
        </Contacts>)
          }
        
      </Section>
    );
}


//   componentDidMount() {
//     try {
//   const savedContacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(savedContacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//       };
    
//     } catch (error) {
//         console.log(error.name); 
//         console.log(error.message);
//     };
    
    
//   }
// //Обычный метод класса, не стрелочная функция
//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevState)//до обновления state
//     console.log(this.state);// после обновления state
//     if (prevState.contacts !== this.setState.contacts) {
//       console.log('обновилась информация');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
    
//   }





//   changeFilter = (e) => {
//     this.setState({
//       filter: e.currentTarget.value
//     });
//   };
  
//   deliteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   getVisibleContatcts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

  

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = this.getVisibleContatcts();
 
//     return (
//       <Section title='Phonebook'>
//         <Form
//           onSubmitHandle={this.formSubmitHandle} />
        
//         {contacts.length === 0 ? (
//           <div className={style.contacts__emty}>
//             <h2>Missing contacts</h2>
//           </div>) : (
//           <Contacts
//           title='Contacts'
         
//           contacts={visibleContacts}
//           onDeliteContact={this.deliteContact}>
          
//           <Filter value={filter} onChange={this.changeFilter} />
           
          
//         </Contacts>)
//           }
        
//       </Section>
//     );
//   }
// }


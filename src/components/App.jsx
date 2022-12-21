import { useState, useEffect } from "react";
import Section from "./section";
import Contacts from "./contacts";
import {Form} from "./form/form";
import Filter from './filter'
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import style from "./contacts/contacts.module.scss";

export const App = () => {
  const [contacts, setContacts] = useState(() => 
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  // анонимная функция внутри useState для загрузки только одного раза при загрузке страницы при первом рендере

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  const formSubmitHandle = (name, number) => {
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
    return contacts.filter(contact =>  
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
          contacts={getVisibleContatcts()}//если нужно передать результат функции
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

 // useEffect(() => {
  //   console.log('run use state')
  // }, [])
  
  //где [] это массив зависимостей, если он пустой, запуск будет только один раз при запуске
  // например [contatcs] - если изменлся contats то запусти use effect



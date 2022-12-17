//DONE
import style from "./contacts.module.scss";
import PropTypes from 'prop-types';
import React from "react";

export default function Contacts({ title, contacts, onDeliteContact, children }) {
    return (
       
        <div className={style.contacts}>
            
            <h2>{title}</h2>
            {children}
            <div className={style.contacts__wrap}>
           
                <ul className={style.contacts__list}>
                    {contacts.map(({ id, name, number }) => (
                        <li key={id} className={style.contacts__item}>
                            <p>{name}</p>
                            <p>{number}</p>
                            <button
                                className={style.contacts__button}
                                type='button'
                                onClick={() => onDeliteContact(id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
             
        
        
    );
};

Contacts.protoType = {
    title: PropTypes.string.isRequired,
    onDeliteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired

}


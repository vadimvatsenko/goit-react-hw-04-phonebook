//DONE
import { useState, useEffect } from 'react';
import style from './form.module.scss'
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

//катомный хук для localStorage
const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState]
}

const Form = ({ onSubmitHandle }) => {
    const [name, setName] = useLocalStorage('name', '');
    const [number, setNumber] = useLocalStorage('number', '');
    // const [name, setName] = useState('');
    // const [number, ] = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value);
        }
        if (name === 'number') {
            setNumber(value)
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmitHandle(name, number);
        resetForm();
    }

    const resetForm = () => {
        setNumber('');
        setName('');
    }


    return (
        <form className={style.form__section}
        onSubmit={handleSubmit}
        >
            <label className={style.label__header} htmlFor={nameInputId}>Name</label>
            <input
                onChange={handleChange}
                className={style.label__input}
                id={nameInputId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label  className={style.label__header}
                    htmlFor={numberInputId}>Number</label>
            <input
                onChange={handleChange}
                className={style.label__input}
                id={numberInputId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button
                className={style.phonebook__button}
                type="submit">
                Add contact
            </button>
        </form>
        
    );


}

Form.propTypes = {
  onSubmitHandle: PropTypes.func.isRequired,
  
};

export {Form}


//DONE
import React, { Component } from "react";
import { useState } from "react";
import style from './form.module.scss'
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

export const Form = () => {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')

    const resetForm = () => {
        setName('');
        setNumber('')
    }


    // handleChange = (e) => {
    //     const { name, value } = e.currentTarget;
    //     this.setState({
    //         [name]: value
    //     });
    // };



    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onSubmitHandle(this.state);
    //     this.resetForm();

    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();

    // }





    return (
        <form className={style.form__section} onSubmit={this.handleSubmit}>
            <label className={style.label__header} htmlFor={this.nameInputId}>Name</label>
            <input
                onChange={this.handleChange}
                className={style.label__input}
                id={this.nameInputId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={style.label__header} htmlFor={this.numberInputId}>Number</label>
            <input
                onChange={this.handleChange}
                className={style.label__input}
                id={this.numberInputId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button className={style.phonebook__button} type="submit">Add contact</button>
        </form>
        
    )
}


Form.propTypes = {
  onSubmitHandle: PropTypes.func.isRequired,
  
};
//DONE
import { useState } from 'react';
import style from './form.module.scss'
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

const Form = ({ onSubmitHandle }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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

// export default class Form extends Component {
//     nameInputId = nanoid();
//     numberInputId = nanoid();
    
//     state = {
//     name: '',
//     number: ''
//     }


//     handleChange = (e) => {
//         const { name, value } = e.currentTarget;
//         this.setState({
//             [name]: value
//         });
//     };

//         resetForm = () => {
//             this.setState(
//                 {
//                     name: '',
//                     number: ''
//                 }
//             );
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.onSubmitHandle(this.state);
//         this.resetForm();

//     };



//     render() {
//         const {name, number} = this.state
//         return (
//             <form className={style.form__section } onSubmit={this.handleSubmit}>
//                 <label className={style.label__header} htmlFor={this.nameInputId}>Name</label>
//                 <input
//                     onChange={this.handleChange}
//                     className={style.label__input}
//                     id={this.nameInputId}
//                     type="text"
//                     name="name"
//                     value={name}
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                 />
//                 <label className={style.label__header} htmlFor={this.numberInputId}>Number</label>
//                 <input
//                     onChange={this.handleChange}
//                     className={style.label__input}
//                     id={this.numberInputId}
//                     type="tel"
//                     name="number"
//                     value={number}
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                 />

//                 <button className={style.phonebook__button} type="submit">Add contact</button>
//             </form>
        
//         );  
//     };
// }

// Form.propTypes = {
//   onSubmitHandle: PropTypes.func.isRequired,
  
// };
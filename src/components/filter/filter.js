//DONE
import React from "react";
import style from './filter.module.scss';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


const idForFilter = nanoid();

export default function Filter({value, onChange}) {
    return (
        <form className={style.filter__form}> 
            <label htmlFor={idForFilter} className={style.filter__title}>Find contact by name</label>
            <input className={style.filter__input } id={ idForFilter} type="text" name="filter" value={value} onChange={onChange } />
        </form>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
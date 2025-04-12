import React, { useId } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
    const filterId = useId();
    
    return (
        <div className={s.form}>
            <label htmlFor={filterId}>Find contacts by name</label>
            <input className={s.input} type='text' name='filter' id='filterId' value={value} onChange={(e) => onFilter(e.target.value)} />
        </div>
    );
};

export default SearchBox;
import React from 'react';
import s from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, deleteUser }) => {
    return (
        <>
         <div className={s.inner}>
            <h3>{name}</h3>
            <a href={`tel:${number}`}>{number}</a>
         </div>
         <button classname={s.button} type='button' onClick={() => deleteUser(id)}>
            Delete
         </button>
        </>
    );
};

export default Contact;
import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ userContacts, deleteUser }) => {
    return (
        <>
         <ul className={s.list}>
            {userContacts.map((contact) => (
                <li className={s.item} key={contact.id}>
                    <Contact contact={contact} deleteUser={deleteUser} />
                </li>
            ))}
         </ul>
        </>
    );
};

export default ContactList;

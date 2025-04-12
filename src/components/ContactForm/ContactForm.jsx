import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import React, { useId } from 'react';
import s from './ContactForm.module.css';
import Container from '../Container/Container';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    number: '',
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().matches(/^\+?\d{5,13}$/, 'Number must be 5-13 digits').required('Required'),
});

const ContactForm = ({addContact }) => {
    const nameId = useId();
    const numberId = useId();


const handleSubmit = (values, actions)  => {
   const newContact = {
    id: nanoid(),
    name: values.name,
    number: values.number,
   };
   addContact(newContact);
   actions.resetForm();
};

const handleNumberInput = (e) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;

    if (e.key === '+' && cursorPosition !== 0) {
        e.preventDefault();
        return;
    }

    if (!/[0-9+]/.test(e.key) || (e.key === '+' && value.includes('+'))) {
        e.preventDefault();
    }
};

return (
    <Formik validationSchema={FeedbackSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isValid, dirty }) => (
            <Form className={s.form}>
                <Container wrapper='wrapper'>
                    <label htmlFor={nameId}>Name</label>
                    <Field className={s.input} type='text' name='name' id={nameId} placeholder='Artem' />
                    <ErrorMessage name='name' component='span' className={s.error} />
                </Container>
                <Container wrapper='wrapper'>
                    <label htmlFor={numberId}>Number</label>
                    <Field className={s.input} type='text' name='number' id={numberId} placeholder='+380657683892' onKeyPress={handleNumberInput} />
                    <ErrorMessage name='name' component='span' className={s.error} />
                </Container>
                <button className={s.button} type='submit' disabled={!isValid || !dirty}>
                    Add contact
                </button>
            </Form>
        )}
    </Formik>
 );
};

export default ContactForm;
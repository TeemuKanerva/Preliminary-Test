import React, { useState } from 'react';
import { validateNameField, validateEmailField, validatePhoneNumberField } from '../../utils/utils';
import './SignUpForm.css';

/**
 * Handles UI rendering participant creation form
 */
export default (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

    const createParticipant = () => {

        if(validateNameField(name))
            return;
  

        if(validateEmailField(email))
            return;
    

        if(validatePhoneNumberField(phonenumber))
            return;


        props.createParticipant({name: name, email: email, phonenumber: phonenumber});
        setName('');
        setEmail('');
        setPhoneNumber('');
    }

    return <div className="signup-form">
        <input className="signup-form--spacing" type="text" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name}/>
        <input className="signup-form--spacing" type="text" placeholder="E-mail address" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input className="signup-form--spacing" type="text" placeholder="Phonenumber" onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber}/>
        <button type="button" className="signup-form__submit_button" onClick={() => createParticipant()}>Add new</button>    
    </div>
}
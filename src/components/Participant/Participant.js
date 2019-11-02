import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Participant.css';
import { validateNameField, validateEmailField, validatePhoneNumberField } from '../../utils/utils';

/**
 * Handles the rendering of individual participant row in a table
 */
export default (props) => {

    const [editMode, setEditMode ] = useState(false);
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phonenumber, setPhonenumber] = useState(props.phonenumber);

    const onSaveClick = () => {

        if(validateNameField(name))
            return;


        if(validateEmailField(email))
            return;


        if(validatePhoneNumberField(phonenumber))
            return;

        props.modifyExistingParticipant({id: props.id, name: name, email: email, phonenumber: phonenumber});
        setEditMode(false);
    }

    const renderViewMode = () => {
        return (<tr className="participant">
            <td><p>{props.name}</p></td> 
            <td><p>{props.email}</p></td>
            <td><p>{props.phonenumber}</p></td>
            <td><button className="participant__icon-button" onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faPen} /></button></td>
            <td><button className="participant__icon-button" onClick={() => props.removeParticipant(props.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>);
    }

    const renderEditMode = () => {
        return (<tr className="participant">
            <td><input className="participant__primary-color" defaultValue={props.name} onChange={(e) => setName(e.target.value)} /></td> 
            <td><input className="participant__primary-color" defaultValue={props.email} onChange={(e) => setEmail(e.target.value)}/></td>
            <td><input className="participant__primary-color" defaultValue={props.phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/></td>
            <td><button className="participant__cancel-button" onClick={() => setEditMode(false)}>Cancel</button></td>
            <td><button className="participant__save-button" onClick={onSaveClick}>Save</button></td>
        </tr>)
    }

    return !editMode ? renderViewMode() : renderEditMode();
}
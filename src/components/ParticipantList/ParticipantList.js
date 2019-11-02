import React, { useState, useEffect  } from 'react';
import Participant from '../Participant/Participant';
import SignUpForm from '../SignUpForm/SignUpForm';
import { createRandomParticipant } from '../../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { SIGNUP_PARTICIPANT_ROW_ENUM } from '../../utils/moduleConfig';
import './ParticipantList.css';

/**
 * Handles UI rendering of all of the participants
 * Includes the functionality of removing, adding, modifying and sorting of participant
 */
export default (props) => {

    const [participantList, setParticipantList ] = useState([]);
    const [sortOrderAsc, setSortOrderAsc ] = useState(false);
    const [activeColumn,setActiveCol] = useState(-1);

    useEffect(() => {
        setParticipantList(createRandomParticipant());
    }, []);

    const createParticipant = (params) => {
        setParticipantList(participantList.concat({id: participantList.length + 1, name: params.name, email: params.email, phonenumber: params.phonenumber}));
    }

    const removeParticipant = (id) => {
        setParticipantList(participantList.filter(element => element.id !== id));
    }

    // Modifies existing 
    const modifyExistingParticipant = (params) => {
        let copy = Object.assign([], participantList);
        let index = copy.findIndex((row) => {
            return row.id === params.id;
        });
        copy[index].name = params.name;
        copy[index].email = params.email;
        copy[index].phonenumber = params.phonenumber;
        
        setParticipantList(copy);
    }

    const renderSignUpContacts = () => {  
        return participantList.map((contact) => {
            return <Participant key={contact.id} id={contact.id} name={contact.name} email={contact.email} phonenumber={contact.phonenumber} modifyExistingParticipant={modifyExistingParticipant} removeParticipant={removeParticipant}/>
        });
    }

    const sortTableByColAttribute = (columnId) => {
        let copy = Object.assign([], participantList);

        if(columnId === SIGNUP_PARTICIPANT_ROW_ENUM.NAME) {
            sortOrderAsc ? copy.sort((a, b) => { return a.name < b.name}) : copy.sort((a, b) => { return b.name < a.name});
            setActiveCol(SIGNUP_PARTICIPANT_ROW_ENUM.NAME);
        }
        else if(columnId === SIGNUP_PARTICIPANT_ROW_ENUM.EMAIL) {
            sortOrderAsc ? copy.sort((a, b) => { return a.email < b.email}) : copy.sort((a, b) => { return b.email < a.email});
            setActiveCol(SIGNUP_PARTICIPANT_ROW_ENUM.EMAIL);
        }
        else if(columnId === SIGNUP_PARTICIPANT_ROW_ENUM.PHONENUMBER) {
            sortOrderAsc ? copy.sort((a, b) => { return a.phonenumber < b.phonenumber}) : copy.sort((a, b) => { return b.phonenumber < a.phonenumber});
            setActiveCol(SIGNUP_PARTICIPANT_ROW_ENUM.PHONENUMBER);
        }
        else return;

        setParticipantList(copy);
        setSortOrderAsc(!sortOrderAsc);
    }

    const renderSortedRowIndicator = (columnId) => {
        if(columnId === activeColumn) {
            return sortOrderAsc ? <FontAwesomeIcon className="participant-list__sort-button" icon={faArrowUp}/> : <FontAwesomeIcon className="participant-list__sort-button" icon={faArrowDown}/>;
        }
        else {
            return;
        }
    } 

    return <div className="participant-list">
        <h2 className="participant-list__title">List of participants</h2>
        <SignUpForm createParticipant={createParticipant}/>
        <table>
            <thead>
                <tr>
                    <th className="table-col-data">
                        <span className="participant-list__attribute-header" onClick={() => sortTableByColAttribute(SIGNUP_PARTICIPANT_ROW_ENUM.NAME)}>Name</span> 
                        {renderSortedRowIndicator(SIGNUP_PARTICIPANT_ROW_ENUM.NAME)}
                    </th>
                    <th className="table-col-data">
                        <span className="participant-list__attribute-header" onClick={() => sortTableByColAttribute(SIGNUP_PARTICIPANT_ROW_ENUM.EMAIL)}>E-mail address</span>
                        {renderSortedRowIndicator(SIGNUP_PARTICIPANT_ROW_ENUM.EMAIL)}
                    </th>
                    <th className="table-col-data">
                        <span className="participant-list__attribute-header" onClick={() => sortTableByColAttribute(SIGNUP_PARTICIPANT_ROW_ENUM.PHONENUMBER)}>Phone number</span>
                        {renderSortedRowIndicator(SIGNUP_PARTICIPANT_ROW_ENUM.PHONENUMBER)}
                    </th>
                    <th className="table-col-edit"></th>
                    <th className="table-col-edit"></th>
                </tr>
            </thead>
            <tbody>
                {renderSignUpContacts()} 
            </tbody>
        </table>
    </div>
}
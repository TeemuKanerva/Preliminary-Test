import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ParticipantList from './components/ParticipantList/ParticipantList';


export default (props) => {
  return (
    <div>
        <Header/>
        <ParticipantList/>
    </div>
  );
}
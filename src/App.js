import React, { Component } from 'react';
import { noteData } from './firebaseConnect';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import Nav from './Nav';

class App extends Component {
  render() {
    noteData.once('value').then(function(snapshot) {
      console.log(snapshot.val());
    })
    console.log(noteData);
    return (
      <div>
      <Nav/>
       <div className="container">
           <div className="row">
            <NoteList/>
            <NoteForm />          
           </div>
       </div>
       </div>
   
    );
  }
}

export default App;

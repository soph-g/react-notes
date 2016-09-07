import React from 'react';
import Note from './Note';

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: ["This is a note"]
    }
  }
  render() {
    return (
      <ul>
      {this.state.notes.map(function(note){
        return (
          <Note>{note}</Note>
        )
      })}
    </ul>
    )
  }

};

export default NotesList;
